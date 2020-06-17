"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let senden = document.getElementById("senden");
    senden?.addEventListener("click", handleSenden);
    let formData;
    async function handleSenden() {
        funktion(await funktion2());
    }
    async function funktion2() {
        formData = new FormData(document.forms[0]);
        let url = "https://gispraktikum2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        return url;
    }
    async function funktion(url) {
        let antwort = await fetch(url);
        let kjll = await antwort.text();
        console.log(kjll);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map