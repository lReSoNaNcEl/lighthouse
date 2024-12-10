if (window.tailwind) {
  tailwind.config = {
    theme: {
      extend: {
        screens: {
          xs: "375px",
          sm: "480px",
          md: "768px",
          lg: "1024px",
          xl: "1200px",
        },
        colors: {
          color: "var(--text-color)",
          yellow: "var(--yellow-color)",
          darkblue: "var(--darkblue-color)",
          search: "var(--search-color)",
          "search-secondary": "var(--search-secondary-color)",
          "blue-dark": "var(--blue-dark-color)",
        },
      },
    },
  };
}
