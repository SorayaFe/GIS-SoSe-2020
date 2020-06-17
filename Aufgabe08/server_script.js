"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe08 = void 0;
//das module http wird (mit aller funktoinalität) geladen und wird einer variable zugewiesen
const Http = require("http");
var Aufgabe08;
(function (Aufgabe08) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    //server wird erstellt
    let server = Http.createServer();
    //server bekommt listeners
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //server wird gestartet
    server.listen(port);
    //function wird aufgerufen, sobald server läuft
    function handleListen() {
        //hinweis dass server läuft wird ausgegeben
        console.log("Listening");
    }
    //function wird aufgerufen wenn es eine request gibt
    function handleRequest(_request, _response) {
        //hinweis dass es eine request gibt wird ausgegeben
        console.log("I hear voices!");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        _response.write(_request.url);
        _response.end();
    }
})(Aufgabe08 = exports.Aufgabe08 || (exports.Aufgabe08 = {}));
//# sourceMappingURL=server_script.js.map