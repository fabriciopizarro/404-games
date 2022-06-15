"use strict";

let button = document.getElementById("footerScrollToTopContainer");

var rootElement = document.documentElement;

function backToTop() {
  rootElement.scrollTo(
    {
      top: 0 ,
      behavior: 'smooth',
    }
  ) 
}
button.addEventListener("click", backToTop);