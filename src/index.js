import loadPage from "./page-load";
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function init() {
    loadPage();
    loadHome();
}

init();

// event listeners for nav bar
const home = document.querySelector("#navHome");
const menu = document.querySelector("#navMenu");
const contact = document.querySelector("#navContact");

home.addEventListener("click", loadHome);
menu.addEventListener("click", loadMenu);
contact.addEventListener("click", loadContact);
