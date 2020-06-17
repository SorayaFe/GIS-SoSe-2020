 namespace Aufgabe08 {

    let senden: HTMLElement = <HTMLElement>document.getElementById("senden");
    senden?.addEventListener("click", handleSenden);

    let formData: FormData;

    async function handleSenden(): Promise<void> {
        funktion(await funktion2());
    }

    async function funktion2(): Promise<string> {

     formData = new FormData(document.forms[0]);
     let url: string = "https://gispraktikum2020.herokuapp.com/";
     let query: URLSearchParams = new URLSearchParams(<any>formData);
     url = url + "?" + query.toString();
     return url;
    }

    async function funktion(url: RequestInfo): Promise<void> {
    
    let antwort: Response = await fetch(url);
    let kjll: string = await antwort.text();
    console.log(kjll);

    }
}