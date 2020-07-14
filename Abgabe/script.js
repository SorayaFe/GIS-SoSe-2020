"use strict";
var Abgabe;
(function (Abgabe) {
    let test = document.getElementById("test");
    test.addEventListener("click", handleTest);
    async function handleTest() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/test";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwort2 = await antwort.json();
        console.log(antwort2);
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=script.js.map