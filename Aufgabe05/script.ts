namespace Aufgabe05 {

    let kategorie: HTMLElement = document.createElement("div");
    kategorie.setAttribute("class", "rittersport");

    for (let i: number = 0; i < rittersport.length; i++) {

        let divArtikel: HTMLElement = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        kategorie.appendChild(divArtikel);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", rittersport[i]._bild);
        bild.setAttribute("alt", rittersport[i]._bildAlt);
        divArtikel.appendChild(bild);

        let name: HTMLElement = document.createElement("h2");
        name.innerHTML = rittersport[i]._name;
        divArtikel.appendChild(name);

        let beschreibung: HTMLElement = document.createElement("p");
        beschreibung.innerHTML = rittersport[i]._beschreibung;
        divArtikel.appendChild(beschreibung);

        let preis: HTMLElement = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = rittersport[i]._preis;
        divArtikel.appendChild(preis);
    }
    document.getElementById("rispo")?.appendChild(kategorie);


    let kategorie2: HTMLElement = document.createElement("div");
    kategorie2.setAttribute("class", "oreo");

    for (let i: number = 0; i < oreo.length; i++) {

        let divArtikel: HTMLElement = document.createElement("div");
        divArtikel.setAttribute("class", "artikel");
        kategorie2.appendChild(divArtikel);

        let bild: HTMLElement = document.createElement("img");
        bild.setAttribute("class", "bild");
        bild.setAttribute("src", oreo[i]._bild);
        bild.setAttribute("alt", oreo[i]._bildAlt);
        divArtikel.appendChild(bild);

        let name: HTMLElement = document.createElement("h2");
        name.innerHTML = oreo[i]._name;
        divArtikel.appendChild(name);

        let beschreibung: HTMLElement = document.createElement("p");
        beschreibung.innerHTML = oreo[i]._beschreibung;
        divArtikel.appendChild(beschreibung);

        let preis: HTMLElement = document.createElement("p");
        preis.setAttribute("class", "preis");
        preis.innerHTML = oreo[i]._preis;
        divArtikel.appendChild(preis);
    }
    
    document.getElementById("kekse")?.appendChild(kategorie2);
}