 namespace Abgabe {
    
    let deleteAll: HTMLElement = <HTMLElement>document.getElementById("deleteAll");
    let laden: HTMLElement = <HTMLElement>document.getElementById("laden");
    let status: HTMLElement = <HTMLElement>document.getElementById("status");

    let serverAntwort: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");

    deleteAll.addEventListener("click", handleDelete);
    laden.addEventListener("click", handleLaden);
    status.addEventListener("click", handleStatus);

    async function handleDelete(): Promise<void> {
        
        serverAntwort.innerHTML = "Alle Bestellungen gelöscht!";

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let url: string = "https://gispraktikum2020.herokuapp.com";
        url = url + "/loeschen";
        url = url + "?" + query.toString();

        await fetch(url);
    }

    async function handleLaden(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let url: string = "https://gispraktikum2020.herokuapp.com";
        url = url + "/laden";
        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwort2: string = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }

    async function handleStatus(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let url: string = "https://gispraktikum2020.herokuapp.com";
        url = url + "/status";
        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwort2: string = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }
}