"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    //Div für Rispo
    let kategorie = document.createElement("div");
    kategorie.setAttribute("id", "rispoDiv");
    //Counter für Knöpfe später
    let counter = [];
    //Artiekl Laden Funktion
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
            knopf.setAttribute("class", "knopf");
            preis.appendChild(knopf);
            if (artikelliste[i]._verfuegbar == true) {
                knopf.innerText = "Kaufen";
                knopf.setAttribute("class", "gibt");
                knopf.addEventListener("click", handleButton);
                //Funktion für Knopf-Artikel-Counter und Preis
                function handleButton() {
                    document.getElementById("zahlDiv")?.remove();
                    let zahlDiv = document.createElement("div");
                    zahlDiv.setAttribute("id", "zahlDiv");
                    document.getElementById("kreisDiv")?.appendChild(zahlDiv);
                    let anzeige = document.createElement("p");
                    anzeige.setAttribute("id", "zahl");
                    zahlDiv.appendChild(anzeige);
                    counter.push(artikelliste[i]._preis);
                    anzeige.innerHTML = "" + counter.length;
                    let summe = 0;
                    for (let i = 0; i < counter.length; i++) {
                        summe = summe + counter[i];
                    }
                    console.log("Summe:" + summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
                }
            }
            else {
                knopf.innerText = "Ausverkauft";
                knopf.setAttribute("class", "gibtNicht");
            }
        }
    }
    //Artikel in Doc
    artikelLaden(Aufgabe06.rittersport, kategorie);
    document.getElementById("rispo")?.appendChild(kategorie);
    let kategorie2 = document.createElement("div");
    kategorie2.setAttribute("id", "oreoDiv");
    artikelLaden(Aufgabe06.oreo, kategorie2);
    document.getElementById("kekse")?.appendChild(kategorie2);
    //Eventlistener für Menü
    let filterRispo = document.getElementById("filterRispo");
    filterRispo.addEventListener("click", handleRispo);
    let filterOreo = document.getElementById("filterOreo");
    filterOreo.addEventListener("click", handleOreo);
    let filterAlle = document.getElementById("alle");
    filterAlle.addEventListener("click", handleAlle);
    //Funktionen für Filter
    function handleRispo() {
        let oreoDiv = document.getElementById("kekse");
        oreoDiv.hidden = true;
        let ueberschriftOreo = document.getElementById("ueberschrift2");
        ueberschriftOreo.hidden = true;
        let rispoDiv = document.getElementById("rispo");
        rispoDiv.hidden = false;
        let ueberschriftRispo = document.getElementById("ueberschrift1");
        ueberschriftRispo.hidden = false;
    }
    function handleOreo() {
        let rispoDiv = document.getElementById("rispo");
        rispoDiv.hidden = true;
        let ueberschrift = document.getElementById("ueberschrift1");
        ueberschrift.hidden = true;
        let oreoDiv = document.getElementById("kekse");
        oreoDiv.hidden = false;
        let ueberschriftOreo = document.getElementById("ueberschrift2");
        ueberschriftOreo.hidden = false;
    }
    function handleAlle() {
        let rispoDiv = document.getElementById("rispo");
        rispoDiv.hidden = false;
        let ueberschriftRispo = document.getElementById("ueberschrift1");
        ueberschriftRispo.hidden = false;
        let oreoDiv = document.getElementById("kekse");
        oreoDiv.hidden = false;
        let ueberschriftOreo = document.getElementById("ueberschrift2");
        ueberschriftOreo.hidden = false;
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=script.js.map