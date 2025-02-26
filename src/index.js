import "./style.css";
import homePage from "./home-page.js";
import menu from "./menu.js";
import about from "./about.js";

homePage();

const navBar = document.querySelector("nav");

navBar.addEventListener("click", (event) => {
  if (event.target.className === "home-btn") {
    homePage();
  } else if (event.target.className == "menu-btn") {
    menu();
  } else if (event.target.className === "about-btn") {
    about();
  }
});
