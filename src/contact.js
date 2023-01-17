function createSocials(name, img) {
   const icon = document.createElement("img");
   icon.setAttribute("src", img);
   icon.setAttribute("alt", name);

   return icon;
}

function loadContact() {
    const main = document.querySelector("main");
    main.innerText = "";

    const container = document.createElement("div");
    container.setAttribute("id", "contact")

    const heading = document.createElement("h2");
    heading.setAttribute("id", "contactHeading");
    heading.innerHTML = "The way you eat, reflects the way you live.<hr>";
    container.appendChild(heading);

    const restaurantImg = document.createElement("img");
    restaurantImg.setAttribute("id", "restaurantImg");
    restaurantImg.setAttribute("src","images/restaurant.jpg");
    restaurantImg.setAttribute("alt", "Restaurant Storefront");
    container.appendChild(restaurantImg);

    const address = document.createElement("div");
    address.setAttribute("class", "contactDetails");
    address.innerHTML = "88 Odin Avenue<br>Asgard<br>Valhalla"
    container.appendChild(address);

    const tel = document.createElement("div");
    tel.setAttribute("class", "contactDetails");
    tel.innerText = "Tel: 01632 960225";
    container.appendChild(tel);

    const socials = document.createElement("div");
    socials.setAttribute("id", "socials");

    const fb = createSocials("Facebook", "images/facebook.svg");
    socials.appendChild(fb);

    const twitter = createSocials("Twitter", "images/twitter.svg");
    socials.appendChild(twitter);

    const linkedIn = createSocials("LinkedIn", "images/linkedin.svg");
    socials.appendChild(linkedIn);

    const github = createSocials("Github", "images/github.svg");
    socials.appendChild(github);

    container.appendChild(socials);

    main.appendChild(container);


    return main;
}

export default loadContact;