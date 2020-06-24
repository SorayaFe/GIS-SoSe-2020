namespace Aufgabe09 {

    let htmlButton: HTMLElement = <HTMLElement>document.getElementById("html");
    htmlButton?.addEventListener("click", handleHtmlButton);

    let jsonButton: HTMLElement = <HTMLElement>document.getElementById("json");
    jsonButton?.addEventListener("click", handleJsonButton);

    async function handleHtmlButton(): Promise<void>{}

    async function handleJsonButton(): Promise<void>{}
}