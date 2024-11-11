const THEME_STORAGE_KEY = "theme";
const THEME_SWITCHER_ID = "theme-switcher";

const siteTheme = {
  LIGHT: "light-theme",
  SUMMER: "summer-theme",
  DARK: "dark-theme",
  WINTER: "winter-theme",
};

const getCurrentTheme = () =>
  localStorage.getItem(THEME_STORAGE_KEY) || siteTheme.LIGHT;

localStorage.setItem("theme", getCurrentTheme());
document.body.classList.add(getCurrentTheme());

document.getElementById(THEME_SWITCHER_ID)?.addEventListener("click", () => {
  const themes = Object.values(siteTheme);

  const currentTheme = getCurrentTheme();
  const currentThemeIndex = themes.indexOf(currentTheme);

  const nextTheme =
    themes[currentThemeIndex !== themes.length - 1 ? currentThemeIndex + 1 : 0];

  if (document.body.classList.contains(currentTheme)) {
    document.body.classList.remove(currentTheme);
    document.body.classList.add(nextTheme);
    localStorage.setItem("theme", nextTheme);
  }
});
