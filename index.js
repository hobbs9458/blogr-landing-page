const dropdownBtnWraps = document.querySelectorAll(".dropdown-btn-wrap");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const dropdownCard = document.querySelector(".dropdown-card");
const drowdownMenusArr = Array.from(document.querySelectorAll(".dropdown"));

hamburgerIcon.addEventListener("click", () => {
  // WHEN THEY CLOSE THE HAMBURGER MENU, ALL OF
  // THE NESTED UL DROPDOWNS SHOULDCLOSE TOO
  if (hamburgerIcon.classList.contains("closing-icon")) {
    drowdownMenusArr.forEach((menu) => {
      menu.classList.add("hidden");
    });
  }

  // TOGGLE HAMBURGER/CLOSING ICON
  dropdownCard.classList.toggle("hidden");
  hamburgerIcon.classList.toggle("closing-icon");
});

// DROPDOWN MENUS FOR HAMBURGER MENU
dropdownBtnWraps.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // TOGGLE ARROW IMG UP AND DOWN
    const dropdownWrap = e.target.closest(".dropdown-btn-wrap");
    const arrow = dropdownWrap.querySelector(".dropdown-arrow");
    arrow.classList.toggle("dropdown-arrow-image-up");

    // TOGGLE TARGETED DROPDOWN MENU
    const dataStr = e.target.closest(".dropdown-btn-wrap").dataset.dropdown;
    // const drowdownMenusArr = Array.from(document.querySelectorAll(".dropdown"));
    const targetMenu = drowdownMenusArr.filter((menu) => {
      return menu.classList.contains(dataStr);
    });
    targetMenu[0].classList.toggle("hidden");
  });
});
