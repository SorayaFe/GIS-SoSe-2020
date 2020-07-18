"use strict";
var Abgabe;
(function (Abgabe) {
    let bestellung = JSON.parse(localStorage.getItem("Bestellung"));
    let formular = document.getElementById("formular");
    for (let i = 0; i < bestellung.length; i++) {
        if (bestellung[i]._kategorie == "Eis") {
            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", "Eis");
            input.setAttribute("value", "Eissorte: " + bestellung[i]._name);
            input.setAttribute("readonly", "true");
            let br = document.createElement("br");
            formular.appendChild(input);
            formular.appendChild(br);
        }
        if (bestellung[i]._kategorie == "Topping") {
            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", "Topping");
            input.setAttribute("value", "Topping: " + bestellung[i]._name);
            input.setAttribute("readonly", "true");
            let br = document.createElement("br");
            formular.appendChild(input);
            formular.appendChild(br);
        }
        if (bestellung[i]._kategorie == "Behaelter") {
            let input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", "Behaelter");
            input.setAttribute("value", "Behälter: " + bestellung[i]._name);
            input.setAttribute("readonly", "true");
            let br = document.createElement("br");
            formular.appendChild(input);
            formular.appendChild(br);
        }
    }
})(Abgabe || (Abgabe = {}));
//# sourceMappingURL=script_korb.js.map