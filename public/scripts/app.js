const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const closeMobileMenuBtn = document.querySelector(".close-modal");
const mobileMenuElem = document.querySelector(".mobile-menu");
const showMenuElem = document.querySelector(".show-menu");
const overlayElem = document.querySelector(".overlay");
const shoppingMoreInfo = document.querySelector(".shopping");
const shoppingMobileBag = document.querySelector(".shopping-bag");
const submenuElem = document.querySelector(".submenu");
const shoppingIconElem = document.querySelector(".shopping-icon");
const closeBagElem = document.querySelector(".close-bag");
const chevronIconElem = document.querySelector(".chevron-icon");
const subMenuItems = document.querySelectorAll(".submenu__item");

// toggle theme func
toggleThemeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
});

// show and hide menu & shopping bag

const hideMenuElem = (type) => {
  if (type === "mobileMenu") {
    mobileMenuElem.classList.remove("right-0");
    mobileMenuElem.classList.add("-right-64");
    overlayElem.classList.remove("overlay--visible");
  } else if (type === "shoppingBag") {
    shoppingMobileBag.classList.remove("left-0");
    shoppingMobileBag.classList.add("-left-64");
    overlayElem.classList.remove("overlay--visible");
  } else {
    mobileMenuElem.classList.remove("right-0");
    mobileMenuElem.classList.add("-right-64");
    overlayElem.classList.remove("overlay--visible");
    shoppingMobileBag.classList.remove("left-0");
    shoppingMobileBag.classList.add("-left-64");
    overlayElem.classList.remove("overlay--visible");
  }
};
const showModalElem = (type) => {
  if (type === "mobileMenu") {
    mobileMenuElem.classList.remove("-right-64");
    mobileMenuElem.classList.add("right-0");
    overlayElem.classList.add("overlay--visible");
  } else if (type === "shoppingBag") {
    shoppingMobileBag.classList.remove("-left-64");
    shoppingMobileBag.classList.add("left-0");
    overlayElem.classList.add("overlay--visible");
  }
};

// show and hide submenu
chevronIconElem.addEventListener("click", (e) => {
  submenuElem.classList.toggle("hidden");
  chevronIconElem.classList.toggle("rotate-180");
  shoppingMoreInfo.classList.toggle("text-orange-300");
});

// show menu elem func
showMenuElem.addEventListener("click", () => {
  showModalElem("mobileMenu");
});

// show shopping elem func
shoppingIconElem.addEventListener("click", () => {
  showModalElem("shoppingBag");
});


// close mobile menu func
closeMobileMenuBtn.addEventListener("click", () => {
  hideMenuElem("mobileMenu");
});

// close shopping bag elem func
closeBagElem.addEventListener("click", () => {
  hideMenuElem("shoppingBag");
});

// close modals with overlay
overlayElem.addEventListener("click", () => {
  hideMenuElem("menu");
});

// handle active menu in submenus
subMenuItems.forEach((subMenuItem) => {
  subMenuItem.addEventListener("click", (event) => {
    subMenuItems.forEach((menu) => {
      menu.classList.remove("submenu--active");
    });
    event.target.parentElement.classList.add("submenu--active");
  });
});
