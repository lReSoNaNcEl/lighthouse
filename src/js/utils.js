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
