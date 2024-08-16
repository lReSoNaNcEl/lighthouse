const siteTheme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

//В эту переменную можно устанавливать значение из результатов серверного запроса
const defaultTheme = localStorage.getItem("theme") || siteTheme.LIGHT;

localStorage.setItem("theme", defaultTheme);

document.documentElement.classList.add(defaultTheme);

document.getElementById("theme-switcher")?.addEventListener("click", () => {
  const oppositeTheme = Object.values(siteTheme).find(
    (theme) => theme !== defaultTheme,
  );

  if (document.documentElement.classList.contains(defaultTheme)) {
    document.documentElement.classList.remove(defaultTheme);
    document.documentElement.classList.add(oppositeTheme);
    localStorage.setItem("theme", oppositeTheme);
  } else {
    document.documentElement.classList.add(defaultTheme);
    document.documentElement.classList.remove(oppositeTheme);
    localStorage.setItem("theme", defaultTheme);
  }
});
