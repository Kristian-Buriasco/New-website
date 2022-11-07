const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-nav");
const disablescrolldiv = document.querySelector(".body");
const disablescrollbody = document.body;
navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.removeAttribute("aria-expanded", true)
    : navToggle.setAttribute("aria-expanded", false);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
  disablescrolldiv.classList.toggle("disableoverflow");
  disablescrollbody.classList.toggle("disableoverflow");
});

let isdarkmodeon = localStorage.getItem("Darkmodechoice");
let lang = localStorage.getItem("lang");

function darking_mode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var element2 = document.querySelector(".icon-hamburger");
  element2.classList.toggle("svg-dark");
  localStorage.setItem("Darkmodechoice", isdarkmodeon.toString());
};

window.onload = function () {
  
let isdarkmodeon = localStorage.getItem("Darkmodechoice");
let lang = localStorage.getItem("lang");
  if (isdarkmodeon == 1) {
    darking_mode();
  }
/*   if (lang == 1) {
    document.documentElement.setAttribute("lang", "it");
  }
  else {
    document.documentElement.setAttribute("lang", "en");
  } */
};

document.getElementById("dark-mode-button").addEventListener("click",() => {
 document.body.classList.contains("dark-mode") 
    ? isdarkmodeon = 0 
    : isdarkmodeon = 1;
 darking_mode();
});

/* lang = document.querySelector('.messageCheckbox:checked');
console.log(lang);

 function langchange(){
    localStorage.setItem("lang", lang.toString());
 }


document.getElementById('button-16').addEventListener('focus', () => {
  langchange();
}); */


//*maps dark mode
// coookies
