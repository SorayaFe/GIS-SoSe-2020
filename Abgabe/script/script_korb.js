"use strict";
var Abgabe;
(function (Abgabe) {
    let bestellung = JSON.parse(localStorage.getItem("Bestellung"));
    let summe = localStorage.getItem("Summe");
    let gesPreis = document.getElementById("gesPreis");
    gesPreis.innerHTML = summe;
    let formular = document.getElementById("formular");
    let count1 = 0;
    let count2 = 0;
    //Bestellung laden
    for (let i = 0; i < bestellung.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("readonly", "true");
        if (bestellung[i]._kategorie == "Eis") {
            count1 = count1 + 1;
            input.setAttribute("name", "Eis" + count1);
            input.setAttribute("value", bestellung[i]._name);
        }
        if (bestellung[i]._kategorie == "Topping") {
            count2 = count2 + 1;
            input.setAttribute("name", "Topping" + count2);
            input.setAttribute("value", bestellung[i]._name);
        }
        if (bestellung[i]._kategorie == "Behaelter") {
            input.setAttribute("name", "Behälter");
            input.setAttribute("value", bestellung[i]._name);
        }
        formular.appendChild(input);
    }
    let br = document.createElement("br");
    formular.appendChild(br);
    let aufforderung = document.createElement("h2");
    aufforderung.innerHTML = "Bitte geben Sie Ihre Daten ein!";
    formular.appendChild(aufforderung);
    //Adressformular laden
    let adressformular = ["Vorname", "Nachname", "Adresse", "PLZ, Ort"];
    for (let i = 0; i < adressformular.length; i++) {
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", adressformular[i]);
        input.setAttribute("placeholder", adressformular[i]);
        let br = document.createElement("br");
        formular.appendChild(input);
        formular.appendChild(br);
    }
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("readonly", "true");
    input.setAttribute("name", "Status");
    input.setAttribute("value", "offen");
    formular.appendChild(input);
    input.style.display = "none";
    //Bestellen Button
    let bestellen = document.createElement("button");
    bestellen.setAttribute("type", "reset");
    bestellen.setAttribute("id", "bestellen");
    bestellen.innerHTML = "Jetzt bestellen!";
    formular.appendChild(bestellen);
    bestellen.addEventListener("click", handleBestellen);
    //Funktion fürs Bestellen
    async function handleBestellen() {
        let bestell = document.getElementById("bestell");
        bestell.innerHTML = "";
        formular.hidden = true;
        gesPreis.innerHTML = "";
        let erfolgreich = document.createElement("h1");
        erfolgreich.setAttribute("id", "erfolgreich");
        erfolgreich.innerHTML = "Bestellung erfolgreich!";
        erfolgreich.appendChild(document.createElement("br"));
        document.querySelector("body")?.appendChild(erfolgreich);
        let nochmal = document.createElement("a");
        nochmal.setAttribute("href", "shop.html");
        nochmal.innerHTML = "Stelle noch ein Eis zusammen!";
        erfolgreich.appendChild(nochmal);
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/abschicken";
        url = url + "?" + query.toString();
        await fetch(url);
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=script_korb.js.map