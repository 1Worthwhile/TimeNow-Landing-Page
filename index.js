"use strict";

// ONSCROLL FUNCTION
let nav = document.querySelector("nav");
window.addEventListener("scroll", function () {
  nav.classList.toggle("active", this.window.scrollY > 0);
});

// DOM SELECTION
let link_container = document.querySelector(".links");
let overlay = document.querySelector(".overlay");
let menubar = document.querySelector(".menu_btns");

menubar.addEventListener("click", function () {
  menubar.classList.toggle("active");
  overlay.classList.toggle("active");
  link_container.classList.toggle("active");
  window.scrollY > 0 || nav.classList.toggle("active");
});

overlay.addEventListener("click", function () {
  menubar.classList.toggle("active");
  overlay.classList.toggle("active");
  link_container.classList.toggle("active");
  window.scrollY > 0 || nav.classList.toggle("active");
});
