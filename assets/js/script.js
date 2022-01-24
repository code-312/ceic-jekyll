// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu-container");
var footer = document.querySelector("footer");
var content = document.querySelector(".main-content-container");
// On click
hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
  footer.classList.toggle("is-active");
  content.classList.toggle("is-active");
});
