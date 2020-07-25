 namespace Abgabe {
    
    let deleteAll: HTMLElement = <HTMLElement>document.getElementById("deleteAll");
    let laden: HTMLElement = <HTMLElement>document.getElementById("laden");
    let ladeErledigt: HTMLElement = <HTMLElement>document.getElementById("ladeErledigt");

    let serverAntwort: HTMLElement = <HTMLElement>document.getElementById("serverAntwort");

    deleteAll.addEventListener("click", handleDelete);
    laden.addEventListener("click", handleLaden);
    ladeErledigt.addEventListener("click", handleLadeErledigt);

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
        console.log(antwort2);

        let erledigt: HTMLCollectionOf<Element> = document.getElementsByClassName("erledigt");
        let erledigtArray: Element[] = Array.from(erledigt);

        for (let i: number = 0; i < erledigtArray.length; i++) {
            
            let erledigtButton: HTMLElement = <HTMLElement>erledigtArray[i];
            erledigtButton.addEventListener("click", handleErledigt);
        }
    }

    async function handleLadeErledigt(): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let url: string = "https://gispraktikum2020.herokuapp.com";
        url = url + "/ladeErledigt";
        url = url + "?" + query.toString();

        let antwort: Response = await fetch(url);
        let antwort2: string = await antwort.text();
        serverAntwort.innerHTML = antwort2;
    }

    async function handleErledigt(_event: Event): Promise<void> {

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let url: string = "https://gispraktikum2020.herokuapp.com";
        url = url + "/erledigt";
        url = url + "?" + query.toString();

        await fetch(url);
    }
}