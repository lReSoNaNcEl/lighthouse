particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: false,
      },
      onclick: {
        enable: false,
      },
      resize: true,
    },
  },
  retina_detect: true,
});

const siteTheme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

//В эту переменную можно устанавливать значение из результатов серверного запроса
const defaultTheme = siteTheme.LIGHT;

document.documentElement.classList.add(defaultTheme);

document.getElementById("theme-switcher")?.addEventListener("click", () => {
  const oppositeTheme = Object.values(siteTheme).find(
    (theme) => theme !== defaultTheme,
  );

  if (document.documentElement.classList.contains(defaultTheme)) {
    document.documentElement.classList.remove(defaultTheme);
    document.documentElement.classList.add(oppositeTheme);
  } else {
    document.documentElement.classList.add(defaultTheme);
    document.documentElement.classList.remove(oppositeTheme);
  }
});