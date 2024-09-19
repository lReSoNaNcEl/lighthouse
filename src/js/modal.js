//https://doka.guide/html/dialog/#rasshiryaem-brauzernuyu-podderzhku
const dialogPolyfillURL = "https://esm.run/dialog-polyfill";

const isBrowserNotSupportDialog = window.HTMLDialogElement === undefined;

if (isBrowserNotSupportDialog) {
  const dialogs = document.querySelectorAll("dialog");

  dialogs.forEach(async (dialog) => {
    const { default: polyfill } = await import(dialogPolyfillURL);
    polyfill.registerDialog(dialog);
  });
}

const modals = [
  {
    buttonId: "coin-gold",
    modalId: "modal-gold-coin",
  },
  {
    buttonId: "coin-silver",
    modalId: "modal-silver-coin",
  },
  {
    buttonId: "coin-bronze",
    modalId: "modal-bronze-coin",
  },
  {
    buttonId: "coin-tree",
    modalId: "modal-tree-coin",
  },
  {
    buttonId: "coin-gold-chest",
    modalId: "modal-gold-coin",
  },
];

modals.forEach((item) => {
  const modal = document.getElementById(item.modalId);
  const button = document.getElementById(item.buttonId);
  const cross = modal.querySelector(".modal__cross");

  button.addEventListener("click", () => {
    modal.showModal();
  });

  cross.addEventListener("click", () => {
    modal.close();
  });

  modal.addEventListener("click", ({ target, currentTarget }) => {
    if (target === currentTarget) currentTarget.close();
  });
});
