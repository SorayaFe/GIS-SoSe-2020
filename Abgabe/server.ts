import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";

//Servercode größtenteils übernommen aus den Praktikumsaufgaben
//also das, was Herr Dell'Oro in den Videos gezeigt hat

export namespace Abgabe {

    interface Bestellung {
        [type: string]: string | string[];
    }

    let bestellungen: Mongo.Collection;

    let databaseUrl: string = "mongodb+srv://Testuser:mfkpe12tp@soraya.qpkye.mongodb.net/Aufgabe11?retryWrites=true&w=majority";

    let port: number = Number(process.env.PORT);
    if (!port) {
        port = 8100;
    }


    function startServer(_port: number): void {

        console.log("Starting server");

        let server: Http.Server = Http.createServer();

        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);

        server.listen(_port);
    }

    function handleListen(): void {

        console.log("Listening");
    }

    startServer(port);
    connectToDatabase(databaseUrl);

    async function connectToDatabase(_url: string): Promise<void> {

        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();

        bestellungen = mongoClient.db("Abgabe").collection("Bestellungen");
        console.log("Database connection", bestellungen != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        console.log("I hear voices!");

        if (_request.url) {

            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);

            if (q.pathname == "/abschicken") {

                storeBestellungen(<Bestellung>q.query);
            }

            if (q.pathname == "/status") {

                bestellungen.updateMany({Status: "offen"}, {$set: {Status: "versandt"}});

                let ergebnis: Bestellung[] = await bestellungen.find().toArray();

                for (let i: number = 0; i < ergebnis.length; i++) {

                    let instanz: Bestellung = ergebnis[i];

                    _response.write("<div>");

                    for (let key in instanz) {

                        _response.write(key + ": " + instanz[key] + "<br/>");
                    }
                    _response.write("</div>");
                }
                _response.end();
            }

            if (q.pathname == "/loeschen") {

                bestellungen.remove({});
            }

            if (q.pathname == "/laden") {

                let ergebnis: Bestellung[] = await bestellungen.find().toArray();

                for (let i: number = 0; i < ergebnis.length; i++) {

                    let instanz: Bestellung = ergebnis[i];

                    _response.write("<div>");

                    for (let key in instanz) {

                        _response.write(key + ": " + instanz[key] + "<br/>");
                    }
                    _response.write("</div>");
                }
                _response.end();
            }

            function storeBestellungen(_bestellung: Bestellung): void {

                bestellungen.insertOne(_bestellung);
            }
        }
    }
}
