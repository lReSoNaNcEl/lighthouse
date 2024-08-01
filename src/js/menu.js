const letters = [...document.querySelectorAll(".menu__letters span")];
const cities = [...document.querySelectorAll(".menu__cities li")];
const button = document.getElementById("menu-button");
const menu = document.querySelector(".header__menu");
const overlay = document.querySelector(".header__overlay");

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

const isOpenMenu = () =>
  menu.classList.contains("active") && overlay.classList.contains("active");

const closeMenu = () => {
  document.body.style.overflow = "visible";
  menu.classList.remove("active");
  overlay.classList.remove("active");
  button.classList.remove("active");
};

const openMenu = () => {
  document.body.style.overflow = "hidden";
  menu.classList.add("active");
  overlay.classList.add("active");
  button.classList.add("active");
};

button.addEventListener("click", () =>
  isOpenMenu() ? closeMenu() : openMenu(),
);

overlay.addEventListener("click", closeMenu);

window.addEventListener(
  "keyup",
  (e) => isOpenMenu() && e.key === "Escape" && closeMenu(),
);
