"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    let hinzufuegen = document.getElementsByTagName("button");
    for (let i = 0; hinzufuegen.length; i++) {
        let button = hinzufuegen[i];
        button.addEventListener("click", handleButton);
    }
    function handleButton() {
        let wagenZahlDiv = document.createElement("div");
        wagenZahlDiv.setAttribute("class", "wagenZahlDiv");
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=scriptKnoepfe.js.map