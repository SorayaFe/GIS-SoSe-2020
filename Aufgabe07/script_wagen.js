"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //Liste der Artikel im Einkaufswagen
    let wagenListe = JSON.parse(localStorage.getItem("Artikel"));
    //Artikel in Einkaufswagen laden
    let wagenArtikel = document.getElementById("wagenArtikel");
    for (let i = 0; i < wagenListe.length; i++) {
        let divArtikel = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        wagenArtikel.appendChild(divArtikel);
        let bild = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", wagenListe[i]._bild);
        bild.setAttribute("alt", wagenListe[i]._bildAlt);
        divArtikel.appendChild(bild);
        let name = document.createElement("h2");
        name.innerHTML = wagenListe[i]._name;
        divArtikel.appendChild(name);
        let beschreibung = document.createElement("p");
        beschreibung.innerHTML = wagenListe[i]._beschreibung;
        divArtikel.appendChild(beschreibung);
        let preis = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = wagenListe[i]._preis + "€  ";
        divArtikel.appendChild(preis);
        //Artikel entfernen Knopf
        let entfernen = document.createElement("button");
        entfernen.setAttribute("type", "button");
        entfernen.setAttribute("class", "entfernen");
        entfernen.innerText = "Entfernen";
        divArtikel.appendChild(entfernen);
        entfernen.addEventListener("click", handleEntfernen);
        //Artikel entfernen Funktion
        function handleEntfernen() {
            divArtikel.remove();
            let alteListe = JSON.parse(localStorage.getItem("Artikel"));
            alteListe.splice(i, 1);
            let neueListe = alteListe;
            localStorage.setItem("Artikel", JSON.stringify(neueListe));
            let neueSumme = 0;
            for (let i = 0; i < neueListe.length; i++) {
                neueSumme = neueSumme + neueListe[i]._preis;
            }
            localStorage.removeItem("Summe");
            localStorage.setItem("Summe", JSON.stringify(neueSumme));
            window.location.reload();
        }
    }
    //Gesamtpreis anzeigen
    let gesamtpreis = document.getElementById("gesamtpreis");
    let summe = localStorage.getItem("Summe");
    let gerundeteSumme = parseFloat(summe).toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
    gesamtpreis.innerText = "Gesamtpreis: " + gerundeteSumme;
    //Konopf zum Einkaufswagen leeren
    let leeren = document.getElementById("leeren");
    leeren.addEventListener("click", handleLeeren);
    //Funktion zum Einkaufswagen leeren
    function handleLeeren() {
        localStorage.clear();
        document.getElementById("wagenArtikel")?.remove();
        gesamtpreis.innerText = "0.00 €";
    }
    let home = document.getElementById("home");
    home.addEventListener("click", handleHome);
    function handleHome() {
        localStorage.setItem("Artikel", JSON.stringify(wagenListe));
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script_wagen.js.map