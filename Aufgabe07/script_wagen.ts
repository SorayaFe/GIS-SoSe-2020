namespace Aufgabe07 {
    
    //Liste der Artikel im Einkaufswagen
    let wagenListe: Artikel[] = JSON.parse(localStorage.getItem("Artikel")!);

    //Artikel in Einkaufswagen laden
    let wagenArtikel: HTMLElement = <HTMLElement> document.getElementById("wagenArtikel");

    for (let i: number = 0; i < wagenListe.length; i++) {
        let divArtikel: HTMLElement = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        wagenArtikel.appendChild(divArtikel);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", wagenListe[i]._bild);
        bild.setAttribute("alt", wagenListe[i]._bildAlt);
        divArtikel.appendChild(bild);

        let name: HTMLElement = document.createElement("h2");
        name.innerHTML = wagenListe[i]._name;
        divArtikel.appendChild(name);

        let beschreibung: HTMLElement = document.createElement("p");
        beschreibung.innerHTML = wagenListe[i]._beschreibung;
        divArtikel.appendChild(beschreibung);

        let preis: HTMLElement = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = wagenListe[i]._preis + "€  ";
        divArtikel.appendChild(preis);

        //Artikel entfernen Knopf
        let entfernen: HTMLElement = document.createElement("button");
        entfernen.setAttribute("type", "button");
        entfernen.setAttribute("class", "entfernen");
        entfernen.innerText = "Entfernen";
        divArtikel.appendChild(entfernen);
        entfernen.addEventListener("click", handleEntfernen);

        //Artikel entfernen Funktion
        function handleEntfernen(): void {

            divArtikel.remove();

            let alteListe: Artikel[] = JSON.parse(localStorage.getItem("Artikel")!);
            alteListe.splice(i, 1);
            let neueListe: Artikel[] = alteListe;
            localStorage.setItem("Artikel", JSON.stringify(neueListe));
            
            let neueSumme: number = 0;
            for (let i: number = 0; i < neueListe.length; i++) {

                neueSumme = neueSumme + neueListe[i]._preis;
            }

            let neueSummeRund: string = neueSumme.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });

            localStorage.removeItem("Summe");
            localStorage.setItem("Summe", neueSummeRund);

            window.location.reload();
        }
    }

    //Gesamtpreis anzeigen
    let gesamtpreis: HTMLElement = <HTMLElement> document.getElementById("gesamtpreis");
    let summe: string = localStorage.getItem("Summe")!;
    gesamtpreis.innerText = "Gesamtpreis: " + summe;

    //Konopf zum Einkaufswagen leeren
    let leeren: HTMLElement = <HTMLElement> document.getElementById("leeren");
    leeren.addEventListener("click", handleLeeren);

    //Funktion zum Einkaufswagen leeren
    function handleLeeren(): void {
        
        localStorage.clear();
        document.getElementById("wagenArtikel")?.remove();
        gesamtpreis.innerText = "Gesamtpreis: 0,00 €";
    }
}