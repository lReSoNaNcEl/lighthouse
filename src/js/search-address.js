const searchAddressIcon = document.getElementById("search-address-icon");
const searchAddressContent = document.getElementById("search-address-content");
// const cities = [...searchAddressContent.querySelectorAll(".menu__cities li")];

const CLOSE_ICON_ID = "address-close-icon";

const tooltip = tippy(searchAddressIcon, {
  content: searchAddressContent.innerHTML,
  trigger: "click",
  duration: 0,
  arrow: false,
  triggerTarget: [searchAddressIcon],
  placement: "top-end",
  hideOnClick: false,
  allowHTML: true,
  maxWidth: "none",
  theme: "custom",
  interactive: true,
  onShow(instance) {
    instance.popper.addEventListener("click", closeTooltip);
    instance.popper
      .getElementsByTagName("input")[0]
      .addEventListener("input", searchCities);
  },
  onHide(instance) {
    instance.popper.removeEventListener("click", closeTooltip);
    instance.popper
      .getElementsByTagName("input")[0]
      .removeEventListener("input", searchCities);
  },
  onClickOutside(instance) {
    instance.hide();
  },
  offset: [0, -5],
});

const closeTooltip = (e) => {
  if (
    e.target.id === CLOSE_ICON_ID ||
    e.target.parentElement.id === CLOSE_ICON_ID
  ) {
    tooltip.hide();
  }
};
const searchCities = (e) => {
  //Логика поиска, пока не понятно как она должна выглядеть
  // cities.forEach(
  //     (c) => {
  //         (c.style.display =
  //             c.getAttribute('data-name').includes(e.target.value) ? "block" : "none")
  //     },
  // );
  // const content = searchAddressContent.cloneNode(true)
  // tooltip.setContent(
  //     content.innerHTML
  // )
};
