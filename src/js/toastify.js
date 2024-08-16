const copyButtons = [...document.querySelectorAll(".copy")];

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const text = button.getAttribute("data-value") || button.textContent;

    navigator.clipboard.writeText(text);

    Toastify({
      text: `Вы скопировали ссылку ${text}`,
      duration: 2000,
      newWindow: false,
      close: true,
      gravity: "top",
      position: "left",
      stopOnFocus: true,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      },
    }).showToast();
  });
});
