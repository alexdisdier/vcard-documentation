"use strict";

/* main.js */

/*--------------------------------------------------------------
 Initiate smoothscroll
--------------------------------------------------------------*/
var scroll = new SmoothScroll('a[href*="#"]');
/*--------------------------------------------------------------
 toggleDropdown Mobile and <a> active
--------------------------------------------------------------*/

var toggleContent = document.getElementById('js-dropdown-content');
var toggleLinks = document.getElementsByClassName("nav-link");
var menuIcon = document.getElementById('js-menu-icon'); // The burger button triggers the toggle open

function toggleDropdown() {
  if (toggleContent.style.display === "block") {
    toggleContent.style.display = "none"; // menuIcon.classList.remove("is-active");
    // console.log("toggleOpen");
  } else {
    toggleContent.style.display = "block"; // menuIcon.classList.add("is-active");
    // console.log("toggleClose");
  }
} // If you click on one of the <a> element.


for (var i = 0; i < toggleLinks.length; i++) {
  toggleLinks[i].addEventListener("click", function () {
    // console.log("toggleClose");
    toggleContent.style.display = "none"; // menuIcon.classList.remove("is-active");
    // toggleLinks[i].classList.add("js-active");
  });
} // Add the class Active when you scroll to the section or if the <a> is clicked