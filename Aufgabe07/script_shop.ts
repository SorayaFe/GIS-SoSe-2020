 namespace Aufgabe07 {

    //Liste für Einkaufswagen
    let wagenListe: Artikel[] = [];

    if (localStorage.getItem("Artikel") != null) {
        let vorhandeneListe: Artikel[] = JSON.parse(localStorage.getItem("Artikel")!);
        wagenListe = vorhandeneListe;
    }

    //Counter für Anzahl der Artikel
    let counter: number[] = [];

    if (localStorage.getItem("Summe") != null) {
        let vorhandenerCounter: number = parseFloat(localStorage.getItem("Summe")!);
        counter[0] = vorhandenerCounter;
    }
    
    //Artikel von JSON laden
    let rispo: HTMLElement = <HTMLElement>document.getElementById("rispo");
    let kekse: HTMLElement = <HTMLElement>document.getElementById("kekse");

    async function ladeJson(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url);
        let inhalt: Artikel[] = await response.json();

        for (let i: number = 0; i < inhalt.length; i++) {
            let divArtikel: HTMLElement = document.createElement("div");
            divArtikel.setAttribute("class", "artikel");

            if (inhalt[i]._kategorie == "rispo") {
                rispo.appendChild(divArtikel);
            }

            else {
                kekse.appendChild(divArtikel);
            }

            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("class", "bild");
            bild.setAttribute("src", inhalt[i]._bild);
            bild.setAttribute("alt", inhalt[i]._bildAlt);
            divArtikel.appendChild(bild);

            let name: HTMLElement = document.createElement("h2");
            name.innerHTML = inhalt[i]._name;
            divArtikel.appendChild(name);

            let beschreibung: HTMLElement = document.createElement("p");
            beschreibung.innerHTML = inhalt[i]._beschreibung;
            divArtikel.appendChild(beschreibung);

            let preis: HTMLElement = document.createElement("p");
            preis.setAttribute("class", "preis");
            preis.innerHTML = inhalt[i]._preis + "€  ";
            divArtikel.appendChild(preis);

            let knopf: HTMLElement = document.createElement("button");
            knopf.setAttribute("type", "button");
            knopf.setAttribute("class", "knopf");
            preis.appendChild(knopf);

            if (inhalt[i]._verfuegbar == true) {

                knopf.innerText = "Kaufen";
                knopf.setAttribute("class", "gibt");
                knopf.addEventListener("click", handleButton);

                //Funktion für Knopf-Artikel-Counter und Preis außerdem zum Artikel in Einkaufwagen zufügen
                function handleButton(): void {

                    let kreisDiv: HTMLElement = <HTMLElement>document.getElementById("kreisDiv");

                    counter.push(inhalt[i]._preis);
                    
                    wagenListe.push(inhalt[i]);
                    
                    let anzahl: number = wagenListe.length;

                    kreisDiv.innerHTML = "" + anzahl;

                    //Gesamtpreis
                    let summe: number = 0;
                    for (let i: number = 0; i < counter.length; i++) {
                        summe = summe + counter[i];
                    }

                    localStorage.setItem("Artikel", JSON.stringify(wagenListe));

                    localStorage.setItem("Summe", summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
                }
            }

            else {

                knopf.innerText = "Ausverkauft";
                knopf.setAttribute("class", "gibtNicht");
            }
        }
    }

    ladeJson("daten.json");

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
