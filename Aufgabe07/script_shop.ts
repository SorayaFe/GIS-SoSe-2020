namespace Aufgabe07 {

    ladeJson("https://sorayafe.github.io/GIS-SoSe-2020/Aufgabe07/daten.json");

    //Eventlistener für Menü
    let filterRispo: HTMLElement = <HTMLElement>document.getElementById("filterRispo");
    filterRispo.addEventListener("click", handleRispo);

    let filterOreo: HTMLElement = <HTMLElement>document.getElementById("filterOreo");
    filterOreo.addEventListener("click", handleOreo);

    let filterAlle: HTMLElement = <HTMLElement>document.getElementById("alle");
    filterAlle.addEventListener("click", handleAlle);

    //Funktionen für Filter

    function handleRispo(): void {

        let oreoDiv: HTMLElement = <HTMLElement>document.getElementById("kekse");
        oreoDiv.style.display = "none";

        let ueberschriftOreo: HTMLElement = <HTMLElement>document.getElementById("ueberschrift2");
        ueberschriftOreo.hidden = true;

        let rispoDiv: HTMLElement = <HTMLElement>document.getElementById("rispo");
        rispoDiv.style.display = "flex";

        let ueberschriftRispo: HTMLElement = <HTMLElement>document.getElementById("ueberschrift1");
        ueberschriftRispo.hidden = false;
    }

    function handleOreo(): void {

        let rispoDiv: HTMLElement = <HTMLElement>document.getElementById("rispo");
        rispoDiv.style.display = "none";

        let ueberschrift: HTMLElement = <HTMLElement>document.getElementById("ueberschrift1");
        ueberschrift.hidden = true;

        let oreoDiv: HTMLElement = <HTMLElement>document.getElementById("kekse");
        oreoDiv.style.display = "flex";

        let ueberschriftOreo: HTMLElement = <HTMLElement>document.getElementById("ueberschrift2");
        ueberschriftOreo.hidden = false;
    }

    function handleAlle(): void {

        let rispoDiv: HTMLElement = <HTMLElement>document.getElementById("rispo");
        rispoDiv.style.display = "flex";

        let ueberschriftRispo: HTMLElement = <HTMLElement>document.getElementById("ueberschrift1");
        ueberschriftRispo.style.display = "flex";

        let oreoDiv: HTMLElement = <HTMLElement>document.getElementById("kekse");
        oreoDiv.style.display = "flex";

        let ueberschriftOreo: HTMLElement = <HTMLElement>document.getElementById("ueberschrift2");
        ueberschriftOreo.style.display = "flex";
    }
}
