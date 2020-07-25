"use strict";
var Abgabe;
(function (Abgabe) {
    let deleteAll = document.getElementById("deleteAll");
    let laden = document.getElementById("laden");
    let status = document.getElementById("status");
    let serverAntwort = document.getElementById("serverAntwort");
    deleteAll.addEventListener("click", handleDelete);
    laden.addEventListener("click", handleLaden);
    status.addEventListener("click", handleStatus);
    async function handleDelete() {
        serverAntwort.innerHTML = "Alle Bestellungen gelöscht!";
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/loeschen";
        url = url + "?" + query.toString();
        await fetch(url);
    }
    async function handleLaden() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/laden";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwort2 = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }
    async function handleStatus() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/status";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwort2 = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=script_bestell.js.map