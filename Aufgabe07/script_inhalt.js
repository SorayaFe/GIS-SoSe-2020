"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //Liste für Einkaufswagen
    let wagenListe = [];
    //Counter für Anzahl der Artikel
    let counter = [];
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
                    wagenListe.push(inhalt[i]);
                    localStorage.setItem("Artikel", JSON.stringify(wagenListe));
                    let kreisDiv = document.getElementById("kreisDiv");
                    let anzahl = counter.push(inhalt[i]._preis);
                    kreisDiv.innerHTML = "" + anzahl;
                    //Gesamtpreis
                    let summe = 0;
                    for (let i = 0; i < counter.length; i++) {
                        summe = summe + counter[i];
                    }
                    localStorage.setItem("Summe", summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
                }
            }
            else {
                knopf.innerText = "Ausverkauft";
                knopf.setAttribute("class", "gibtNicht");
            }
        }
    }
    Aufgabe07.ladeJson = ladeJson;
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script_inhalt.js.map