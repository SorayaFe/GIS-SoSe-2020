"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    let kategorie = document.createElement("div");
    kategorie.setAttribute("class", "rittersport");
    function artikelLaden(artikelliste, artikelDiv) {
        for (let i = 0; i < artikelliste.length; i++) {
            let divArtikel = document.createElement("div");
            divArtikel.setAttribute("class", "artikel");
            artikelDiv.appendChild(divArtikel);
            let bild = document.createElement("img");
            bild.setAttribute("class", "bild");
            bild.setAttribute("src", artikelliste[i]._bild);
            bild.setAttribute("alt", artikelliste[i]._bildAlt);
            divArtikel.appendChild(bild);
            let name = document.createElement("h2");
            name.innerHTML = artikelliste[i]._name;
            divArtikel.appendChild(name);
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = artikelliste[i]._beschreibung;
            divArtikel.appendChild(beschreibung);
            let preis = document.createElement("p");
            preis.setAttribute("class", "preis");
            preis.innerHTML = artikelliste[i]._preis + "€  ";
            divArtikel.appendChild(preis);
            let knopf = document.createElement("button");
            knopf.setAttribute("type", "button");
            preis.appendChild(knopf);
            if (artikelliste[i]._verfuegbar == true) {
                knopf.innerText = "Kaufen";
                knopf.setAttribute("id", "gibt");
            }
            else {
                knopf.innerText = "Ausverkauft";
                knopf.setAttribute("id", "gibtNicht");
            }
        }
    }
    artikelLaden(Aufgabe05.rittersport, kategorie);
    document.getElementById("rispo")?.appendChild(kategorie);
    let kategorie2 = document.createElement("div");
    kategorie2.setAttribute("class", "oreo");
    artikelLaden(Aufgabe05.oreo, kategorie2);
    document.getElementById("kekse")?.appendChild(kategorie2);
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=script.js.map