 namespace Aufgabe06 {

    //Div für Rispo
    let kategorie: HTMLElement = document.createElement("div");
    kategorie.setAttribute("id", "rispoDiv");

    //Counter für Knöpfe später
    let counter: number[] = [];
    
    //Artiekl Laden Funktion
    function artikelLaden (artikelliste: Artikel[], artikelDiv: HTMLElement): void {
  
    for (let i: number = 0; i < artikelliste.length; i++) {

        let divArtikel: HTMLElement = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        artikelDiv.appendChild(divArtikel);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", artikelliste[i]._bild);
        bild.setAttribute("alt", artikelliste[i]._bildAlt);
        divArtikel.appendChild(bild);

        let name: HTMLElement = document.createElement("h2");
        name.innerHTML = artikelliste[i]._name;
        divArtikel.appendChild(name);

        let beschreibung: HTMLElement = document.createElement("p");
        beschreibung.innerHTML = artikelliste[i]._beschreibung;
        divArtikel.appendChild(beschreibung);

        let preis: HTMLElement = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = artikelliste[i]._preis + "€  ";
        divArtikel.appendChild(preis);
        
        let knopf: HTMLElement = document.createElement("button");
        knopf.setAttribute("type", "button");
        knopf.setAttribute("class", "knopf");
        preis.appendChild(knopf);
        

        if (artikelliste[i]._verfuegbar == true) {

            knopf.innerText = "Kaufen";
            knopf.setAttribute("id", "gibt");
            knopf.addEventListener("click", handleButton);

            //Funktion für Knopf-Artikel-Counter und Preis
            function handleButton(): void {

                document.getElementById("zahlDiv")?.remove();

                let zahlDiv: HTMLElement = document.createElement("div");
                zahlDiv.setAttribute("id", "zahlDiv");
                document.getElementById("kreisDiv")?.appendChild(zahlDiv);
        
                let anzeige: HTMLElement = document.createElement("p");
                anzeige.setAttribute("id", "zahl");
                zahlDiv.appendChild(anzeige);
        
                counter.push(artikelliste[i]._preis);

                anzeige.innerHTML = "" + counter.length;
                
                let summe: number = 0;
                for (let i: number = 0; i < counter.length; i++) {
                    summe = summe + counter[i];
                }

                console.log("Summe:" + summe.toLocaleString("de-DE", {"currency": "EUR", "style": "currency"}));
            }
        }

        else {

            knopf.innerText = "Ausverkauft";
            knopf.setAttribute("id", "gibtNicht");
        }
    }
}

    //Artikel in Doc
    artikelLaden(rittersport, kategorie);
    
    document.getElementById("rispo")?.appendChild(kategorie);

    let kategorie2: HTMLElement = document.createElement("div");
    kategorie2.setAttribute("id", "oreoDiv");

    artikelLaden(oreo, kategorie2);

    document.getElementById("kekse")?.appendChild(kategorie2);

    //Eventlistener für Menü
    let filterRispo: HTMLElement = <HTMLElement> document.getElementById("filterRispo");
    filterRispo.addEventListener("click", handleRispo);

    let filterOreo: HTMLElement = <HTMLElement> document.getElementById("filterOreo");
    filterOreo.addEventListener("click", handleOreo);

    let filterAlle: HTMLElement = <HTMLElement> document.getElementById("alle");
    filterAlle.addEventListener("click", handleAlle);

    //Funktionen für Filter
    
    function handleRispo(): void {

            let oreoDiv: HTMLElement = <HTMLElement> document.getElementById("kekse");
            oreoDiv.hidden = true;

            let ueberschriftOreo: HTMLElement = <HTMLElement> document.getElementById("ueberschrift2");
            ueberschriftOreo.hidden = true;
            
            let rispoDiv: HTMLElement = <HTMLElement> document.getElementById("rispo");
            rispoDiv.hidden = false;

            let ueberschriftRispo: HTMLElement = <HTMLElement> document.getElementById("ueberschrift1");
            ueberschriftRispo.hidden = false;
    }

    function handleOreo(): void {

        let rispoDiv: HTMLElement = <HTMLElement> document.getElementById("rispo");
        rispoDiv.hidden = true;

        let ueberschrift: HTMLElement = <HTMLElement> document.getElementById("ueberschrift1");
        ueberschrift.hidden = true;

        let oreoDiv: HTMLElement = <HTMLElement> document.getElementById("kekse");
        oreoDiv.hidden = false;

        let ueberschriftOreo: HTMLElement = <HTMLElement> document.getElementById("ueberschrift2");
        ueberschriftOreo.hidden = false;
    }

    function handleAlle(): void {

        let rispoDiv: HTMLElement = <HTMLElement> document.getElementById("rispo");
        rispoDiv.hidden = false;

        let ueberschriftRispo: HTMLElement = <HTMLElement> document.getElementById("ueberschrift1");
        ueberschriftRispo.hidden = false;

        let oreoDiv: HTMLElement = <HTMLElement> document.getElementById("kekse");
        oreoDiv.hidden = false;

        let ueberschriftOreo: HTMLElement = <HTMLElement> document.getElementById("ueberschrift2");
        ueberschriftOreo.hidden = false;
    }
}