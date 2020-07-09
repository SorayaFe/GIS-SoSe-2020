"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aufgabe11 = void 0;
const Http = require("http");
const url = require("url");
const Mongo = require("mongodb");
var Aufgabe11;
(function (Aufgabe11) {
    let antworten;
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
        antworten = mongoClient.db("Aufgabe11").collection("Antworten");
        console.log("Database connection", antworten != undefined);
    }
    async function handleRequest(_request, _response) {
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        console.log("I hear voices!");
        if (_request.url) {
            let q = url.parse(_request.url, true);
            if (q.pathname == "/versenden") {
                let jsonString = JSON.stringify(q.query);
                _response.write(jsonString);
                storeAntworten(q.query);
            }
            else if (q.pathname == "/abfragen") {
                let ergebnis = await antworten.find().toArray();
                for (let i = 0; i < ergebnis.length; i++) {
                    let feld = ergebnis[i];
                    for (let key in feld) {
                        _response.write(key + ": " + feld[key] + "<br/>");
                    }
                }
            }
            else if (q.pathname == "/leeren") {
                antworten.remove({});
                _response.write("Geleert");
            }
        }
        _response.end();
    }
    function storeAntworten(_antwort) {
        antworten.insertOne(_antwort);
    }
})(Aufgabe11 = exports.Aufgabe11 || (exports.Aufgabe11 = {}));
//# sourceMappingURL=server.js.map