function loadHome() {
    const main = document.querySelector("main");
    main.innerText = "";
    
    const pic1 = document.createElement("img");
    pic1.setAttribute("id", "homePic1");
    pic1.setAttribute("src", "images/chef.jpg");
    pic1.setAttribute("alt", "Chef cooking steamed buns");
    main.appendChild(pic1);

    const sloganDiv = document.createElement('div');
    sloganDiv.setAttribute("class", "sloganHeading");
    const sloganText = document.createElement("h1");
    sloganText.innerHTML = "Authentic Taste.<br>Great Food.";
    sloganDiv.appendChild(sloganText);
    main.appendChild(sloganDiv);

    const addressDiv = document.createElement("div");
    addressDiv.setAttribute("class", "address");
    const addressText = document.createElement("div");
    addressText.innerHTML = "88 Odin Avenue<br>Asgard<br>Valhalla<br><br>";
    addressDiv.appendChild(addressText);

    const times = document.createElement("em");
    times.innerText = "Open Mon - Sun: 11am - 10pm";
    addressDiv.appendChild(times);

    main.appendChild(addressDiv);

    const pic2 = document.createElement("img");
    pic2.setAttribute("id", "homePic2");
    pic2.setAttribute("src", "images/dongpo-pork.jpg");
    pic2.setAttribute("alt", "Dongpo pork dish");
    main.appendChild(pic2);

    const quote = document.createElement('div');
    quote.setAttribute("class", "quote");
    quote.innerText = "\"Authentic Chinese flavours, fresh ingredients, passionate chefs. A must-try dining experience.\"";
    main.appendChild(quote);

    return main;
}

export default loadHome;