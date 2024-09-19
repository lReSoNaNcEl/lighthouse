const letters = [...document.querySelectorAll(".menu__letters span")];
const cities = [...document.querySelectorAll(".menu__cities li")];
const button = document.getElementById("menu-button");
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
  button.classList.remove("active");
  hideOverlay((_, hide) => {
    hide();
  });
};

const openMenu = () => {
  menu.classList.add("active");
  button.classList.add("active");
  showOverlay((overlay) => {
    overlay.addEventListener("click", closeMenu);
  });
};

button.addEventListener("click", () =>
  isOpenMenu() ? closeMenu() : openMenu(),
);

window.addEventListener(
  "keyup",
  (e) => isOpenMenu() && e.key === "Escape" && closeMenu(),
);
