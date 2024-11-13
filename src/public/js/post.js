const btn = document.getElementById("get-posts-btn");
const container = document.getElementById("get-posts-container");

btn.addEventListener("click", () => {
  const offset = container.childElementCount || 0;
  const limit = 4;
  const url = `https://jsonplaceholder.typicode.com/photos?_start=${offset}&_limit=${limit}`;
  let loading = true;
  btn.disabled = true;
  btn.classList.add("loading");
  btn.innerHTML = `
    <svg style="width: 32px; height: 32px;" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
      <radialGradient id='a12' cx='.66' fx='.66' cy='.3125' fy='.3125' gradientTransform='scale(1.5)'><stop offset='0' stop-color='#2B2E35'></stop><stop offset='.3' stop-color='#2B2E35' stop-opacity='.9'></stop><stop offset='.6' stop-color='#2B2E35' stop-opacity='.6'></stop><stop offset='.8' stop-color='#2B2E35' stop-opacity='.3'></stop><stop offset='1' stop-color='#2B2E35' stop-opacity='0'></stop></radialGradient><circle transform-origin='center' fill='none' stroke='url(#a12)' stroke-width='15' stroke-linecap='round' stroke-dasharray='200 1000' stroke-dashoffset='0' cx='100' cy='100' r='70'><animateTransform type='rotate' attributeName='transform' calcMode='spline' dur='2' values='360;0' keyTimes='0;1' keySplines='0 0 1 1' repeatCount='indefinite'></animateTransform></circle><circle transform-origin='center' fill='none' opacity='.2' stroke='#2B2E35' stroke-width='15' stroke-linecap='round' cx='100' cy='100' r='70'></circle>
    </svg>
`;

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
    .finally(() => {
      loading = false;
      btn.disabled = false;
      btn.classList.remove("loading");
      btn.innerHTML = "Показать ещё";
    });
});
