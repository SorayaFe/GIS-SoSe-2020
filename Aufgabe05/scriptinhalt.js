"use strict";
var Aufgabe05;
(function (Aufgabe05) {
    const handkaese = { _name: "Handkäs mit Musik", _beschreibung: "Trifft garantiert jeden (Musik)Geschmack!", _preis: 1.49, _bild: "handkaese-rs.png", _bildAlt: "Handkäse", _verfuegbar: true };
    const whiskas = { _name: "Whiskas", _beschreibung: "Das Naschen bei der Katze hat ein Ende!", _preis: 1.49, _bild: "whiskas-rs.png", _bildAlt: "Whiskas", _verfuegbar: false };
    const hirn = { _name: "Hirn", _beschreibung: "Der ideale Snack für Studierende und Schüler!", _preis: 1.49, _bild: "hirn-rs.jpg", _bildAlt: "Hirn", _verfuegbar: true };
    const gulasch = { _name: "Gulasch", _beschreibung: "Schmeckt fast so gut, wie bei Oma zu Hause!", _preis: 1.49, _bild: "gulasch-rs.png", _bildAlt: "Gulasch", _verfuegbar: true };
    const kiwi = { _name: "Kiwi-Knoblauch", _beschreibung: "Sehr erfrischend: perfekt für den Sommer!", _preis: 1.49, _bild: "kiwi-rs.png", _bildAlt: "Kiwi-Knoblauch", _verfuegbar: true };
    const mett = { _name: "Mett", _beschreibung: "Auch wunderbar als Vesper zu genießen!", _preis: 1.49, _bild: "mett-rs.png", _bildAlt: "Mett", _verfuegbar: true };
    const ravioli = { _name: "Ravioli", _beschreibung: "Wenn es mal wieder schnell gehen muss!", _preis: 1.49, _bild: "ravioli-rs.png", _bildAlt: "Ravioli", _verfuegbar: true };
    const rollmops = { _name: "Rollmops-Aspirin", _beschreibung: "Gleich zwei Probleme auf einmal lösen!", _preis: 1.49, _bild: "rollmops-rs.jpg", _bildAlt: "Rollmops-Aspirin", _verfuegbar: true };
    const weissbier = { _name: "Weißbier", _beschreibung: "Der absolute Favorit der Deutschen als Schokolade!", _preis: 1.49, _bild: "weissbier-rs.png", _bildAlt: "Weißbier", _verfuegbar: true };
    const leberkaese = { _name: "Leberkäse", _beschreibung: "Statt im Wecken jetzt in der Schokolade!", _preis: 1.49, _bild: "leberkaese-rs.png", _bildAlt: "Leberkäse", _verfuegbar: true };
    const fisch = { _name: "Fischstäbchen", _beschreibung: "Unsere neueste Zusammenarbeit mit Iglo!", _preis: 1.49, _bild: "fisch-rs.png", _bildAlt: "Fischstäbchen", _verfuegbar: true };
    const doener = { _name: "Candlelight-Döner", _beschreibung: "Für ein romantisches Date zu Zweit!", _preis: 1.49, _bild: "doener-rs.png", _bildAlt: "Candlelight-Döner", _verfuegbar: true };
    const currywurst = { _name: "Currywurst", _beschreibung: "Sparen Sie sich den Gang zum Imbissstand!", _preis: 1.49, _bild: "currywurst-rs.png", _bildAlt: "Currywurst", _verfuegbar: true };
    const bierrav = { _name: "Bier-Ravioli", _beschreibung: "Eine Kombination unserer zweier Bestseller!", _preis: 1.49, _bild: "bierravioli-rs.png", _bildAlt: "Bier-Ravioli", _verfuegbar: true };
    Aufgabe05.rittersport = [handkaese, whiskas, hirn, gulasch, kiwi, mett, ravioli, rollmops, weissbier, leberkaese, fisch, doener, currywurst, bierrav];
    const avocado = { _name: "Avocado-Toast", _beschreibung: "Die ungesunde alternative zu Ihrem Frühstück!", _preis: 5.99, _bild: "avocado-oreo.png", _bildAlt: "Avocado-Toast", _verfuegbar: true };
    const cheeseburger = { _name: "Cheeseburger", _beschreibung: "Sparen Sie sich die Fahrt zu McDonald's!", _preis: 5.99, _bild: "cheeseburger-oreo.png", _bildAlt: "Cheeseburger", _verfuegbar: true };
    const fuckboy = { _name: "Fuckboy", _beschreibung: "Mit dem Geschmack von Axe und Fireball!", _preis: 5.99, _bild: "fuckboy-oreo.png", _bildAlt: "Fuckboy", _verfuegbar: true };
    const harambe = { _name: "Harambe", _beschreibung: "Mit dem Geschmack von Banane und Trauer!", _preis: 5.99, _bild: "harambe-oreo.png", _bildAlt: "Harambe", _verfuegbar: true };
    const lean = { _name: "Lean", _beschreibung: "Das Original mit Hustensaft und Sprite!", _preis: 5.99, _bild: "lean-oreo.png", _bildAlt: "Lean", _verfuegbar: true };
    const spaghetti = { _name: "Spaghetti", _beschreibung: "Knees weak, arms are heavy...Mom's Spaghetti!", _preis: 5.99, _bild: "spaghetto-oreo.png", _bildAlt: "Spaghetti", _verfuegbar: true };
    const taco = { _name: "Taco-Bell", _beschreibung: "Ihre Verdauung wird sich (nicht) bedanken!", _preis: 5.99, _bild: "tacobell-oreo.png", _bildAlt: "Tacobell", _verfuegbar: true };
    const tide = { _name: "Tide", _beschreibung: "Wir wissen, Sie wollten das schon immer probieren!", _preis: 5.99, _bild: "tide-oreo.png", _bildAlt: "Tide", _verfuegbar: true };
    const vaseline = { _name: "Vaseline", _beschreibung: "Mit doppelter Funktionalität als Labello-Alternative!", _preis: 5.99, _bild: "vaseline-oreo.png", _bildAlt: "Vaseline", _verfuegbar: true };
    const suburban = { _name: "Suburban-Mom", _beschreibung: "Mit extra viel Xanax, zur Beruhigung!", _preis: 5.99, _bild: "xanax-oreo.png", _bildAlt: "Suburban-Mom", _verfuegbar: true };
    Aufgabe05.oreo = [avocado, cheeseburger, fuckboy, harambe, lean, spaghetti, taco, tide, vaseline, suburban];
})(Aufgabe05 || (Aufgabe05 = {}));
//# sourceMappingURL=scriptinhalt.js.map