namespace Abgabe {

    export interface Optionen {
        _bild: string;
        _bildAlt: string;
        _name: string;
        _preis: number;
        _kategorie: string;
    }

    let test: HTMLElement = <HTMLElement>document.getElementById("test");
    test.addEventListener("click", handleTest);

    async function handleTest(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let url: string = "https://gispraktikum2020.herokuapp.com";
        url = url + "/test";
        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwort2: string = await antwort.json();
        console.log(antwort2);
    }
}