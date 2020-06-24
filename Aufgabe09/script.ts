namespace Aufgabe09 {

    let htmlButton: HTMLElement = <HTMLElement>document.getElementById("html");
    htmlButton?.addEventListener("click", handleHtmlButton);

    let jsonButton: HTMLElement = <HTMLElement>document.getElementById("json");
    jsonButton?.addEventListener("click", handleJsonButton);

    async function handleHtmlButton(): Promise<void>{

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        
        let url: string = "https://gispraktikum2020.herokuapp.com/";

        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwort2: string = await antwort.text();
        let antwortHTML: HTMLElement = <HTMLElement>document.getElementById("antwortHTML");
        antwortHTML.innerHTML = antwort2;
    }

    async function handleJsonButton(): Promise<void>{

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        
        let url: string = "https://gispraktikum2020.herokuapp.com/";

        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwort2: string = await antwort.json();
        console.log(antwort2);
    }
}