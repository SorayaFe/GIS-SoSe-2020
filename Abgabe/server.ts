import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";

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

        bestellungen = mongoClient.db("Aufgabe11").collection("bestellungen");
        console.log("Database connection", bestellungen != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        console.log("I hear voices!");

        if (_request.url) {

            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);

            if (q.pathname == "/abschicken") {

                storebestellungen(<Bestellung>q.query);
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

        function storebestellungen(_bestellung: Bestellung): void {

            bestellungen.insertOne(_bestellung);
        }
    }
}