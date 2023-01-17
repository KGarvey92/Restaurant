function createFood(name, picture) {
    const container = document.createElement("div");
    container.setAttribute("class", "food");

    const img = document.createElement("img");
    img.setAttribute("class", "foodImg");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Picture of ${name}.`);
    container.appendChild(img);

    const text = document.createElement("div");
    text.innerHTML = `<hr>${name}<hr>`;
    container.appendChild(text);

    return container;
}

function loadMenu() {
    const main = document.querySelector("main");
    main.innerText = "";

    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");

    const pork = createFood("Dongpo Pork", "images/dongpo-pork.jpg");
    menu.appendChild(pork);

    const stirFry = createFood("Vegetable Stir Fry", "images/stir-fry.jpg");
    menu.appendChild(stirFry);

    const dumplings = createFood("Dumpling Soup", "images/dumpling-soup.jpg");
    menu.appendChild(dumplings);

    const beefStew = createFood("Spicy Beef Stew", "images/beef-stew.jpg");
    menu.appendChild(beefStew);

    const springRolls = createFood("Vegetable Spring Rolls", "images/spring-rolls.jpg");
    menu.appendChild(springRolls);

    const garlicShrimp = createFood("Spicy Garlic Shrimp", "images/garlic-shrimp.jpg");
    menu.appendChild(garlicShrimp);
    
    main.appendChild(menu);

    return main;
}


export default loadMenu;