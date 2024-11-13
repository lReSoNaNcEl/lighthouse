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
      },
    },
  };
}
