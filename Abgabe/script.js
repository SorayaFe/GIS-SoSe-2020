"use strict";
var Abgabe;
(function (Abgabe) {
    let eis = document.getElementById("eis");
    let topping = document.getElementById("toppings");
    let behaelter = document.getElementById("behaelter");
    //Optionen laden
    async function ladeJson(_url) {
        let response = await fetch(_url);
        let inhalt = await response.json();
        for (let i = 0; i < inhalt.length; i++) {
            let divOption = document.createElement("div");
            divOption.setAttribute("class", "option");
            if (inhalt[i]._kategorie == "Eis") {
                eis.appendChild(divOption);
            }
            else if (inhalt[i]._kategorie == "Topping") {
                topping.appendChild(divOption);
            }
            else if (inhalt[i]._kategorie == "Behaelter") {
                behaelter.appendChild(divOption);
            }
            let bild = document.createElement("img");
            bild.setAttribute("class", "bild");
            bild.setAttribute("src", inhalt[i]._bild);
            bild.setAttribute("alt", inhalt[i]._bildAlt);
            divOption.appendChild(bild);
            let name = document.createElement("h2");
            name.innerHTML = inhalt[i]._name;
            divOption.appendChild(name);
            let preis = document.createElement("p");
            preis.setAttribute("class", "preis");
            preis.innerHTML = inhalt[i]._preis + "€  ";
            divOption.appendChild(preis);
            let button = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "button");
            button.innerHTML = "Auswählen";
            divOption.appendChild(button);
        }
    }
    ladeJson("inhalt.json");
    //Filtern
    let allesF = document.getElementById("allesF");
    let eisF = document.getElementById("eisF");
    let toppF = document.getElementById("toppF");
    let behF = document.getElementById("behF");
    let headEis = document.getElementById("headEis");
    let headTopp = document.getElementById("headTopp");
    let headBeh = document.getElementById("headBeh");
    allesF?.addEventListener("click", handleAlles);
    eisF?.addEventListener("click", handleEis);
    toppF?.addEventListener("click", handleTopp);
    behF?.addEventListener("click", handleBeh);
    function handleAlles() {
        eis.style.display = "flex";
        topping.style.display = "flex";
        behaelter.style.display = "flex";
        headEis.hidden = false;
        headTopp.hidden = false;
        headBeh.hidden = false;
    }
    function handleEis() {
        eis.style.display = "flex";
        topping.style.display = "none";
        behaelter.style.display = "none";
        headEis.hidden = false;
        headTopp.hidden = true;
        headBeh.hidden = true;
    }
    function handleTopp() {
        eis.style.display = "none";
        topping.style.display = "flex";
        behaelter.style.display = "none";
        headEis.hidden = true;
        headTopp.hidden = false;
        headBeh.hidden = true;
    }
    function handleBeh() {
        eis.style.display = "none";
        topping.style.display = "none";
        behaelter.style.display = "flex";
        headEis.hidden = true;
        headTopp.hidden = true;
        headBeh.hidden = false;
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=script.js.map