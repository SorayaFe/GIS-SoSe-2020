namespace Aufgabe11 {
    
    let versenden: HTMLElement = <HTMLElement>document.getElementById("versenden");
    let abfragen: HTMLElement = <HTMLElement>document.getElementById("abfragen");
    let serverAntwort: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");

    versenden.addEventListener("click", handleVersenden);
    abfragen.addEventListener("click", handleAbfragen);

    async function handleVersenden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let url: string = "https://gispraktikum2020.herokuapp.com";
        url = url + "/versenden";
        url = url + "?" + query.toString();

        await fetch(url);

        let formular: HTMLFormElement = <HTMLFormElement>document.getElementById("formular");
        formular.reset();
    }

    async function handleAbfragen(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let url: string = "https://gispraktikum2020.herokuapp.com";
        url = url + "/abfragen";
        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwort2: string = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }
}