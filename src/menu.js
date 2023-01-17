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
    
    main.appendChild(menu);

    return main;
}


export default loadMenu;