"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    Aufgabe07.ladeJson("https://sorayafe.github.io/GIS-SoSe-2020/Aufgabe07/daten.json");
    //Eventlistener für Menü
    let filterRispo = document.getElementById("filterRispo");
    filterRispo.addEventListener("click", handleRispo);
    let filterOreo = document.getElementById("filterOreo");
    filterOreo.addEventListener("click", handleOreo);
    let filterAlle = document.getElementById("alle");
    filterAlle.addEventListener("click", handleAlle);
    //Funktionen für Filter
    function handleRispo() {
        let oreoDiv = document.getElementById("kekse");
        oreoDiv.style.display = "none";
        let ueberschriftOreo = document.getElementById("ueberschrift2");
        ueberschriftOreo.hidden = true;
        let rispoDiv = document.getElementById("rispo");
        rispoDiv.style.display = "flex";
        let ueberschriftRispo = document.getElementById("ueberschrift1");
        ueberschriftRispo.hidden = false;
    }
    function handleOreo() {
        let rispoDiv = document.getElementById("rispo");
        rispoDiv.style.display = "none";
        let ueberschrift = document.getElementById("ueberschrift1");
        ueberschrift.hidden = true;
        let oreoDiv = document.getElementById("kekse");
        oreoDiv.style.display = "flex";
        let ueberschriftOreo = document.getElementById("ueberschrift2");
        ueberschriftOreo.hidden = false;
    }
    function handleAlle() {
        let rispoDiv = document.getElementById("rispo");
        rispoDiv.style.display = "flex";
        let ueberschriftRispo = document.getElementById("ueberschrift1");
        ueberschriftRispo.style.display = "flex";
        let oreoDiv = document.getElementById("kekse");
        oreoDiv.style.display = "flex";
        let ueberschriftOreo = document.getElementById("ueberschrift2");
        ueberschriftOreo.style.display = "flex";
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=script_shop.js.map