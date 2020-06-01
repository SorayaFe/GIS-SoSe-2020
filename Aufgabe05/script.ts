namespace Aufgabe05 {

    let kategorie: HTMLElement = document.createElement("div");
    kategorie.setAttribute("class", "rittersport");

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
        preis.appendChild(knopf);

        if (artikelliste[i]._verfuegbar == true) {

            knopf.innerText = "Kaufen";
            knopf.setAttribute("id", "gibt");
        }

        else {

            knopf.innerText = "Ausverkauft";
            knopf.setAttribute("id", "gibtNicht");
        }
    }
}

    artikelLaden(rittersport, kategorie);
    
    document.getElementById("rispo")?.appendChild(kategorie);

    let kategorie2: HTMLElement = document.createElement("div");
    kategorie2.setAttribute("class", "oreo");

    artikelLaden(oreo, kategorie2);

    document.getElementById("kekse")?.appendChild(kategorie2);
}