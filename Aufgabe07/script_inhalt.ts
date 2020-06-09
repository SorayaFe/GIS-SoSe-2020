namespace Aufgabe07 {

    export interface Artikel {
        _name: string;
        _beschreibung: string;
        _preis: number;
        _bild: string;
        _bildAlt: string;
        _verfuegbar: boolean;
        _kategorie: string;
    }

    //Liste für Einkaufswagen
    let wagenListe: Artikel[] = [];

    //Counter für Anzahl der Artikel
    let counter: number[] = [];

    //Artikel von JSON laden
    let rispo: HTMLElement = <HTMLElement> document.getElementById("rispo");
    let kekse: HTMLElement = <HTMLElement> document.getElementById("kekse");
    
    export async function ladeJson(_url: RequestInfo): Promise<void> {
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

                    wagenListe.push(inhalt[i]);

                    if (window.localStorage.length == 0) {
                    localStorage.setItem("Artikel", JSON.stringify(wagenListe));
                    }

                    else {
                        let test: Artikel[] = JSON.parse(localStorage.getItem("Artikel")!);
                        test.push(inhalt[i]);
                        localStorage.setItem("Artikel", JSON.stringify(test));
                    }

                    let kreisDiv: HTMLElement = <HTMLElement>document.getElementById("kreisDiv");

                    let anzahl: number = counter.push(inhalt[i]._preis);

                    kreisDiv.innerHTML = "" + anzahl;

                    //Gesamtpreis
                    let summe: number = 0;
                    for (let i: number = 0; i < counter.length; i++) {
                        summe = summe + counter[i];
                    }

                    localStorage.setItem("Summe", summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
                }
            }

            else {

                knopf.innerText = "Ausverkauft";
                knopf.setAttribute("class", "gibtNicht");
            }
        }
    }
}