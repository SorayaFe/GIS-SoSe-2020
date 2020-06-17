//das module http wird (mit aller funktoinalität) geladen und wird einer variable zugewiesen
import * as Http from "http";

export namespace Aufgabe08 {

    console.log("Starting server");
    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;
 
    //server wird erstellt
    let server: Http.Server = Http.createServer();

    //server bekommt listeners
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);

    //server wird gestartet
    server.listen(port);

    //function wird aufgerufen, sobald server läuft
    function handleListen(): void {

        //hinweis dass server läuft wird ausgegeben
        console.log("Listening");
    }

    //function wird aufgerufen wenn es eine request gibt
    function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
        
        //hinweis dass es eine request gibt wird ausgegeben
        console.log("I hear voices!");

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        _response.write(_request.url);

        _response.end();

    }
}
