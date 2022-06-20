// Floating Action Button
const fab = document.querySelector(".back-to-top");
fab.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
// Navbar Fixed
window.onscroll = function () {
  const nav = document.querySelector("nav");
  const fixedNav = nav.offsetTop;
  if (window.pageYOffset > fixedNav) {
    nav.classList.add("navbar-fixed");
    fab.style.display = "block";
  } else {
    nav.classList.remove("navbar-fixed");
    fab.style.display = "none";
  }
};

// open/close menu mobile
let menu = document.querySelector(".mobile-nav");
let nav = document.querySelector(".nav");
menu.addEventListener("click", function (e) {
  nav.classList.toggle("menu-open");
});
