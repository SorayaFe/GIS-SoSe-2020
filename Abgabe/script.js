"use strict";
var Abgabe;
(function (Abgabe) {
    let eisGew = [];
    let toppGew = [];
    let behGew = [];
    let gewaehlt = [];
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
            preis.innerHTML = inhalt[i]._preis.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
            divOption.appendChild(preis);
            let select = document.createElement("button");
            select.setAttribute("type", "button");
            select.setAttribute("class", "select");
            select.innerHTML = "Auswählen";
            divOption.appendChild(select);
            select.addEventListener("click", handleSelect);
            //Optionen auswählen
            function handleSelect() {
                if (inhalt[i]._kategorie == "Eis" && eisGew.length < 5) {
                    eisGew.push(inhalt[i]);
                    gewaehlt.push(inhalt[i]);
                    handleGewaehlt();
                }
                if (inhalt[i]._kategorie == "Eis" && eisGew.length == 5) {
                    window.alert("Maximum der Eiskugeln erreicht!");
                }
                if (inhalt[i]._kategorie == "Topping" && toppGew.length < 3) {
                    toppGew.push(inhalt[i]);
                    gewaehlt.push(inhalt[i]);
                    handleGewaehlt();
                }
                if (inhalt[i]._kategorie == "Topping" && toppGew.length == 3) {
                    window.alert("Maximum der Toppings erreicht!");
                }
                if (inhalt[i]._kategorie == "Behaelter" && behGew.length != 0) {
                    window.alert("Behälter bereits Ausgewählt! Entfernen Sie den gewählten Behälter falls Sie einen anderen möchten!");
                }
                if (inhalt[i]._kategorie == "Behaelter" && behGew.length < 1) {
                    behGew.push(inhalt[i]);
                    gewaehlt.push(inhalt[i]);
                    handleGewaehlt();
                }
            }
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
    //Gewählte Optionen anzeigen
    function handleGewaehlt() {
        let gewaehltDiv = document.getElementById("deins");
        gewaehltDiv.innerHTML = "";
        for (let i = 0; i < gewaehlt.length; i++) {
            let divOption = document.createElement("div");
            divOption.setAttribute("class", "option");
            let bild = document.createElement("img");
            bild.setAttribute("class", "bild");
            bild.setAttribute("src", gewaehlt[i]._bild);
            bild.setAttribute("alt", gewaehlt[i]._bildAlt);
            divOption.appendChild(bild);
            let name = document.createElement("h2");
            name.innerHTML = gewaehlt[i]._name;
            divOption.appendChild(name);
            let preis = document.createElement("p");
            preis.setAttribute("class", "preis");
            preis.innerHTML = gewaehlt[i]._preis.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
            divOption.appendChild(preis);
            let entfernen = document.createElement("button");
            entfernen.setAttribute("type", "button");
            entfernen.setAttribute("class", "entfernen");
            entfernen.innerHTML = "Entfernen";
            divOption.appendChild(entfernen);
            entfernen.addEventListener("click", handleEntfernen);
            gewaehltDiv.appendChild(divOption);
            function handleEntfernen() {
                if (gewaehlt[i]._kategorie == "Eis") {
                    eisGew.splice(0, 1);
                    console.log(eisGew.length);
                }
                if (gewaehlt[i]._kategorie == "Topping") {
                    toppGew.splice(0, 1);
                }
                if (gewaehlt[i]._kategorie == "Behaelter") {
                    behGew.splice(0, 1);
                }
                gewaehlt.splice(i, 1);
                handleGewaehlt();
            }
        }
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=script.js.map