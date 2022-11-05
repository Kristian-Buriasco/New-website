const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const disablescroll = document.querySelector(".body");
navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.removeAttribute("aria-expanded", true)
    : navToggle.setAttribute("aria-expanded", false);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
  disablescroll.toggleAttribute("disableoverflow");
});

// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }

function darking_mode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var element2 = document.querySelector(".icon-hamburger");
  element2.classList.toggle("svg-dark");
};
document.getElementById("dark-mode-button").onclick = darking_mode;