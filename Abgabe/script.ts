namespace Abgabe {

    export interface Option {
        _bild: string;
        _bildAlt: string;
        _name: string;
        _preis: number;
        _kategorie: string;
    }

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
            preis.innerHTML = inhalt[i]._preis + "€  ";
            divOption.appendChild(preis);

            let button: HTMLElement = document.createElement("button");
            button.setAttribute("type", "button");
            button.setAttribute("class", "button");
            button.innerHTML = "Auswählen";
            divOption.appendChild(button);

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

}
