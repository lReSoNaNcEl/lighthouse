const searchContainer = document.getElementById("search-container");
const searchInput = document.getElementById("search-input");
const searchCloseIcon = document.getElementById("search-close-icon");
const searchResult = document.getElementById("search-result");

const hideOnEmptyInput = {
  name: "hideOnEmptyInput",
  defaultValue: true,
  fn: (instance) => {
    const loadData = async () => {
      //Место для AJAX запроса с обновлением результатов поиска, сейчас тут стоит mock-заглушка с данными из json-server, надо будет заменить
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_start=0&_limit=8&title_like=${searchInput.value}`,
      );
      return res.json();
    };

    const onInput = debounce(async (e) => {
      const data = await loadData();

      e.target.value
        ? (searchCloseIcon.style.display = "block")
        : (searchCloseIcon.style.display = "none");

      if (!data?.length) {
        return;
      }

      e.target.value ? instance.show() : instance.hide();

      const HTML = data
        .map(
          (item) => `
                <a class="result__item" role="presentation" href="${item.url}">
                      <img class="result__img" src="${item.thumbnailUrl}" alt="${item.title}">
                      <span class="result__text">
                    ${item.title}
                  </span>
                    </a>
          `,
        )
        .reduce((acc, item) => acc + item, "");

      instance.setContent(`
            <div class="result__list" role="listbox">
                ${HTML}
            </div>
            `);
    });

    return {
      onShow: () => {
        searchInput.addEventListener("input", onInput);
        searchContainer.classList.add("focused");
      },
      onHide: () => {
        searchContainer.classList.remove("focused");
      },
    };
  },
};

const tooltipSearch = tippy(searchInput, {
  content: searchResult.innerHTML,
  trigger: "click",
  duration: 0,
  triggerTarget: [searchContainer],
  arrow: false,
  placement: "bottom",
  hideOnClick: false,
  allowHTML: true,
  appendTo: searchContainer,
  maxWidth: "none",
  theme: "custom",
  interactive: true,
  onShow() {
    showOverlay();

    hideOverlay((overlay, hide) => {
      overlay.addEventListener("click", hide);
    });
  },
  onHide() {
    hideOverlay((overlay, hide) => {
      hide();
      overlay.removeEventListener("click", hide);
    });
  },
  onClickOutside(instance) {
    instance.hide();
  },
  plugins: [hideOnEsc, hideOnEmptyInput],
  offset: [0, -5],
});

searchInput.addEventListener("focus", () => {
  tooltipSearch.enable();
});

searchCloseIcon.addEventListener("click", () => {
  searchInput.value = "";
  searchCloseIcon.style.display = "none";
  tooltipSearch.disable();
});
