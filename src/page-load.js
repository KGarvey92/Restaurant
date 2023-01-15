// Create nav bar object
function createNav() {
    const navElement = document.createElement("nav");

    const logo = document.createElement("img");
    logo.setAttribute("id", "navLogo");
    logo.setAttribute("src", "images/logo.jpeg");
    logo.setAttribute("alt", "Restaurant logo");

    navElement.appendChild(logo);

    const navList = document.createElement("ul");

    const navHome = document.createElement("li");
    navHome.innerText = "Home";
    navList.appendChild(navHome);
    const navMenu = document.createElement("li");
    navMenu.innerText = "Menu";
    navList.appendChild(navMenu);
    const navContact = document.createElement("li");
    navContact.innerText = "About";
    navList.appendChild(navContact);
    navElement.appendChild(navList);

    return navElement;
}


function loadPage() {
    const contentDiv = document.querySelector("#content");
    const nav = createNav();
    contentDiv.appendChild(nav);
    const main = document.createElement("main");
    contentDiv.appendChild(main);
}

export default loadPage;
