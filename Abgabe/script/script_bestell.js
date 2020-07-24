"use strict";
var Abgabe;
(function (Abgabe) {
    let deleteAll = document.getElementById("deleteAll");
    let laden = document.getElementById("laden");
    let ladeErledigt = document.getElementById("ladeErledigt");
    let serverAntwort = document.getElementById("serverAntwort");
    deleteAll.addEventListener("click", handleDelete);
    laden.addEventListener("click", handleLaden);
    ladeErledigt.addEventListener("click", handleLadeErledigt);
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
        let erledigt = document.getElementsByClassName("erledigt");
        let erledigtArray = Array.from(erledigt);
        for (let i = 0; i < erledigtArray.length; i++) {
            erledigtArray[i].addEventListener("click", handleErledigt);
        }
    }
    async function handleLadeErledigt() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/ladeErledigt";
        url = url + "?" + query.toString();
        let antwort = await fetch(url);
        let antwort2 = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }
    async function handleErledigt() {
        let formData = new FormData(document.forms[0]);
        // tslint:disable-next-line: no-any
        let query = new URLSearchParams(formData);
        let url = "https://gispraktikum2020.herokuapp.com";
        url = url + "/erledigt";
        url = url + "?" + query.toString();
        await fetch(url);
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=script_bestell.js.map