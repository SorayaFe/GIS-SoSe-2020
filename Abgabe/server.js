"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Abgabe = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
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
        bestellungen = mongoClient.db("Aufgabe11").collection("bestellungen");
        console.log("Database connection", bestellungen != undefined);
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log("I hear voices!");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            if (q.pathname == "/abschicken") {
                storebestellungen(q.query);
            }
            /*else if (q.pathname == "/abfragen") {

                let ergebnis: Bestellung[] = await bestellungen.find().toArray();
             
                for (let i: number = 0; i < ergebnis.length; i++) {

                    let feld: Bestellung = ergebnis[i];

                    for (let key in feld) {

                        _response.write(key + ": " + feld[key] + "<br/>");
                    }
                }
            }

            else if (q.pathname == "/leeren") {

                bestellungen.remove({});
            }
        }*/
            _response.end();
        }
        function storebestellungen(_bestellung) {
            bestellungen.insertOne(_bestellung);
        }
    }
})(Abgabe = exports.Abgabe || (exports.Abgabe = {}));
//# sourceMappingURL=server.js.map