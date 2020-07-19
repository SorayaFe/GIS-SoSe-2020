namespace Abgabe {

    export interface Option {
        _bild: string;
        _bildAlt: string;
        _name: string;
        _preis: number;
        _kategorie: string;
    }

    let eisGew: Option[] = [];
    let toppGew: Option[] = [];
    let behGew: Option[] = [];

    let gewaehlt: Option[] = [];

    let preisDiv: HTMLElement = <HTMLElement>document.getElementById("preis");
    let gesPreis: number[] = [];

    let eis: HTMLElement = <HTMLElement>document.getElementById("eis");
    let topping: HTMLElement = <HTMLElement>document.getElementById("toppings");
    let behaelter: HTMLElement = <HTMLElement>document.getElementById("behaelter");

    //Optionen laden
    async function ladeJson(_url: RequestInfo): Promise<void> {

        let response: Response = await fetch(_url);
        let inhalt: Option[] = await response.json();

        for (let i: number = 0; i < inhalt.length; i++) {
            let divOption: HTMLElement = document.createElement("div");
            divOption.setAttribute("class", "option");

            if (inhalt[i]._kategorie == "Eis") {

                eis.appendChild(divOption);
            }

            else if (inhalt[i]._kategorie == "Topping") {

                topping.appendChild(divOption);
            }

            else if (inhalt[i]._kategorie == "Behaelter") {

                behaelter.appendChild(divOption);
            }

            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("class", "bild");
            bild.setAttribute("src", inhalt[i]._bild);
            bild.setAttribute("alt", inhalt[i]._bildAlt);
            divOption.appendChild(bild);

            let name: HTMLElement = document.createElement("h2");
            name.innerHTML = inhalt[i]._name;
            divOption.appendChild(name);

            let preis: HTMLElement = document.createElement("p");
            preis.setAttribute("class", "preis");
            preis.innerHTML = inhalt[i]._preis.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
            divOption.appendChild(preis);

            let select: HTMLElement = document.createElement("button");
            select.setAttribute("type", "button");
            select.setAttribute("class", "select");
            select.innerHTML = "Auswählen";
            divOption.appendChild(select);
            select.addEventListener("click", handleSelect);

            //Optionen auswählen
            function handleSelect(): void {

                if (inhalt[i]._kategorie == "Eis" && eisGew.length == 5) {
                    window.alert("Maximum der Eiskugeln erreicht!");
                }

                if (inhalt[i]._kategorie == "Eis" && eisGew.length < 5) {
                    eisGew.push(inhalt[i]);
                    gewaehlt.push(inhalt[i]);
                    gesPreis.push(inhalt[i]._preis);
                    handleGewaehlt();

                }

                if (inhalt[i]._kategorie == "Topping" && toppGew.length == 3) {
                    window.alert("Maximum der Toppings erreicht!");
                }

                if (inhalt[i]._kategorie == "Topping" && toppGew.length < 3) {
                    toppGew.push(inhalt[i]);
                    gewaehlt.push(inhalt[i]);
                    gesPreis.push(inhalt[i]._preis);
                    handleGewaehlt();
                }

                if (inhalt[i]._kategorie == "Behaelter" && behGew.length != 0) {
                    window.alert("Behälter bereits Ausgewählt! Entfernen Sie den gewählten Behälter falls Sie einen anderen möchten!");
                }

                if (inhalt[i]._kategorie == "Behaelter" && behGew.length < 1) {
                    behGew.push(inhalt[i]);
                    gewaehlt.push(inhalt[i]);
                    gesPreis.push(inhalt[i]._preis);
                    handleGewaehlt();
                }
            }

        }
    }

    ladeJson("inhalt.json");

    //Filtern
    let allesF: HTMLElement = <HTMLElement>document.getElementById("allesF");
    let eisF: HTMLElement = <HTMLElement>document.getElementById("eisF");
    let toppF: HTMLElement = <HTMLElement>document.getElementById("toppF");
    let behF: HTMLElement = <HTMLElement>document.getElementById("behF");

    let headEis: HTMLElement = <HTMLElement>document.getElementById("headEis");
    let headTopp: HTMLElement = <HTMLElement>document.getElementById("headTopp");
    let headBeh: HTMLElement = <HTMLElement>document.getElementById("headBeh");

    allesF?.addEventListener("click", handleAlles);
    eisF?.addEventListener("click", handleEis);
    toppF?.addEventListener("click", handleTopp);
    behF?.addEventListener("click", handleBeh);

    function handleAlles(): void {

        eis.style.display = "flex";
        topping.style.display = "flex";
        behaelter.style.display = "flex";
        headEis.hidden = false;
        headTopp.hidden = false;
        headBeh.hidden = false;
    }

    function handleEis(): void {

        eis.style.display = "flex";
        topping.style.display = "none";
        behaelter.style.display = "none";
        headEis.hidden = false;
        headTopp.hidden = true;
        headBeh.hidden = true;
    }

    function handleTopp(): void {

        eis.style.display = "none";
        topping.style.display = "flex";
        behaelter.style.display = "none";
        headEis.hidden = true;
        headTopp.hidden = false;
        headBeh.hidden = true;
    }

    function handleBeh(): void {

        eis.style.display = "none";
        topping.style.display = "none";
        behaelter.style.display = "flex";
        headEis.hidden = true;
        headTopp.hidden = true;
        headBeh.hidden = false;
    }

    //Gewählte Optionen anzeigen
    function handleGewaehlt(): void {

        let gewaehltDiv: HTMLElement = <HTMLElement>document.getElementById("deins");
        gewaehltDiv.innerHTML = "";

        for (let i: number = 0; i < gewaehlt.length; i++) {

            let divOption: HTMLElement = document.createElement("div");
            divOption.setAttribute("class", "option");

            let bild: HTMLElement = document.createElement("img");
            bild.setAttribute("class", "bild");
            bild.setAttribute("src", gewaehlt[i]._bild);
            bild.setAttribute("alt", gewaehlt[i]._bildAlt);
            divOption.appendChild(bild);

            let name: HTMLElement = document.createElement("h2");
            name.innerHTML = gewaehlt[i]._name;
            divOption.appendChild(name);

            let preis: HTMLElement = document.createElement("p");
            preis.setAttribute("class", "preis");
            preis.innerHTML = gewaehlt[i]._preis.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });
            divOption.appendChild(preis);

            let entfernen: HTMLElement = document.createElement("button");
            entfernen.setAttribute("type", "button");
            entfernen.setAttribute("class", "entfernen");
            entfernen.innerHTML = "Entfernen";
            divOption.appendChild(entfernen);
            entfernen.addEventListener("click", handleEntfernen);
            
            let summe: number = 0;
            for (let i: number = 0; i < gesPreis.length; i++) {
                summe = summe + gesPreis[i];
            }

            localStorage.setItem("Summe", summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" }));
            preisDiv.innerHTML = "Preis: " + summe.toLocaleString("de-DE", { "currency": "EUR", "style": "currency" });

            gewaehltDiv.appendChild(divOption);
            
            //Optionen entfernen
            function handleEntfernen(): void {

                if (gewaehlt[i]._kategorie == "Eis") {
                    eisGew.splice(0, 1);
                    console.log(eisGew.length);
                }
                if (gewaehlt[i]._kategorie == "Topping") {
                    toppGew.splice(0, 1);
                }
                if (gewaehlt[i]._kategorie == "Behaelter") {
                    behGew.splice(0, 1);
                }

                gewaehlt.splice(i, 1);
                gesPreis.splice(i, 1);
                handleGewaehlt();
            }
        }
    }

    //In Warenkorb legen
    let inKorb: HTMLElement = <HTMLElement>document.getElementById("inKorb");
    inKorb.addEventListener("click", handleInKorb);

    function handleInKorb(): void {

        if (behGew.length == 0) {
            window.alert("Bitte wählen Sie zuerst einen Behälter aus!");
        }

        if (eisGew.length == 0 && toppGew.length == 0) {
            window.alert("Bitte wählen Sie mindestens einen Artikel!");
        }

        else {
            localStorage.setItem("Bestellung", JSON.stringify(gewaehlt));
            let wagen: HTMLElement = <HTMLElement>document.getElementById("wagen");
            wagen.style.borderColor = "green";
            wagen.style.borderWidth = "5px";
        }
    }

}
