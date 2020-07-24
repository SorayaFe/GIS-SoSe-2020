"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abgabe = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
//Servercode größtenteils übernommen aus den Praktikumsaufgaben
//also das, was Herr Dell'Oro in den Videos gezeigt hat
var Abgabe;
(function (Abgabe) {
    let bestellungen;
    let databaseUrl = "mongodb+srv://Testuser:mfkpe12tp@soraya.qpkye.mongodb.net/Aufgabe11?retryWrites=true&w=majority";
    let port = Number(process.env.PORT);
    if (!port) {
        port = 8100;
    }
    function startServer(_port) {
        console.log("Starting server");
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    function handleListen() {
        console.log("Listening");
    }
    startServer(port);
    connectToDatabase(databaseUrl);
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        bestellungen = mongoClient.db("Abgabe").collection("Bestellungen");
        console.log("Database connection", bestellungen != undefined);
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log("I hear voices!");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            if (q.pathname == "/abschicken") {
                storeBestellungen(q.query);
            }
            if (q.pathname == "/loeschen") {
                bestellungen.remove({});
            }
            if (q.pathname == "/laden") {
                let ergebnis = await bestellungen.find().toArray();
                for (let i = 0; i < ergebnis.length; i++) {
                    let instanz = ergebnis[i];
                    _response.write("<div>");
                    for (let key in instanz) {
                        _response.write(key + ": " + instanz[key] + "<br/>");
                    }
                    _response.write("<button class='erledigt'>Erledigt</button>");
                    _response.write("</div>");
                }
                _response.end();
            }
            function storeBestellungen(_bestellung) {
                bestellungen.insertOne(_bestellung);
            }
        }
    }
})(Abgabe = exports.Abgabe || (exports.Abgabe = {}));
//# sourceMappingURL=server.js.map