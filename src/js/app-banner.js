const COOKIE_BANNER_NAME = "banner-mobile-app";
const BANNER_RENDER_DELAY = 5000;
const BANNER_REFRESH_DAYS = 7;

const banner = document.getElementById(COOKIE_BANNER_NAME);
const downloadButton = document.getElementById("banner-download");
const closeButton = document.getElementById("banner-close");

const writeBannerToCookie = () =>
  Cookies.set(COOKIE_BANNER_NAME, true, { expires: BANNER_REFRESH_DAYS });

const closeBanner = () => {
  banner.classList.remove("show");
  banner.classList.add("closed");
};

downloadButton.addEventListener("click", () => {
  writeBannerToCookie();
  closeBanner();
});

closeButton.addEventListener("click", () => {
  writeBannerToCookie();
  closeBanner();
});

if (!Cookies.get(COOKIE_BANNER_NAME)) {
  setTimeout(() => banner.classList.add("show"), BANNER_RENDER_DELAY);
}
