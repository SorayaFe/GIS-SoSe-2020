"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    let kategorie = document.createElement("div");
    kategorie.setAttribute("class", "rittersport");
    for (let i = 0; i < Aufgabe05.rittersport.length; i++) {
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        kategorie.appendChild(divArtikel);
        let bild = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", Aufgabe05.rittersport[i]._bild);
        bild.setAttribute("alt", Aufgabe05.rittersport[i]._bildAlt);
        divArtikel.appendChild(bild);
        let name = document.createElement("h2");
        name.innerHTML = Aufgabe05.rittersport[i]._name;
        divArtikel.appendChild(name);
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = Aufgabe05.rittersport[i]._beschreibung;
        divArtikel.appendChild(beschreibung);
        let preis = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = Aufgabe05.rittersport[i]._preis;
        divArtikel.appendChild(preis);
        let knopf = document.createElement("button");
        knopf.setAttribute("type", "button");
        knopf.innerText = "Kaufen";
        preis.appendChild(knopf);
    }
    document.getElementById("rispo")?.appendChild(kategorie);
    let kategorie2 = document.createElement("div");
    kategorie2.setAttribute("class", "oreo");
    for (let i = 0; i < Aufgabe05.oreo.length; i++) {
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        kategorie2.appendChild(divArtikel);
        let bild = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", Aufgabe05.oreo[i]._bild);
        bild.setAttribute("alt", Aufgabe05.oreo[i]._bildAlt);
        divArtikel.appendChild(bild);
        let name = document.createElement("h2");
        name.innerHTML = Aufgabe05.oreo[i]._name;
        divArtikel.appendChild(name);
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = Aufgabe05.oreo[i]._beschreibung;
        divArtikel.appendChild(beschreibung);
        let preis = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = Aufgabe05.oreo[i]._preis;
        divArtikel.appendChild(preis);
        let knopf = document.createElement("button");
        knopf.setAttribute("type", "button");
        knopf.innerText = "Kaufen";
        preis.appendChild(knopf);
    }
    document.getElementById("kekse")?.appendChild(kategorie2);
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map