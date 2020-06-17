"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    let senden = document.getElementById("senden");
    senden?.addEventListener("click", handleSenden);
    async function handleSenden() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gispraktikum2020.herokuapp.com/";
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let lkjlj = antwort.url;
        console.log(lkjlj);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=jkjkjk.js.map