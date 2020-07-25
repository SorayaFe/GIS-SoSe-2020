 namespace Abgabe {

    interface Bestellung {

        _id: string;
        Eis1: string;
        Eis2: string;
        Eis3: string;
        Eis4: string;
        Eis5: string;
        Soße: string;
        Topping1: string;
        Topping2: string;
        Topping3: string;
        Vorname: string;
        Nachname: string;
        Adresse: string;
        PLZOrt: string;
    }
    
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

        let test: Bestellung[] = JSON.parse(antwort2);
        console.log(test);

        let erledigt: HTMLCollectionOf<Element> = document.getElementsByClassName("erledigt");
        let erledigtArray: Element[] = Array.from(erledigt);

        for (let i: number = 0; i < erledigtArray.length; i++) {
            
            let erledigtButton: HTMLElement = <HTMLElement>erledigtArray[i];
            erledigtButton.addEventListener("click", handleErledigt);

            for (let i: number = 0; i < test.length; i++) {

                erledigtButton.setAttribute("bestellId", test[i]._id);
            }
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

        let geklickt: HTMLElement = <HTMLElement>_event.target;
        let bestellId: string = geklickt.getAttribute("bestellId")!;
        console.log(bestellId);

        let formData: FormData = new FormData(document.forms[0]);

        // tslint:disable-next-line: no-any
        let query: URLSearchParams = new URLSearchParams(<any>formData);

        let url: string = "https://gispraktikum2020.herokuapp.com";
        url = url + "/erledigt";
        url = url + "?" + query.toString();

        await fetch(url);
    }
}