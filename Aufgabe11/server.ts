import * as Http from "http";
import * as url from "url";
import * as Mongo from "mongodb";

export namespace Aufgabe11 {

    interface Antwort {
        [type: string]: string | string[];
    }

    let antworten: Mongo.Collection;

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

        antworten = mongoClient.db("Aufgabe11").collection("Antworten");
        console.log("Database connection", antworten != undefined);
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        console.log("I hear voices!");

        if (_request.url) {

            let q: url.UrlWithParsedQuery = url.parse(_request.url, true);

            if (q.pathname == "/versenden") {

                let jsonString: string = JSON.stringify(q.query);
                _response.write(jsonString);

                storeAntworten(<Antwort>q.query);
            }

            else if (q.pathname == "/abfragen") {

                //tslint:disable-next-line: no-any
                let ergebnis: Antwort[] = await antworten.find().toArray();
                //let ausgabe: string = "";
                for (let i: number = 0; i < ergebnis.length; i++) {

                    let feld: Antwort = ergebnis[i];

                    for (let key in feld) {

                        _response.write(key + ": " + feld[key] + "<br/>");
                    }
                }

                //_response.write(JSON.stringify(await antworten.find().toArray()));
            }
        }
        _response.end();
    }

    function storeAntworten(_antwort: Antwort): void {

        antworten.insertOne(_antwort);
    }
}