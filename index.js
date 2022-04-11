const dropdownBtnWraps = document.querySelectorAll(".dropdown-btn-wrap");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const dropdownCard = document.querySelector(".dropdown-card");
const drowdownMenusArr = Array.from(document.querySelectorAll(".dropdown"));
const arrowImages = document.querySelectorAll(".dropdown-arrow");
const navDropdownBtnsDesktop = document.querySelectorAll(".dropdownBtn");
const desktopNavDropDowns = Array.from(
  document.querySelectorAll(".desktop-nav-dropdown")
);

// DESKTOP NAV DROPDOWN MENUS
navDropdownBtnsDesktop.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // TOGGLE DROPDOWN ARROWS DESKTOP HELPER FUNCTION
    const flipDesktopArrow = () => {
      const arrow = dropdownBtn.querySelector(".dropdown-arrow");
      arrow.classList.toggle("dropdown-arrow-image-up");
    };

    // TOGGLE DROPDOWNS
    const dropdownBtn = e.target.closest(".dropdownBtn");
    const dataStr = e.target.closest(".dropdownBtn").dataset.desktopdropdown;
    const dropdown = desktopNavDropDowns.filter((dropdown) =>
      dropdown.classList.contains(dataStr)
    );

    desktopNavDropDowns.forEach((dropdown) => {
      if (!dropdown.classList.contains(dataStr)) {
        dropdown.classList.add("hidden");
      }
    });

    dropdown[0].classList.toggle("hidden");

    // FLIP ARROW IMG WHEN OPENING/CLOSING DROPDOWN
    flipDesktopArrow();
  });
});

// MOBILE NAV HAMBURGER MENU
hamburgerIcon.addEventListener("click", () => {
  // WHEN THEY CLOSE THE HAMBURGER MENU, ALL OF
  // THE NESTED UL DROPDOWNS SHOULDCLOSE TOO
  if (hamburgerIcon.classList.contains("closing-icon")) {
    drowdownMenusArr.forEach((menu) => {
      menu.classList.add("hidden");
    });

    // TOGGLE DROPDOWN ARROWS TO UP POSITION WHEN HAMBURGER MENU IS CLOSED
    arrowImages.forEach((img) => {
      img.classList.add("dropdown-arrow-image-up");
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

    const targetMenu = drowdownMenusArr.filter((menu) => {
      return menu.classList.contains(dataStr);
    });

    targetMenu[0].classList.toggle("hidden");
  });
});
