"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //Liste für Einkaufswagen
    let wagenListe = [];
    if (localStorage.getItem("Artikel") != null) {
        let vorhandeneListe = JSON.parse(localStorage.getItem("Artikel"));
        wagenListe = vorhandeneListe;
    }
    //Counter für Anzahl der Artikel
    let counter = [];
    if (localStorage.getItem("Summe") != null) {
        let vorhandenerCounter = parseFloat(localStorage.getItem("Summe"));
        counter[0] = vorhandenerCounter;
    }
    //Artikel von JSON laden
    let rispo = document.getElementById("rispo");
    let kekse = document.getElementById("kekse");
    async function ladeJson(_url) {
        let response = await fetch(_url);
        let inhalt = await response.json();
        for (let i = 0; i < inhalt.length; i++) {
            let divArtikel = document.createElement("div");
            divArtikel.setAttribute("class", "artikel");
            if (inhalt[i]._kategorie == "rispo") {
                rispo.appendChild(divArtikel);
            }
            else {
                kekse.appendChild(divArtikel);
            }
            let bild = document.createElement("img");
            bild.setAttribute("class", "bild");
            bild.setAttribute("src", inhalt[i]._bild);
            bild.setAttribute("alt", inhalt[i]._bildAlt);
            divArtikel.appendChild(bild);
            let name = document.createElement("h2");
            name.innerHTML = inhalt[i]._name;
            divArtikel.appendChild(name);
            let beschreibung = document.createElement("p");
            beschreibung.innerHTML = inhalt[i]._beschreibung;
            divArtikel.appendChild(beschreibung);
            let preis = document.createElement("p");
            preis.setAttribute("class", "preis");
            preis.innerHTML = inhalt[i]._preis + "€  ";
            divArtikel.appendChild(preis);
            let knopf = document.createElement("button");
            knopf.setAttribute("type", "button");
            knopf.setAttribute("class", "knopf");
            preis.appendChild(knopf);
            if (inhalt[i]._verfuegbar == true) {
                knopf.innerText = "Kaufen";
                knopf.setAttribute("class", "gibt");
                knopf.addEventListener("click", handleButton);
                //Funktion für Knopf-Artikel-Counter und Preis außerdem zum Artikel in Einkaufwagen zufügen
                function handleButton() {
                    let kreisDiv = document.getElementById("kreisDiv");
                    counter.push(inhalt[i]._preis);
                    let anzahl = wagenListe.length;
                    kreisDiv.innerHTML = "" + anzahl;
                    //Gesamtpreis
                    let summe = 0;
                    for (let i = 0; i < counter.length; i++) {
                        summe = summe + counter[i];
                    }
                    wagenListe.push(inhalt[i]);
                    localStorage.setItem("Artikel", JSON.stringify(wagenListe));
                    localStorage.setItem("Summe", summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
                }
            }
            else {
                knopf.innerText = "Ausverkauft";
                knopf.setAttribute("class", "gibtNicht");
            }
        }
    }
    ladeJson("https://sorayafe.github.io/GIS-SoSe-2020/Aufgabe07/daten.json");
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
        oreoDiv.style.display = "none";
        let ueberschriftOreo = document.getElementById("ueberschrift2");
        ueberschriftOreo.hidden = true;
        let rispoDiv = document.getElementById("rispo");
        rispoDiv.style.display = "flex";
        let ueberschriftRispo = document.getElementById("ueberschrift1");
        ueberschriftRispo.hidden = false;
    }
    function handleOreo() {
        let rispoDiv = document.getElementById("rispo");
        rispoDiv.style.display = "none";
        let ueberschrift = document.getElementById("ueberschrift1");
        ueberschrift.hidden = true;
        let oreoDiv = document.getElementById("kekse");
        oreoDiv.style.display = "flex";
        let ueberschriftOreo = document.getElementById("ueberschrift2");
        ueberschriftOreo.hidden = false;
    }
    function handleAlle() {
        let rispoDiv = document.getElementById("rispo");
        rispoDiv.style.display = "flex";
        let ueberschriftRispo = document.getElementById("ueberschrift1");
        ueberschriftRispo.style.display = "flex";
        let oreoDiv = document.getElementById("kekse");
        oreoDiv.style.display = "flex";
        let ueberschriftOreo = document.getElementById("ueberschrift2");
        ueberschriftOreo.style.display = "flex";
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script_shop.js.map