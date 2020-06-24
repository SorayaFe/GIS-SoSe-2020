"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let htmlButton = document.getElementById("html");
    htmlButton?.addEventListener("click", handleHtmlButton);
    let jsonButton = document.getElementById("json");
    jsonButton?.addEventListener("click", handleJsonButton);
    async function handleHtmlButton() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/html";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwort2 = await antwort.text();
        let antwortHTML = document.getElementById("antwortHTML");
        antwortHTML.innerHTML = antwort2;
    }
    async function handleJsonButton() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com/";
        url = url + "?" + query.toString();
        url = url + "/json";
        let antwort = await fetch(url);
        let antwort2 = await antwort.json();
        console.log(antwort2);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script.js.map