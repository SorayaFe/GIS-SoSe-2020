namespace Abgabe {

    let bestellung: Option[] = JSON.parse(localStorage.getItem("Bestellung")!);

    let summe: string = localStorage.getItem("Summe")!;
    let gesPreis: HTMLElement = <HTMLElement>document.getElementById("gesPreis");
    gesPreis.innerHTML = summe;

    let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular");

    let count1: number = 0;
    let count2: number = 0;
    
    //Bestellung laden
    for (let i: number = 0; i < bestellung.length; i++) {

        if (bestellung[i]._kategorie == "Eis") {
            
            count1 = count1 + 1;
            let input: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", "Eis" + count1);
            input.setAttribute("value", "Eis " + count1 + ": " + bestellung[i]._name);
            input.setAttribute("readonly", "true");
            formular.appendChild(input);
        }

        if (bestellung[i]._kategorie == "Topping") {
            
            count2 = count2 + 1;
            let input: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", "Topping" + count2);
            input.setAttribute("value", "Topping " + count2 + ": " + bestellung[i]._name);
            input.setAttribute("readonly", "true");
            formular.appendChild(input);
        }

        if (bestellung[i]._kategorie == "Behaelter") {

            let input: HTMLInputElement = <HTMLInputElement>document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", "Behaelter");
            input.setAttribute("value", "Behälter: " + bestellung[i]._name);
            input.setAttribute("readonly", "true");
            formular.appendChild(input);
        }
    }

    let br: HTMLElement = <HTMLElement>document.createElement("br");
    formular.appendChild(br);
    let aufforderung: HTMLElement = <HTMLElement>document.createElement("h2");
    aufforderung.innerHTML = "Bitte geben Sie Ihre Daten ein!";
    formular.appendChild(aufforderung);

    //Adressformular laden
    let adressformular: string[] = ["Vorname", "Nachname", "Adresse", "PLZ, Ort"];

    for (let i: number = 0; i < adressformular.length; i++) {

        let input: HTMLInputElement = <HTMLInputElement>document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("name", adressformular[i]);
        input.setAttribute("placeholder", adressformular[i]);
        let br: HTMLElement = <HTMLElement>document.createElement("br");
        formular.appendChild(input);
        formular.appendChild(br);
    }

    //Bestellen Button
    let bestellen: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    bestellen.setAttribute("type", "reset");
    bestellen.setAttribute("id", "bestellen");
    bestellen.innerHTML = "Jetzt bestellen!";
    formular.appendChild(bestellen);
    

}