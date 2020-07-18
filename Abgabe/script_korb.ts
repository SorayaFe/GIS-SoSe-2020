namespace Abgabe {

    let bestellung: Option[] = JSON.parse(localStorage.getItem("Bestellung")!);
    let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular");

    for (let i: number = 0; i < bestellung.length; i++) {

        if (bestellung[i]._kategorie == "Eis") {

            let input: HTMLElement = <HTMLElement>document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", "Eis");
            input.setAttribute("value", "Eissorte: " + bestellung[i]._name);
            input.setAttribute("readonly", "true");
            let br: HTMLElement = <HTMLElement>document.createElement("br");
            formular.appendChild(input);
            formular.appendChild(br);
        }

        if (bestellung[i]._kategorie == "Topping") {

            let input: HTMLElement = <HTMLElement>document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", "Topping");
            input.setAttribute("value", "Topping: " + bestellung[i]._name);
            input.setAttribute("readonly", "true");
            let br: HTMLElement = <HTMLElement>document.createElement("br");
            formular.appendChild(input);
            formular.appendChild(br);
        }

        if (bestellung[i]._kategorie == "Behaelter") {

            let input: HTMLElement = <HTMLElement>document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", "Behaelter");
            input.setAttribute("value", "Behälter: " + bestellung[i]._name);
            input.setAttribute("readonly", "true");
            let br: HTMLElement = <HTMLElement>document.createElement("br");
            formular.appendChild(input);
            formular.appendChild(br);
        }
    }
}