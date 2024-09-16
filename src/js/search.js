const searchContainer = document.getElementById("search-container");
const searchInput = document.getElementById("search-input");
const searchCloseIcon = document.getElementById("search-close-icon");
const searchResult = document.getElementById("search-result");

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const hideOnEsc = {
  name: "hideOnEsc",
  defaultValue: true,
  fn: (instance) => {
    const onKeyDown = (e) => {
      if (e.keyCode === 27) {
        instance.hide();
        searchInput.blur();
      }
    };
    return {
      onShow: () => {
        document.addEventListener("keydown", onKeyDown);
      },
      onHide: () => {
        document.removeEventListener("keydown", onKeyDown);
      },
    };
  },
};

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
          (item, i) => `
                <a class="result__item" role="presentation" href="${item.url}">
                      <img class="result__${i % 2 ? "icon" : "img"}" src="${i % 2 ? "./assets/clock.svg" : item.thumbnailUrl}" alt="${item.title}">
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

const tooltip = tippy(searchInput, {
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
  onClickOutside(instance) {
    instance.hide();
  },
  plugins: [hideOnEsc, hideOnEmptyInput],
  offset: [0, -5],
});

searchInput.addEventListener("focus", () => {
  tooltip.enable();
});

searchCloseIcon.addEventListener("click", () => {
  searchInput.value = "";
  searchCloseIcon.style.display = "none";
  tooltip.disable();
});
