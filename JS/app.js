"use strict";

// SELECTIONS

const menu = document.querySelector(".navigation__burger");
const modal = document.querySelector(".modal");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
// event delegation to switch the imgs on the burger when clicked

menu.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("navigation__burger")) return;
  menuIcon.classList.toggle("hide");
  closeIcon.classList.toggle("hide");
  modal.classList.toggle("hidden");
});
