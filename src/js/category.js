const animations = [
  "animate__bounce",
  "animate__headShake",
  "animate__swing",
  "animate__tada",
  "animate__pulse",
];

const getRandomNumberFromMinToMax = (min, max) =>
  Math.round(min - 0.5 + Math.random() * (max - min + 1));

const categoriesCards = [...document.querySelectorAll(".categories__item")];

categoriesCards.forEach((card) => {
  const randomIndex = getRandomNumberFromMinToMax(0, animations.length - 1);

  card.addEventListener("mouseover", () => {
    card.classList.add("animate__animated", animations[randomIndex]);
  });
  card.addEventListener("animationend", () => {
    card.classList.remove("animate__animated", animations[randomIndex]);
  });
});
