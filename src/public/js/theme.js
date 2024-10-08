const siteTheme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

//В эту переменную можно устанавливать значение из результатов серверного запроса
const defaultTheme = localStorage.getItem("theme") || siteTheme.DARK;

localStorage.setItem("theme", defaultTheme);

document.body.classList.add(defaultTheme);

document.getElementById("theme-switcher")?.addEventListener("click", () => {
  const oppositeTheme = Object.values(siteTheme).find(
    (theme) => theme !== defaultTheme,
  );

  if (document.body.classList.contains(defaultTheme)) {
    document.body.classList.remove(defaultTheme);
    document.body.classList.add(oppositeTheme);
    localStorage.setItem("theme", oppositeTheme);
  } else {
    document.body.classList.add(defaultTheme);
    document.body.classList.remove(oppositeTheme);
    localStorage.setItem("theme", defaultTheme);
  }
});
