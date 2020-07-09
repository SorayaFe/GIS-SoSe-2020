"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let versenden = document.getElementById("versenden");
    let abfragen = document.getElementById("abfragen");
    let leeren = document.getElementById("leeren");
    let serverAntwort = document.getElementById("serverAntwort");
    versenden.addEventListener("click", handleVersenden);
    abfragen.addEventListener("click", handleAbfragen);
    leeren.addEventListener("click", handleLeeren);
    async function handleVersenden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/versenden";
        url = url + "?" + query.toString();
        await fetch(url);
        let formular = document.getElementById("formular");
        formular.reset();
    }
    async function handleAbfragen() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/abfragen";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwort2 = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }
    async function handleLeeren() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/leeren";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwort2 = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script.js.map