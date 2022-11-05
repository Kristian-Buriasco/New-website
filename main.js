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

let isdarkmodeon = localStorage.getItem("Darkmodechoice");

function darking_mode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var element2 = document.querySelector(".icon-hamburger");
  element2.classList.toggle("svg-dark");
  localStorage.setItem("Darkmodechoice", isdarkmodeon.toString());
};

window.onload = function () {
  if (isdarkmodeon == 1) {
    darking_mode();
  }
};

document.getElementById("dark-mode-button").addEventListener("click",() => {
 document.body.classList.contains("dark-mode") 
    ? isdarkmodeon = 0 
    : isdarkmodeon = 1;
 darking_mode();
});

