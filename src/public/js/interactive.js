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

const getOverlay = () => document.getElementsByClassName("header__overlay")[0];

const isOpenOverlay = () => {
  const overlay = getOverlay();
  return overlay.classList.contains("active");
};

const showOverlay = (callback = Function()) => {
  const overlay = getOverlay();
  document.body.style.overflow = "hidden";
  overlay.classList.add("active");

  return callback(overlay);
};
const hideOverlay = (callback = Function()) => {
  const overlay = getOverlay();
  const hide = () => {
    document.body.style.overflow = "visible";
    overlay.classList.remove("active");
  };
  return callback(overlay, hide);
};

const letters = [...document.querySelectorAll(".menu__letters span")];
const cities = [...document.querySelectorAll(".menu__cities li")];
const menuOpenBtn = document.getElementById("menu-button");
const menuCloseBtn = document.getElementById("menu-close");
const menu = document.querySelector(".header__menu");

letters.forEach((letter) => {
  letter.addEventListener("click", () => {
    const currentLetter = letter.getAttribute("data-name");

    letters.forEach((l) => (l.style.fontWeight = "normal"));
    letter.style.fontWeight = "bold";

    cities.forEach(
      (c) =>
        (c.style.display =
          c.getAttribute("data-name") === currentLetter ? "block" : "none"),
    );
  });
});

const isOpenMenu = () => menu.classList.contains("active") && isOpenOverlay();

const closeMenu = () => {
  menu.classList.remove("active");
  menuCloseBtn.classList.remove("active");
  hideOverlay((_, hide) => {
    hide();
  });
};

const openMenu = () => {
  menu.classList.add("active");
  menuCloseBtn.classList.add("active");
  showOverlay((overlay) => {
    overlay.addEventListener("click", closeMenu);
  });
};

menuOpenBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);

window.addEventListener(
  "keyup",
  (e) => isOpenMenu() && e.key === "Escape" && closeMenu(),
);

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
        ? searchCloseIcon.classList.remove("hidden")
        : searchCloseIcon.classList.add("hidden");

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
  searchCloseIcon.classList.add("hidden");
  tooltipSearch.disable();
});

const searchAddressIcon = document.getElementById("search-address-icon");
const searchAddressContent = document.getElementById("search-address-content");
// const cities = [...searchAddressContent.querySelectorAll(".menu__cities li")];

const CLOSE_ICON_ID = "address-close-icon";

const tooltip = tippy(searchAddressIcon, {
  content: searchAddressContent.innerHTML,
  trigger: "click",
  arrow: false,
  triggerTarget: [searchAddressIcon],
  placement: "top-end",
  hideOnClick: false,
  allowHTML: true,
  maxWidth: "none",
  theme: "custom",
  interactive: true,
  onShow(instance) {
    instance.popper.addEventListener("click", closeTooltip);
    instance.popper
      .getElementsByTagName("input")[0]
      .addEventListener("input", searchCities);

    showOverlay();

    hideOverlay((overlay, hide) => {
      overlay.addEventListener("click", hide);
    });
  },
  onHide(instance) {
    instance.popper.removeEventListener("click", closeTooltip);
    instance.popper
      .getElementsByTagName("input")[0]
      .removeEventListener("input", searchCities);

    hideOverlay((overlay, hide) => {
      hide();
      overlay.removeEventListener("click", hide);
    });
  },
  onClickOutside(instance) {
    instance.hide();
  },
  offset: [0, -5],
  plugins: [hideOnEsc],
});

const closeTooltip = (e) => {
  if (
    e.target.id === CLOSE_ICON_ID ||
    e.target.parentElement.id === CLOSE_ICON_ID
  ) {
    tooltip.hide();
  }
};
const searchCities = (e) => {
  //Логика поиска, пока не понятно как она должна выглядеть
  // cities.forEach(
  //     (c) => {
  //         (c.style.display =
  //             c.getAttribute('data-name').includes(e.target.value) ? "block" : "none")
  //     },
  // );
  // const content = searchAddressContent.cloneNode(true)
  // tooltip.setContent(
  //     content.innerHTML
  // )
};
