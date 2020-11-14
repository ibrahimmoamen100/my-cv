"use strict";

console.log("hello");
var header = document.querySelector("header");
var humburgerMenu = document.getElementsByClassName("sketchy_end")[0];
var arrowMenu = document.getElementsByClassName("arrow-menu")[0];
humburgerMenu.addEventListener("click", function () {
  header.style.left = "-280px";
  humburgerMenu.style.left = "-45px";
  arrowMenu.style.left = "5px";
});
arrowMenu.addEventListener("click", function () {
  header.style.left = "0px";
  humburgerMenu.style.left = "5px";
  arrowMenu.style.left = "-45px";
});