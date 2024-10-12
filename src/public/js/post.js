const btn = document.getElementById("get-posts-btn");
const container = document.getElementById("get-posts-container");

btn.addEventListener("click", () => {
  const offset = container.childElementCount || 0;
  const limit = 4;
  const url = `https://jsonplaceholder.typicode.com/photos?_start=${offset}&_limit=${limit}`;
  btn.disabled = true;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (!data?.length) {
        btn.style.display = "none";
      }

      (data || []).map((item) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<a href="${item.url}">
              <img
                class="card__img"
                src="${item.thumbnailUrl}"
                alt="${item.title}"
              />
            </a>
            <a href="${item.url}" class="card__bonus yellow">🍑 бонус 20%</a>
            <a href="${item.url}" class="card__title"
              >${item.title}</a
            >
            <a href="#" class="card__description">Детям в Астрахани</a>
            <a class="card__tag" href="#">Kids Club</a>
            <p class="card__address">г.Москва, ул.Мясницкая 20, 1 этаж</p>`;

        container.appendChild(card);
      });
    })
    .finally(() => (btn.disabled = false));
});
