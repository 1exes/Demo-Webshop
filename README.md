# Demo-Webshop – End-to-End-Tests mit Cypress

**Aufgabenstellung:**  
Du sollst eigenständig automatisierte End-to-End-Tests für den [Demo Webshop von Tricentis](https://demowebshop.tricentis.com/) mit Cypress schreiben.  
Arbeite die Testfälle Schritt für Schritt ab – sie sind so aufgebaut, dass du sie mit etwas Ausprobieren und Nachlesen selbstständig lösen kannst.  
Wenn du nicht weiterkommst, recherchiere zuerst selbst in der [Cypress Dokumentation](https://docs.cypress.io/) oder frage gezielt nach Hilfe.  
Am Ende solltest du alle Testfälle eigenständig umgesetzt und verstanden haben.

---

## 1. Voraussetzungen

- **Node.js** und **npm** müssen installiert sein.  
  Prüfe dies im Terminal mit:
  ```bash
  node -v
  npm -v
  ```

---

## 2. Cypress installieren

Wechsle ins Projektverzeichnis (z.B. `Demo-Webshop`) und führe aus:
```bash
npm init -y                 # Falls noch keine package.json existiert
npm install cypress --save-dev
```

---

## 3. Cypress öffnen & Grundstruktur anlegen

Starte Cypress mit:
```bash
npx cypress open
```
Dadurch wird das Verzeichnis `cypress/` erstellt und das Cypress Test-UI geöffnet.

---

## 4. Beispiel-Test erstellen

Lege im Verzeichnis `cypress/e2e` eine Datei z.B. `demo.cy.js` an mit folgendem Inhalt:
```js
describe('Demo-Webshop Startseite', () => {
  it('sollte die Startseite laden', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.contains('Demo Web Shop');
  });
});
```

---

## 5. Tests ausführen

- Über das geöffnete Cypress-Fenster kannst du Tests per Klick starten.
- Alternativ im Headless-Modus per Konsole:
  ```bash
  npx cypress run
  ```

---

## 6. Nützliche Cypress-Kommandos

- `cy.visit('URL')` – Seite besuchen
- `cy.get('selector')` – Element ansprechen
- `cy.contains('Text')` – Element mit Text finden
- `cy.click()` – Element klicken
- `cy.type('Text')` – In ein Eingabefeld schreiben
- `cy.should('contain', 'Text')` – Erwartung prüfen

---

## 7. Tipps

- [Cypress Dokumentation](https://docs.cypress.io/)
- Cypress kann Screenshots und Videos der Testläufe speichern.
- Tests können über CI/CD laufen, z.B. mit GitHub Actions.
- Schreibe jeden Testfall als eigene Aufgabe und kommentiere deinen Code!

---

## 8. Aufgaben: 100 Testfälle – von leicht bis schwer, gemischt pro Level

Die Testfälle sind in 7 Level eingeteilt.  
**Wichtig:** In jedem Level gibt es einfache und schwerere Aufgaben, damit du dich jede Woche mit neuen Herausforderungen beschäftigst.  
**Plane für jedes Level mindestens 1 Woche ein!**

### **Level 1: Einstieg & Navigation**
1. Startseite lädt und zeigt "Demo Web Shop"
2. Logo ist sichtbar
3. Menüpunkt "Books" ist sichtbar
4. Menüpunkt "Computers" ist sichtbar
5. Menüpunkt "Electronics" ist sichtbar
6. Menüpunkt "Apparel & Shoes" ist sichtbar
7. Menüpunkt "Digital downloads" ist sichtbar
8. Menüpunkt "Jewelry" ist sichtbar
9. Menüpunkt "Gift Cards" ist sichtbar
10. Suchfeld ist sichtbar
11. Klicke auf das Logo und prüfe Rückkehr zur Startseite
12. Navigation mit der Tastatur testen (Tab, Enter)
13. Footer-Links funktionieren
14. 404-Fehlerseite testen
15. Ladezeit der Startseite messen

### **Level 2: Navigation & Suche**
16. Klicke auf "Books" und prüfe Überschrift
17. Klicke auf "Computers" und prüfe Überschrift
18. Klicke auf "Electronics" und prüfe Überschrift
19. Klicke auf "Apparel & Shoes" und prüfe Überschrift
20. Klicke auf "Digital downloads" und prüfe Überschrift
21. Klicke auf "Jewelry" und prüfe Überschrift
22. Klicke auf "Gift Cards" und prüfe Überschrift
23. Suche nach "book" und prüfe Ergebnisse
24. Suche nach "computer" und prüfe Ergebnisse
25. Suche nach nicht existierendem Produkt
26. Suche mit Sonderzeichen
27. Alle Bilder auf der Startseite laden korrekt
28. Cookies werden gesetzt
29. Sprache umstellen (falls möglich)
30. Barrierefreiheit prüfen (z.B. mit Plugin)

### **Level 3: Produktdetails & Filter**
31. Öffne eine Produktdetailseite aus "Books" und führe folgende Prüfungen und Aufgaben durch (jeden Punkt im Testcode kommentieren und abarbeiten!):

    **a) Übersicht öffnen und prüfen**
    - Öffne die "Books"-Übersichtsseite.
    - Prüfe, ob die Seite vollständig geladen ist (Header, Footer, Produktliste sichtbar).
    - Dokumentiere die URL der Übersichtsseite im Testcode (als Kommentar).
    - Kontrollfrage: Sind alle erwarteten Kategorien und Filter sichtbar?

    **b) Buch auswählen und prüfen**
    - Wähle ein beliebiges Buch aus (z.B. das erste sichtbare Buch).
    - Dokumentiere den Namen und Preis des gewählten Buchs als Kommentar.
    - Prüfe, ob das Buch ein Produktbild und einen Titel hat.
    - Kontrollfrage: Ist das Buch eindeutig als solches erkennbar?

    **c) Produktdetailseite prüfen**
    - Öffne die Produktdetailseite des gewählten Buchs.
    - Prüfe, ob die URL korrekt ist (enthält z.B. "/books/").
    - Dokumentiere die URL im Testcode.
    - Kontrollfrage: Wird der richtige Buchtitel angezeigt?

    **d) Produktbilder prüfen**
    - Zähle die Gesamtanzahl der Bilder (z.B. cy.get('.gallery img').should('have.length', X)).
    - Für jedes Bild:
        - Prüfe, ob das Bild sichtbar ist (cy.get('img').should('be.visible')).
        - Prüfe, ob das Bild geladen wurde (naturalWidth > 0).
        - Prüfe, ob ein Alt-Text gesetzt ist (cy.get('img').should('have.attr', 'alt')).
        - Dokumentiere für jedes Bild: Dateiname, Alt-Text, Sichtbarkeit, Ladezustand.
    - Kontrollfrage: Gibt es Bilder ohne Alt-Text, mit leerem Alt-Text oder mit Platzhaltergrafik?

    **e) Bildauflösung und Qualität prüfen**
    - Ermittle für jedes Bild die tatsächliche Größe (z.B. naturalWidth, naturalHeight).
    - Dokumentiere die Werte im Testcode als Kommentar.
    - Prüfe, ob mindestens ein Bild eine Auflösung > 300px Breite hat.
    - Kontrollfrage: Sind alle Bilder scharf und ausreichend groß?

    **f) Thumbnails/Vorschaubilder prüfen**
    - Klicke auf jedes Vorschaubild und prüfe, ob das große Bild wechselt.
    - Dokumentiere, welches Thumbnail welches Hauptbild anzeigt.
    - Kontrollfrage: Funktioniert der Wechsel bei jedem Thumbnail?

    **g) Zoomfunktion prüfen**
    - Suche nach Zoom-Icon, Lupe, Mouseover-Vergrößerung oder "Zoom"-Button.
    - Wenn ja: Teste, ob die Zoomfunktion das Bild vergrößert (z.B. Lightbox, Overlay, Zoom-in).
    - Wenn nein: Schreibe im Testcode einen Kommentar "Keine Zoomfunktion vorhanden".
    - Kontrollfrage: Ist die Zoomfunktion intuitiv bedienbar?

    **h) Lightbox/Overlay prüfen**
    - Klicke auf das Hauptbild und prüfe, ob ein Overlay/Lightbox erscheint.
    - Prüfe, ob das Bild in der Lightbox größer angezeigt wird.
    - Prüfe, ob man in der Lightbox zwischen mehreren Bildern navigieren kann (Next/Prev).
    - Dokumentiere, falls keine Lightbox vorhanden ist.
    - Kontrollfrage: Funktioniert die Navigation in der Lightbox fehlerfrei?

    **i) Barrierefreiheit der Bilder prüfen**
    - Prüfe, ob alle Bilder einen sinnvollen Alt-Text haben (keine generischen Texte wie "image" oder "pic").
    - Prüfe, ob die Bilder per Tastatur erreichbar sind (Tab, Enter).
    - Kontrollfrage: Sind die Bilder für Screenreader zugänglich?

    **j) Kontrollfragen**
    - Sind alle Bilder thematisch passend zum Produkt?
    - Gibt es fehlerhafte, leere oder kaputte Bilder?
    - Sind die Bilder scharf und gut erkennbar?
    - Gibt es Bilder ohne Alt-Text oder mit falschem Alt-Text?
    - Funktionieren alle Interaktionen (Klick, Zoom, Lightbox, Thumbnail-Wechsel) wie erwartet?

    **k) Bonus: JavaScript deaktiviert**
    - Prüfe, ob die Seite auch mit deaktiviertem JavaScript die Bilder anzeigt (optional, als Kommentar dokumentieren).
    - Dokumentiere, ob und wie viele Bilder ohne JavaScript sichtbar sind.

    **l) Dokumentation und Fehlerbehandlung**
    - Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Zoomfunktion fehlt", "Bild 2 ohne Alt-Text", "Thumbnail-Wechsel fehlerhaft").
    - Notiere für jeden Prüfschritt, ob er bestanden wurde (z.B. // OK oder // FEHLER: ...).

    **m) Fazit und Verbesserungsvorschläge**
    - Schreibe am Ende des Tests ein kurzes Fazit als Kommentar:
        - "Alle Bilder korrekt angezeigt und geprüft" ODER "Folgende Probleme gefunden: ...".
        - Füge ggf. Verbesserungsvorschläge hinzu (z.B. "Alt-Texte optimieren", "Zoomfunktion ergänzen").

    > **Hinweis:** Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll möglichst viele Aspekte der Produktbilder und deren Darstellung überprüfen, dokumentieren und Verbesserungspotenzial erkennen.
32. Prüfe, ob das Produktbild nach Klick auf das Vorschaubild in einer Lightbox angezeigt wird und führe folgende Aufgaben durch:

    **a) Produktdetailseite mit Thumbnails öffnen**
    - Öffne eine Produktdetailseite mit mehreren Vorschaubildern (Thumbnails).
    - Dokumentiere die URL und die Anzahl der Vorschaubilder im Testcode (als Kommentar).

    **b) Vorschaubild klicken und Wechsel prüfen**
    - Klicke auf ein Vorschaubild und prüfe, ob das große Bild wechselt.
    - Dokumentiere, welches Thumbnail welches Hauptbild anzeigt.

    **c) Lightbox/Overlay prüfen**
    - Prüfe, ob beim Klick auf das große Bild eine Lightbox oder ein Overlay erscheint.
    - Teste, ob das Bild in der Lightbox größer angezeigt wird.
    - Prüfe, ob man zwischen mehreren Bildern navigieren kann (Next/Prev-Button).
    - Dokumentiere, falls keine Lightbox vorhanden ist (Kommentar im Test).

    **d) Kontrollfragen**
    - Funktioniert die Navigation zwischen den Bildern reibungslos?
    - Gibt es Darstellungsfehler oder bleibt ein Bild hängen?
    - Sind alle Bilder in der Lightbox scharf und vollständig sichtbar?

    **e) Dokumentation und Abschluss**
    - Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Lightbox fehlt", "Navigation fehlerhaft").
    - Notiere für jeden Prüfschritt, ob er bestanden wurde (z.B. // OK oder // FEHLER: ...).
    - Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Lightbox und Navigation funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".

    > **Hinweis:** Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
33. Prüfe, ob die Produktbeschreibung HTML-Elemente korrekt rendert und führe folgende Aufgaben durch:

    **a) Produktdetailseite mit Beschreibung öffnen**
    - Öffne eine Produktdetailseite mit längerer Beschreibung.
    - Dokumentiere die URL und die Länge der Beschreibung im Testcode (als Kommentar).

    **b) HTML-Elemente prüfen**
    - Prüfe, ob folgende HTML-Elemente korrekt angezeigt werden:
        - Listen (ul, ol, li)
        - Links (a)
        - Fett/kursiv/unterstrichen (b, strong, i, em, u)
        - Überschriften (h1–h6)
    - Dokumentiere für jedes Element, ob es korrekt angezeigt wird (als Kommentar).

    **c) Externe Links prüfen**
    - Prüfe, ob externe Links in einem neuen Tab geöffnet werden (target="_blank").

    **d) Kontrollfragen**
    - Gibt es fehlerhafte oder falsch formatierte Elemente?
    - Sind alle Links klickbar und führen zur richtigen Seite?
    - Werden Listen und Formatierungen wie erwartet angezeigt?

    **e) Dokumentation und Abschluss**
    - Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Link öffnet nicht im neuen Tab", "Liste nicht korrekt gerendert").
    - Notiere für jeden Prüfschritt, ob er bestanden wurde (z.B. // OK oder // FEHLER: ...).
    - Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Alle HTML-Elemente korrekt gerendert" ODER "Folgende Probleme gefunden: ...".

    > **Hinweis:** Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
34. Prüfe, ob der Preis korrekt angezeigt wird und sich bei Auswahl verschiedener Produktvarianten ändert. Führe folgende Aufgaben durch:
    **a) Produktdetailseite mit Varianten öffnen**
    - Öffne eine Produktdetailseite, die mehrere Varianten bietet (z.B. Hardcover/Taschenbuch, verschiedene Farben oder Größen).
    - Dokumentiere die gewählte Produktseite und die verfügbaren Varianten im Testcode (als Kommentar).

    **b) Preis für jede Variante prüfen**
    - Wähle nacheinander jede Variante aus (z.B. Hardcover, Taschenbuch, verschiedene Farben/Größen).
    - Prüfe, ob der angezeigte Preis sich jeweils korrekt ändert.
    - Dokumentiere für jede Variante den angezeigten Preis im Testcode (als Kommentar).
    - Prüfe, ob Rabatte oder Sonderpreise korrekt angezeigt werden (z.B. durchgestrichener Preis, Rabatt-Badge).
    - Dokumentiere Rabatte und Sonderpreise im Testcode.

    **c) Preisänderung bei Wechsel testen**
    - Wechsle mehrfach zwischen den Varianten und prüfe, ob der Preis immer korrekt aktualisiert wird.
    - Prüfe, ob es Darstellungsfehler, Verzögerungen oder falsche Preise gibt.
    - Dokumentiere Auffälligkeiten und Fehler im Testcode.

    **d) Kontrollfragen**
    - Wird der Preis bei jeder Variante korrekt angezeigt?
    - Bleibt der Preis nach Wechsel immer aktuell?
    - Werden Rabatte korrekt berechnet und angezeigt?
    - Gibt es Varianten ohne Preis oder mit fehlerhafter Anzeige?

    **e) Dokumentation und Abschluss**
    - Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Preis wird nicht aktualisiert", "Variante ohne Preis").
    - Notiere für jeden Prüfschritt, ob er bestanden wurde (z.B. // OK oder // FEHLER: ...).
    - Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Preis und Varianten funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".

    > **Hinweis:** Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
35. Prüfe, ob Bewertungen angezeigt werden und die Sortierung funktioniert. Führe folgende Aufgaben durch:
    a) Öffne eine Produktdetailseite mit vorhandenen Bewertungen.
    b) Prüfe, ob die Bewertungen nach "Hilfreichste" und "Neueste" sortiert werden können.
        - Teste beide Sortieroptionen und prüfe, ob sich die Reihenfolge der Bewertungen sichtbar ändert.
    c) Versuche, mehrfach für das gleiche Produkt zu bewerten. Prüfe, ob dies verhindert wird (z.B. durch Fehlermeldung oder Deaktivierung).
    d) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Sind alle Bewertungen sichtbar und vollständig?
        - Funktioniert die Sortierung korrekt und nachvollziehbar?
        - Wird eine Mehrfachbewertung zuverlässig verhindert?
    e) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Sortierung funktioniert nicht", "Mehrfachbewertung möglich").
    f) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Bewertungen und Sortierung korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
36. Füge zwei verschiedene Produkte zum Vergleich hinzu und führe folgende Aufgaben durch:
    a) Wähle zwei unterschiedliche Produkte aus (z.B. aus "Books" und "Computers") und füge sie zur Vergleichsliste hinzu.
    b) Öffne die Vergleichsseite und prüfe, ob beide Produkte korrekt angezeigt werden.
    c) Vergleiche die Produktdaten (z.B. Name, Preis, Eigenschaften) und dokumentiere die Unterschiede im Test (als Kommentar).
    d) Entferne eines der Produkte aus der Vergleichsliste und prüfe, ob die Liste korrekt aktualisiert wird.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Produktdaten korrekt angezeigt und verglichen?
        - Bleibt nach Entfernen eines Produkts nur das andere übrig?
        - Gibt es Darstellungsfehler oder bleibt ein Produkt "hängen"?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Vergleichsliste aktualisiert sich nicht", "Produkt bleibt sichtbar").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Vergleichsfunktion funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
37. Teile ein Produkt auf Social Media und führe folgende Aufgaben durch:
    a) Öffne eine Produktdetailseite und suche nach Social-Media-Buttons (z.B. Facebook, Twitter).
    b) Klicke auf einen Social-Media-Button und prüfe, ob ein Teilen-Fenster oder Popup erscheint.
    c) Prüfe, ob die Produktdaten (Name, Bild, Link) korrekt im Teilen-Fenster übernommen werden.
    d) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Sind alle relevanten Produktdaten im Teilen-Fenster sichtbar?
        - Wird das Teilen-Fenster korrekt geöffnet und wieder geschlossen?
        - Gibt es Social-Media-Buttons, die nicht funktionieren?
    e) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Produktdaten fehlen im Share-Fenster", "Button ohne Funktion").
    f) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Teilen-Funktion funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Es muss kein echter Share durchgeführt werden! Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
38. Filtere "Books" nach einem Preisbereich und nach Kategorie und führe folgende Aufgaben durch:
    a) Öffne die "Books"-Übersichtsseite und wende einen Preisfilter (z.B. 10–20 €) an.
    b) Wähle zusätzlich eine Kategorie (z.B. "Science") aus und prüfe, ob nur passende Produkte angezeigt werden.
    c) Setze die Filter zurück und prüfe, ob wieder alle Produkte angezeigt werden.
    d) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden nach Filterung wirklich nur passende Produkte angezeigt?
        - Funktioniert das Zurücksetzen der Filter zuverlässig?
        - Gibt es Produkte, die trotz Filter angezeigt werden sollten, aber fehlen?
    e) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Filter lässt sich nicht zurücksetzen", "Produkt trotz Filter sichtbar").
    f) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Filterfunktion funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
39. Sortiere "Books" nach Preis aufsteigend und führe folgende Aufgaben durch:
    a) Öffne die "Books"-Übersichtsseite und sortiere die Produkte nach Preis aufsteigend.
    b) Prüfe, ob die Sortierung korrekt ist, auch bei Preisgleichstand und Produkten ohne Preis.
    c) Lade die Seite neu und prüfe, ob die Sortierung erhalten bleibt.
    d) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Sind alle Produkte korrekt nach Preis sortiert?
        - Werden Produkte ohne Preis korrekt einsortiert oder ans Ende gestellt?
        - Bleibt die Sortierung nach Neuladen erhalten?
    e) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Sortierung geht nach Reload verloren", "Preisgleichstand falsch einsortiert").
    f) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Sortierung nach Preis funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
40. Sortiere "Books" nach Name A-Z und führe folgende Aufgaben durch:
    a) Öffne die "Books"-Übersichtsseite und sortiere die Produkte nach Name (A-Z).
    b) Prüfe, ob Produkte mit Sonderzeichen, Umlauten und Zahlen korrekt einsortiert werden.
    c) Teste gezielt Produkte mit Zahlen im Namen und prüfe deren Position in der Sortierung.
    d) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Produkte alphabetisch korrekt sortiert?
        - Gibt es Probleme mit Umlauten, Sonderzeichen oder Zahlen?
        - Bleibt die Sortierung nach Neuladen erhalten?
    e) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Umlaute falsch sortiert", "Zahlen am Anfang/Ende").
    f) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Sortierung nach Name funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
41. Filtere "Computers" nach Hersteller und Preis und führe folgende Aufgaben durch:
    a) Öffne die "Computers"-Übersichtsseite und wende einen Hersteller-Filter an (z.B. "Apple").
    b) Wende zusätzlich einen Preisfilter an (z.B. 500–1000 €) und prüfe, ob nur passende Produkte angezeigt werden.
    c) Prüfe, ob keine Produkte doppelt erscheinen und die Filterkombination korrekt funktioniert.
    d) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden nach Filterung wirklich nur passende Produkte angezeigt?
        - Gibt es Produkte, die doppelt erscheinen?
        - Funktioniert das Zurücksetzen der Filter zuverlässig?
    e) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Produkt doppelt", "Filterkombination fehlerhaft").
    f) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Filterkombination funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
42. Sortiere "Books" nach Preis absteigend und führe folgende Aufgaben durch:
    a) Öffne die "Books"-Übersichtsseite und sortiere die Produkte nach Preis absteigend.
    b) Prüfe, ob Produkte mit gleichem Preis korrekt gruppiert werden.
    c) Entferne ein Produkt und prüfe, ob die Sortierung erhalten bleibt.
    d) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Sind alle Produkte korrekt nach Preis absteigend sortiert?
        - Werden Produkte mit gleichem Preis korrekt gruppiert?
        - Bleibt die Sortierung nach Entfernen eines Produkts erhalten?
    e) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Sortierung geht verloren", "Preisgleichstand falsch gruppiert").
    f) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Sortierung nach Preis absteigend funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
43. Versuche, ein Produkt mit Menge 0 oder negativem Wert in den Warenkorb zu legen und führe folgende Aufgaben durch:
    a) Öffne eine Produktdetailseite und setze die Menge auf 0, dann auf einen negativen Wert.
    b) Versuche, das Produkt in den Warenkorb zu legen und prüfe, ob eine Fehlermeldung erscheint.
    c) Prüfe, ob kein Produkt hinzugefügt wird und die Warenkorbanzeige unverändert bleibt.
    d) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird für beide Fälle (0 und negativ) eine Fehlermeldung angezeigt?
        - Kann trotzdem ein Produkt in den Warenkorb gelangen?
        - Bleibt die Warenkorbanzeige korrekt?
    e) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Produkt trotz Fehler im Warenkorb", "Fehlermeldung fehlt").
    f) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Fehlermeldungen und Validierung funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
44. Versuche, ein Produkt mit einer unrealistisch hohen Menge (z.B. 9999) in den Warenkorb zu legen und führe folgende Aufgaben durch:
    a) Öffne eine Produktdetailseite und setze die Menge auf 9999 (und ggf. weitere hohe Werte).
    b) Versuche, das Produkt in den Warenkorb zu legen und prüfe, ob eine Begrenzung greift und eine Fehlermeldung erscheint.
    c) Prüfe, ob die Menge automatisch korrigiert oder zurückgesetzt wird.
    d) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird für alle hohen Werte eine Begrenzung/Fehlermeldung angezeigt?
        - Bleibt die Warenkorbanzeige korrekt?
        - Kann trotzdem ein Produkt mit zu hoher Menge hinzugefügt werden?
    e) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Keine Begrenzung", "Produkt mit 9999 im Warenkorb").
    f) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Mengenbegrenzung und Fehlermeldungen funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
45. Entferne ein Produkt aus der Wunschliste und führe folgende Aufgaben durch:
    a) Öffne die Wunschliste mit mindestens einem Produkt.
    b) Entferne ein Produkt und prüfe, ob die Wunschliste sofort aktualisiert wird.
    c) Prüfe, ob eine entsprechende Meldung angezeigt wird, wenn die Wunschliste leer ist.
    d) Prüfe, ob keine Geistereinträge (unsichtbare oder "hängende" Produkte) verbleiben.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Anzeige nach Entfernen sofort aktualisiert?
        - Erscheint die Leermeldung korrekt?
        - Bleibt die Wunschliste wirklich leer?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Geistereintrag bleibt", "Leermeldung fehlt").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Wunschliste funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

### **Level 4: Warenkorb & Wunschliste**
46. Lege mehrere Produkte mit unterschiedlichen Varianten (z.B. Größe, Farbe) in den Warenkorb und führe folgende Aufgaben durch:

    **a) Produkte und Varianten auswählen**
    - Wähle mindestens zwei Produkte mit unterschiedlichen Varianten (z.B. verschiedene Farben/Größen) aus.
    - Lege beide Produkte in den Warenkorb.
    - Dokumentiere die gewählten Varianten und Produkte im Testcode (als Kommentar).

    **b) Anzeige im Warenkorb prüfen**
    - Prüfe, ob im Warenkorb alle Varianten korrekt angezeigt werden (Farbe, Größe, Produktbild, Produktname).
    - Prüfe, ob die Warenkorbsumme stimmt.
    - Prüfe, ob die Varianten auch nach Neuladen der Seite erhalten bleiben.
    - Dokumentiere die Anzeige und die Warenkorbsumme als Kommentar.

    **c) Kontrollfragen**
    - Werden alle Varianten korrekt angezeigt und unterschieden?
    - Stimmen die Produktbilder und -namen zu den Varianten?
    - Bleiben die Varianten nach Neuladen erhalten?

    **d) Dokumentation und Abschluss**
    - Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Variante fehlt", "Bild falsch").
    - Notiere für jeden Prüfschritt, ob er bestanden wurde (z.B. // OK oder // FEHLER: ...).
    - Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Varianten und Warenkorb funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".

    > **Hinweis:** Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
47. Füge ein Produkt zur Wunschliste hinzu, logge dich aus und wieder ein und führe folgende Aufgaben durch:

    **a) Produkt zur Wunschliste hinzufügen**
    - Füge ein Produkt zur Wunschliste hinzu.
    - Prüfe, ob das Produkt korrekt angezeigt wird.
    - Dokumentiere das gewählte Produkt im Testcode (als Kommentar).

    **b) Logout und erneuter Login**
    - Logge dich aus und wieder ein.
    - Prüfe, ob das Produkt weiterhin in der Wunschliste vorhanden ist.

    **c) Synchronisation zwischen Geräten prüfen**
    - Prüfe, ob die Wunschliste zwischen Geräten synchronisiert wird (z.B. durch Login auf anderem Gerät/Browser).

    **d) Anzeige und Funktion prüfen**
    - Prüfe, ob die Anzahl der Produkte in der Wunschliste korrekt angezeigt wird.
    - Prüfe, ob das Hinzufügen/Entfernen ohne Neuladen funktioniert.

    **e) Kontrollfragen**
    - Bleibt das Produkt nach Logout/Login erhalten?
    - Wird die Anzahl korrekt angezeigt?
    - Funktioniert das Hinzufügen/Entfernen ohne Neuladen?

    **f) Dokumentation und Abschluss**
    - Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Wunschliste leer nach Login", "Anzahl falsch").
    - Notiere für jeden Prüfschritt, ob er bestanden wurde (z.B. // OK oder // FEHLER: ...).
    - Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Wunschliste funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".

    > **Hinweis:** Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
48. Erhöhe und verringere die Anzahl eines Produkts im Warenkorb und führe folgende Aufgaben durch:
    a) Lege ein Produkt in den Warenkorb und erhöhe die Menge schrittweise (z.B. von 1 auf 5).
    b) Verringere die Menge wieder (z.B. von 5 auf 1 und dann auf 0).
    c) Prüfe, ob der Gesamtpreis dynamisch angepasst wird und ob eine Mindest-/Maximalmenge eingehalten wird.
    d) Prüfe, ob eine Warnung erscheint, wenn die Grenze erreicht ist (z.B. Mindestmenge 1, Maximalmenge 10).
    e) Prüfe, ob die Änderung ohne Neuladen übernommen wird und ob die Anzeige im Header (z.B. Warenkorb-Icon) stimmt.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird der Preis bei jeder Änderung korrekt angepasst?
        - Erscheint eine Warnung bei ungültigen Mengen?
        - Bleibt der Warenkorb nach Setzen auf 0 leer?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Preis wird nicht angepasst", "Warnung fehlt").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Mengenänderung und Preisberechnung funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
49. Öffne die Warenkorb-Seite in mehreren Browser-Tabs und führe folgende Aufgaben durch:
    a) Öffne die Warenkorb-Seite in mindestens zwei Browser-Tabs.
    b) Ändere die Menge eines Produkts in einem Tab und prüfe, ob die Änderung im anderen Tab übernommen wird (Synchronisation).
    c) Prüfe, ob Konflikte (z.B. gleichzeitige Änderungen) korrekt gelöst werden und ob Fehlermeldungen erscheinen.
    d) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Änderung in allen Tabs synchron übernommen?
        - Gibt es Fehlermeldungen oder Konflikte?
        - Sind die Summen in allen Tabs identisch?
    e) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Synchronisation fehlerhaft", "Summe unterschiedlich").
    f) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Synchronisation und Konfliktlösung funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
50. Entferne ein Produkt aus dem Warenkorb und führe folgende Aufgaben durch:
    a) Lege mehrere Produkte in den Warenkorb.
    b) Entferne ein Produkt und prüfe, ob die Seite ohne Neuladen aktualisiert wird (AJAX).
    c) Prüfe, ob die Warenkorbsumme stimmt und das entfernte Produkt wirklich nicht mehr angezeigt wird.
    d) Prüfe, ob nach Entfernen das Warenkorb-Icon und die Produktanzahl korrekt sind.
    e) Prüfe, ob kein "leerer Warenkorb" angezeigt wird, wenn noch Produkte vorhanden sind.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Anzeige nach Entfernen sofort aktualisiert?
        - Stimmen die Summen und die Produktanzahl?
        - Bleibt der Warenkorb korrekt gefüllt?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Produkt bleibt sichtbar", "Summe falsch").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Entfernen und Aktualisierung funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
51. Ändere die Menge eines Produkts im Warenkorb auf einen ungültigen Wert und führe folgende Aufgaben durch:
    a) Lege ein Produkt in den Warenkorb.
    b) Ändere die Menge auf einen ungültigen Wert (z.B. Buchstaben, Sonderzeichen, Dezimalzahlen, sehr große oder sehr kleine Werte).
    c) Prüfe, ob eine Fehlermeldung erscheint und ob die Menge automatisch korrigiert oder zurückgesetzt wird.
    d) Prüfe, ob der Warenkorb weiterhin benutzbar bleibt und keine Summenfehler entstehen.
    e) Teste, ob nach Korrektur der Menge wieder alles wie erwartet funktioniert.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird für alle ungültigen Werte eine Fehlermeldung angezeigt?
        - Bleibt der Warenkorb nach Fehler benutzbar?
        - Entstehen Summenfehler oder bleibt die Anzeige korrekt?
        - Kann man nach Fehlerbehebung normal weiterarbeiten?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Fehlermeldung fehlt", "Summenfehler").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Validierung und Fehlerbehandlung funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
52. Leere den Warenkorb und führe folgende Aufgaben durch:
    a) Lege mehrere Produkte in den Warenkorb.
    b) Leere den Warenkorb mit der vorgesehenen Funktion.
    c) Prüfe, ob eine Bestätigungsmeldung erscheint und der Warenkorb wirklich leer ist.
    d) Prüfe, ob ein Undo (Rückgängig) möglich ist und ob nach Undo alle Produkte wieder korrekt erscheinen.
    e) Prüfe, ob die Anzeige im Header und die Summen auf 0 gesetzt werden.
    f) Teste, ob nach erneutem Leeren und Undo die Anzeige immer korrekt bleibt.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird nach Leeren wirklich kein Produkt mehr angezeigt?
        - Funktioniert Undo in allen Fällen?
        - Bleibt die Anzeige im Header und die Summen immer korrekt?
        - Gibt es Fehler bei mehrfacher Nutzung von Leeren/Undo?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Undo funktioniert nicht", "Summe bleibt falsch").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Leeren und Undo funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
53. Lege 10 verschiedene Produkte in den Warenkorb und führe folgende Aufgaben durch:
    a) Lege nacheinander 10 verschiedene Produkte in den Warenkorb.
    b) Prüfe, ob alle Produkte korrekt angezeigt werden (Name, Bild, Preis, Menge).
    c) Prüfe, ob die Warenkorbsumme stimmt und nach Entfernen/Ändern korrekt aktualisiert wird.
    d) Miss die Ladezeit und prüfe die Performance der Seite (z.B. mit cy.clock/cy.tick oder Browser-Tools).
    e) Entferne und ändere Produkte und prüfe, ob die Anzeige und Summen immer korrekt bleiben.
    f) Teste, ob die Seite auch bei vielen Produkten flüssig bleibt (z.B. Scrollen, AJAX-Updates).
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Produkte korrekt angezeigt und aktualisiert?
        - Bleibt die Performance auch bei vielen Produkten gut?
        - Gibt es Darstellungs- oder Summenfehler?
        - Funktionieren Entfernen/Ändern immer korrekt?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Performance schlecht", "Produkt bleibt sichtbar").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Warenkorb und Performance funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
54. Lege 20 gleiche Produkte in den Warenkorb und führe folgende Aufgaben durch:
    a) Lege ein Produkt mit der Menge 20 in den Warenkorb.
    b) Prüfe, ob Mengenrabatte oder Hinweise angezeigt werden (z.B. Rabatt-Badge, durchgestrichener Preis).
    c) Prüfe, ob die Rabattberechnung korrekt ist und der Rabatt auch nach Mengenänderung erhalten bleibt.
    d) Prüfe, ob der Rabatt in der Bestellübersicht und im Warenkorb-Icon angezeigt wird.
    e) Teste, ob der Rabatt auch nach Entfernen/Ändern der Menge korrekt bleibt oder verschwindet.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird der Rabatt immer korrekt angezeigt und berechnet?
        - Bleibt der Rabatt nach Mengenänderung erhalten?
        - Gibt es Fehler bei der Anzeige oder Berechnung?
        - Wird der Rabatt überall (Warenkorb, Übersicht, Icon) angezeigt?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Rabatt verschwindet", "Berechnung falsch").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Mengenrabatt funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
55. Lege 50 verschiedene Produkte in den Warenkorb und führe folgende Aufgaben durch:
    a) Lege nacheinander 50 verschiedene Produkte in den Warenkorb.
    b) Prüfe, ob die Seite performant bleibt (z.B. Ladezeit, Scrollen, AJAX-Updates).
    c) Prüfe, ob die Warenkorbanzeige paginiert wird (z.B. Blätterfunktion, Seitenzahlen).
    d) Prüfe, ob alle Produkte aufrufbar und entfernbar sind (z.B. durch Blättern, Suche).
    e) Kontrolliere, ob die Summen und die Anzeige nach Entfernen/Ändern stimmen.
    f) Teste, ob nach Entfernen/Ändern von Produkten die Anzeige immer korrekt bleibt.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Bleibt die Seite auch bei 50 Produkten flüssig und bedienbar?
        - Funktioniert die Paginierung korrekt?
        - Sind alle Produkte erreichbar und entfernbar?
        - Stimmen Summen und Anzeige nach Änderungen?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Produkt nicht erreichbar", "Paginierung fehlerhaft").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Warenkorb mit vielen Produkten funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
56. Lege 100 gleiche Produkte in den Warenkorb und führe folgende Aufgaben durch:
    a) Lege ein Produkt mit der Menge 100 in den Warenkorb.
    b) Prüfe, ob eine Begrenzung greift (z.B. maximale Bestellmenge) und eine Warnung erscheint.
    c) Prüfe, ob die Seite weiterhin bedienbar bleibt (z.B. keine Hänger, keine Fehlermeldungen im UI).
    d) Reduziere die Menge schrittweise und prüfe, ob die Warnung verschwindet, sobald die Menge wieder im erlaubten Bereich ist.
    e) Prüfe, ob die Summen und die Anzeige immer korrekt bleiben, auch nach Mengenänderung.
    f) Teste, ob nach Entfernen/Ändern der Menge die Seite weiterhin flüssig bleibt.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Begrenzung immer korrekt angewendet?
        - Bleibt die Seite auch bei 100 Produkten bedienbar?
        - Verschwindet die Warnung nach Reduzierung der Menge?
        - Stimmen Summen und Anzeige nach allen Änderungen?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Warnung bleibt", "Absturz bei 100 Produkten").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Mengenbegrenzung und Performance funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
57. Führe eine große Bestellung durch und entferne alle Produkte wieder. Führe folgende Aufgaben durch:
    a) Lege viele verschiedene Produkte in den Warenkorb (z.B. 20+).
    b) Schließe die Bestellung ab und prüfe, ob sie in der Bestellhistorie erscheint.
    c) Entferne nach der Bestellung alle Produkte aus dem Warenkorb.
    d) Prüfe, ob der Warenkorb korrekt geleert wird und keine "offenen" Bestellungen mehr angezeigt werden.
    e) Prüfe, ob die abgeschlossene Bestellung weiterhin in der Historie sichtbar ist.
    f) Teste, ob nach erneutem Login/Seitenwechsel die Historie und der Warenkorb korrekt bleiben.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Bestellung korrekt als abgeschlossen angezeigt?
        - Bleibt die Historie nach Entfernen der Produkte korrekt?
        - Gibt es "offene" Bestellungen, obwohl alles entfernt wurde?
        - Bleibt die Anzeige nach Login/Seitenwechsel korrekt?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Bestellung bleibt offen", "Historie fehlerhaft").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Bestellhistorie und Warenkorb funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
58. Führe eine große Bestellung durch und ändere die Mengen im Warenkorb mehrfach. Führe folgende Aufgaben durch:
    a) Lege viele verschiedene Produkte in den Warenkorb.
    b) Ändere die Mengen mehrfach (z.B. erhöhen, verringern, auf 0 setzen).
    c) Prüfe nach jedem Schritt, ob die Preisberechnung und die Summen stimmen.
    d) Prüfe, ob die Änderungen in der Bestellübersicht übernommen werden und keine alten Werte angezeigt werden.
    e) Teste, ob nach Aktualisierung/Seitenwechsel die Übersicht immer aktuell bleibt.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Stimmen die Summen nach jeder Änderung?
        - Werden alle Änderungen korrekt übernommen?
        - Gibt es alte Werte oder Anzeigeprobleme?
        - Bleibt die Übersicht nach Seitenwechsel aktuell?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Summenfehler", "alte Werte bleiben sichtbar").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Preisberechnung und Übersicht funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
59. Entferne ein Produkt aus der Wunschliste und führe folgende Aufgaben durch:
    a) Öffne die Wunschliste mit mehreren Produkten.
    b) Entferne ein Produkt und prüfe, ob die Anzahl sofort korrekt aktualisiert wird.
    c) Prüfe, ob keine Geistereinträge (unsichtbare oder "hängende" Produkte) bleiben.
    d) Prüfe, ob eine Rückgängig-Funktion angeboten wird und ob nach Rückgängig das Produkt wieder an der richtigen Stelle erscheint.
    e) Teste, ob die Anzeige nach Entfernen und Rückgängig immer sofort aktualisiert wird.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Anzahl nach Entfernen und Rückgängig immer korrekt angezeigt?
        - Gibt es Geistereinträge oder Anzeigeprobleme?
        - Erscheint das Produkt nach Rückgängig an der richtigen Stelle?
        - Bleibt die Wunschliste nach mehreren Aktionen korrekt?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Geistereintrag bleibt", "Rückgängig funktioniert nicht").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Wunschliste und Rückgängig funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
60. Zeige die Wunschliste an und führe folgende Aufgaben durch:
    a) Öffne die Wunschliste mit mehreren Produkten.
    b) Prüfe, ob die Produkte nach Hinzufügungsdatum sortiert sind.
    c) Prüfe, ob Filter- und Suchfunktion korrekt funktionieren (z.B. Suche nach Produktname, Filter nach Kategorie).
    d) Prüfe, ob die Anzahl der Produkte immer stimmt, auch nach Hinzufügen/Entfernen.
    e) Entferne alle Produkte und prüfe, ob die leere Wunschliste korrekt behandelt wird (Hinweistext, keine alten Produkte sichtbar).
    f) Teste, ob nach erneutem Hinzufügen/Entfernen die Anzeige immer korrekt bleibt.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Sind die Produkte immer korrekt sortiert und auffindbar?
        - Funktionieren Filter und Suche zuverlässig?
        - Wird die Anzahl immer korrekt angezeigt?
        - Erscheint bei leerer Liste ein Hinweistext und keine alten Produkte?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Hinweistext fehlt", "alte Produkte bleiben sichtbar").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Wunschliste und Anzeige funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

### **Level 5: Registrierung & Login**
61. Registrierung mit gültigen Daten und anschließender E-Mail-Bestätigung (sofern vorhanden). Führe folgende Aufgaben durch:
    a) Öffne die Registrierungsseite und fülle alle Pflichtfelder mit gültigen Daten aus.
    b) Sende das Formular ab und prüfe, ob eine Bestätigungsmail versendet wird (z.B. Mock/Log prüfen).
    c) Prüfe, ob die E-Mail einen Bestätigungslink enthält und dieser nur einmal nutzbar ist.
    d) Klicke auf den Bestätigungslink und prüfe, ob die Registrierung abgeschlossen wird und ein Login möglich ist.
    e) Versuche, den Link ein zweites Mal zu verwenden und prüfe, ob eine Fehlermeldung erscheint.
    f) Prüfe, ob nach Bestätigung ein Login möglich ist und die Session korrekt gesetzt wird.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Kommt die Bestätigungsmail korrekt an?
        - Ist der Link wirklich nur einmal nutzbar?
        - Funktioniert der Login nach Bestätigung?
        - Gibt es Fehler oder Unklarheiten im Ablauf?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Mail kommt nicht an", "Link mehrfach nutzbar").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Registrierung und Bestätigung funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
62. Registrierung mit bereits verwendeter E-Mail. Führe folgende Aufgaben durch:
    a) Registriere dich mit einer E-Mail, die bereits verwendet wurde.
    b) Prüfe, ob eine eindeutige und verständliche Fehlermeldung erscheint.
    c) Versuche, die Registrierung erneut mit derselben E-Mail durchzuführen.
    d) Prüfe, ob die Registrierung verhindert wird und keine neue Session erstellt wird.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Fehlermeldung immer angezeigt?
        - Ist die Fehlermeldung verständlich formuliert?
        - Kann die E-Mail wirklich nicht erneut verwendet werden?
        - Wird keine Session erstellt?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Fehlermeldung fehlt", "Session wird erstellt").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Fehlermeldung und Validierung funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
63. Registrierung mit ungültiger E-Mail (z.B. ohne @, mit Leerzeichen). Führe folgende Aufgaben durch:
    a) Öffne die Registrierungsseite und gib eine ungültige E-Mail ein (z.B. ohne @, mit Leerzeichen).
    b) Prüfe, ob die Validierung greift und eine passende Fehlermeldung erscheint.
    c) Teste, ob die Eingabe automatisch korrigiert wird (z.B. Leerzeichen entfernt, Format angepasst).
    d) Korrigiere die E-Mail und prüfe, ob die Registrierung dann möglich ist.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Fehlermeldung immer angezeigt?
        - Wird die Eingabe automatisch korrigiert?
        - Ist die Registrierung nach Korrektur möglich?
        - Ist die Fehlermeldung verständlich?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Fehlermeldung fehlt", "Korrektur nicht möglich").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Validierung und Korrektur funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
64. Registrierung ohne Pflichtfelder. Führe folgende Aufgaben durch:
    a) Öffne die Registrierungsseite und lasse alle Pflichtfelder leer.
    b) Versuche, das Formular abzusenden und prüfe, ob für jedes Feld eine Fehlermeldung erscheint.
    c) Prüfe, ob die Pflichtfelder korrekt markiert werden (z.B. rot umrandet, Hinweistext).
    d) Prüfe, ob nach Fehlern die Felder automatisch fokussiert werden.
    e) Fülle die Felder nacheinander korrekt aus und prüfe, ob die Fehlermeldungen verschwinden.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Pflichtfelder korrekt validiert?
        - Erscheinen für jedes Feld eigene Fehlermeldungen?
        - Werden die Felder nach Fehlern fokussiert?
        - Verschwinden die Fehlermeldungen nach Korrektur?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Feld bleibt rot", "Fehlermeldung bleibt").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Validierung und Pflichtfelder funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
65. Registrierung mit zu kurzem Passwort. Führe folgende Aufgaben durch:
    a) Öffne die Registrierungsseite und gib ein zu kurzes Passwort ein.
    b) Prüfe, ob die Passwortregeln angezeigt werden und eine Fehlermeldung erscheint.
    c) Prüfe, ob ein Passwort-Strength-Meter angezeigt wird und das Feld nach Fehler rot markiert wird.
    d) Korrigiere das Passwort und prüfe, ob die Registrierung dann möglich ist.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden die Passwortregeln immer angezeigt?
        - Erscheint eine Fehlermeldung bei zu kurzem Passwort?
        - Wird das Feld nach Fehler rot markiert?
        - Ist die Registrierung nach Korrektur möglich?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Fehlermeldung fehlt", "Strength-Meter fehlt").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Passwortvalidierung funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
66. Registrierung mit zu langem Namen (>255 Zeichen). Führe folgende Aufgaben durch:

    **a) Testdaten eingeben**
    - Öffne die Registrierungsseite.
    - Gib in das Namensfeld einen sehr langen Namen (>255 Zeichen) ein.
    - Dokumentiere die verwendeten Testdaten im Testcode (als Kommentar).

    **b) Begrenzung und Validierung prüfen**
    - Prüfe, ob eine Begrenzung greift (z.B. keine weiteren Zeichen möglich oder automatische Kürzung).
    - Prüfe, ob eine Fehlermeldung erscheint und das Feld nach Fehler rot markiert wird.
    - Dokumentiere die Begrenzung und die Fehlermeldung als Kommentar.

    **c) Korrektur und erneute Prüfung**
    - Korrigiere den Namen auf eine gültige Länge.
    - Prüfe, ob die Registrierung dann möglich ist.

    **d) Kontrollfragen**
    - Wird die Begrenzung immer angewendet?
    - Erscheint eine Fehlermeldung bei zu langem Namen?
    - Wird das Feld nach Fehler rot markiert?
    - Ist die Registrierung nach Korrektur möglich?

    **e) Dokumentation und Abschluss**
    - Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Begrenzung fehlt", "Fehlermeldung fehlt").
    - Notiere für jeden Prüfschritt, ob er bestanden wurde (z.B. // OK oder // FEHLER: ...).
    - Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Namensbegrenzung funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".

    > **Hinweis:** Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
67. Login mit gültigen Daten. Führe folgende Aufgaben durch:

    **a) Login durchführen**
    - Öffne die Login-Seite.
    - Gib gültige Zugangsdaten ein.
    - Dokumentiere die verwendeten Testdaten im Testcode (als Kommentar).

    **b) Session und Anzeige prüfen**
    - Prüfe, ob nach Login ein Session-Cookie gesetzt wird.
    - Prüfe, ob der Benutzername im Header, auf der Profilseite und in der Bestellübersicht korrekt angezeigt wird.
    - Dokumentiere die Sessiondaten (z.B. Cookie-Name, Ablaufzeit) als Kommentar.

    **c) Browser-Neustart und Sessionkontrolle**
    - Starte den Browser neu und prüfe, ob die Session erhalten bleibt und der Login weiterhin aktiv ist.

    **d) Login auf verschiedenen Seiten testen**
    - Teste den Login auf verschiedenen Seiten (z.B. Startseite, Warenkorb, Profil).

    **e) Kontrollfragen**
    - Wird der Benutzername überall korrekt angezeigt?
    - Bleibt die Session nach Browser-Neustart erhalten?
    - Funktioniert der Login auf allen Seiten?
    - Gibt es Fehler oder Abweichungen?

    **f) Dokumentation und Abschluss**
    - Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Session geht verloren", "Name fehlt im Header").
    - Notiere für jeden Prüfschritt, ob er bestanden wurde (z.B. // OK oder // FEHLER: ...).
    - Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Login und Session funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".

    > **Hinweis:** Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
68. Login mit ungültigem Passwort. Führe folgende Aufgaben durch:
    a) Öffne die Login-Seite und gib eine gültige E-Mail mit einem ungültigen Passwort ein.
    b) Prüfe, ob keine Session erstellt wird und eine Fehlermeldung erscheint.
    c) Versuche mehrmals hintereinander ein falsches Passwort einzugeben und prüfe, ob ein Rate-Limit oder Captcha erscheint.
    d) Prüfe, ob nach erfolgreichem Login alles wieder wie erwartet funktioniert.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird für jeden Fehlversuch eine Fehlermeldung angezeigt?
        - Wird keine Session erstellt?
        - Greift ein Rate-Limit oder erscheint ein Captcha?
        - Funktioniert nach erfolgreichem Login wieder alles?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Session wird erstellt", "Captcha fehlt").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Fehlerbehandlung und Rate-Limit funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
69. Login mit nicht existierender E-Mail. Führe folgende Aufgaben durch:
    a) Öffne die Login-Seite und gib eine nicht existierende E-Mail ein.
    b) Prüfe, ob eine generische Fehlermeldung erscheint (ohne Hinweis, ob die E-Mail existiert).
    c) Prüfe, ob keine Session erstellt wird.
    d) Korrigiere die E-Mail auf eine existierende und prüfe, ob der Login dann möglich ist.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird immer eine generische Fehlermeldung angezeigt?
        - Wird keine Session erstellt?
        - Ist der Login nach Korrektur möglich?
        - Ist die Fehlermeldung verständlich?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Fehlermeldung zu spezifisch", "Session wird erstellt").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Fehlerbehandlung und Validierung funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
70. Nach Login wird der Benutzername überall korrekt angezeigt (Header, Profilseite, Bestellübersicht) und ist nicht manipulierbar. Führe folgende Aufgaben durch:
    a) Logge dich ein und prüfe, ob der Benutzername im Header, auf der Profilseite und in der Bestellübersicht korrekt angezeigt wird.
    b) Versuche, den Benutzernamen im Frontend zu manipulieren (z.B. per DevTools, Eingabefeld, URL-Manipulation).
    c) Wechsle zwischen verschiedenen Seiten und lade die Seite neu, prüfe, ob der Name immer korrekt bleibt.
    d) Prüfe, ob der Name nach Logout nicht mehr angezeigt wird.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird der Name überall korrekt angezeigt?
        - Ist der Name nicht manipulierbar?
        - Bleibt die Anzeige nach Seitenwechsel und Neuladen korrekt?
        - Verschwindet der Name nach Logout?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Name manipulierbar", "Anzeige fehlerhaft").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Namensanzeige und Sicherheit funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
71. Passwort vergessen-Funktion aufrufen. Führe folgende Aufgaben durch:
    a) Öffne die Login-Seite und klicke auf "Passwort vergessen".
    b) Gib eine gültige E-Mail ein und fordere das Zurücksetzen des Passworts an.
    c) Prüfe, ob eine E-Mail versendet wird (z.B. Mock/Log prüfen) und ein Reset-Link enthalten ist.
    d) Klicke auf den Link und setze ein neues, sicheres Passwort.
    e) Versuche, den Link ein zweites Mal zu verwenden und prüfe, ob eine Fehlermeldung erscheint.
    f) Prüfe, ob nach Passwort-Reset ein Login mit dem alten Passwort nicht mehr möglich ist, aber mit dem neuen Passwort schon.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Kommt die Bestätigungsmail korrekt an?
        - Ist der Link wirklich nur einmal nutzbar?
        - Funktioniert der Login nach Reset nur mit neuem Passwort?
        - Gibt es Fehler oder Unklarheiten im Ablauf?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Mail kommt nicht an", "Link mehrfach nutzbar").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Passwort-Reset und Sicherheit funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
72. Logout durchführen. Führe folgende Aufgaben durch:
    a) Logge dich ein und prüfe, ob die Session aktiv ist und der Benutzername angezeigt wird.
    b) Führe den Logout durch und prüfe, ob alle Sessiondaten gelöscht werden.
    c) Prüfe, ob ein Redirect auf die Startseite oder Login-Seite erfolgt.
    d) Versuche, auf geschützte Seiten zuzugreifen und prüfe, ob dies verhindert wird.
    e) Logge dich erneut ein und prüfe, ob alles wieder wie erwartet funktioniert.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Sessiondaten nach Logout gelöscht?
        - Erfolgt ein Redirect?
        - Ist ein Zugriff auf geschützte Seiten nach Logout nicht mehr möglich?
        - Funktioniert nach erneutem Login wieder alles?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Session bleibt aktiv", "Redirect fehlt").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Logout und Sessionhandling funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
73. Lasse alle Pflichtfelder leer. Führe folgende Aufgaben durch:
    a) Öffne die Registrierungsseite und lasse alle Pflichtfelder leer.
    b) Versuche, das Formular abzusenden und prüfe, ob für jedes Feld eine eigene Fehlermeldung erscheint.
    c) Prüfe, ob die Felder nach Fehlern automatisch fokussiert werden.
    d) Fülle die Felder nacheinander korrekt aus und prüfe, ob die Fehlermeldungen verschwinden.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird für jedes Feld eine eigene Fehlermeldung angezeigt?
        - Werden die Felder nach Fehlern fokussiert?
        - Verschwinden die Fehlermeldungen nach Korrektur?
        - Sind die Fehlermeldungen verständlich?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Feld bleibt rot", "Fehlermeldung bleibt").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Validierung und Pflichtfelder funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
74. Falsches Passwort beim Login mehrfach eingeben. Führe folgende Aufgaben durch:
    a) Öffne die Login-Seite und gib mehrmals hintereinander ein falsches Passwort ein.
    b) Prüfe, ob nach mehreren Fehlversuchen ein Captcha oder eine Sperre erscheint.
    c) Prüfe, wie lange die Sperre anhält und ob nach Ablauf ein Login wieder möglich ist.
    d) Prüfe, ob die Fehlermeldung verständlich ist und nach erfolgreichem Login wieder alles funktioniert.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Erscheint ein Captcha oder eine Sperre nach mehreren Fehlversuchen?
        - Wie lange hält die Sperre an?
        - Ist der Login nach Ablauf der Sperre wieder möglich?
        - Ist die Fehlermeldung verständlich?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Captcha fehlt", "Sperre bleibt aktiv").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Sperre und Captcha funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
75. Login nach langer Inaktivität (Session abgelaufen). Führe folgende Aufgaben durch:
    a) Logge dich ein und warte, bis die Session abgelaufen ist (z.B. durch Inaktivität oder gezieltes Session-Timeout).
    b) Versuche, auf geschützte Seiten zuzugreifen und prüfe, ob ein erneuter Login erforderlich ist.
    c) Prüfe, ob die Session sicher abläuft und keine Daten mehr angezeigt werden.
    d) Logge dich erneut ein und prüfe, ob nach Login wieder alles wie erwartet funktioniert.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird nach Ablauf der Session ein erneuter Login verlangt?
        - Sind keine geschützten Seiten mehr erreichbar?
        - Werden keine Daten mehr angezeigt?
        - Funktioniert nach erneutem Login wieder alles?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Session bleibt aktiv", "Daten sichtbar nach Ablauf").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Sessionhandling und Sicherheit funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

### **Level 6: Checkout & Bestellung**
76. Führe den Checkout-Prozess mit mehreren Produkten, verschiedenen Versandoptionen und Zahlungsarten durch. Führe folgende Aufgaben durch:
    a) Lege mehrere verschiedene Produkte in den Warenkorb.
    b) Starte den Checkout-Prozess und wähle verschiedene Versandoptionen aus.
    c) Prüfe, ob sich die Lieferzeiten, Versandkosten und verfügbaren Zahlungsarten je nach Auswahl korrekt ändern.
    d) Wähle verschiedene Zahlungsarten (z.B. Kreditkarte, PayPal, Rechnung) und prüfe die Validierung und Weiterleitung.
    e) Prüfe, ob alle Zwischensummen, Versandkosten, Steuern und die Gesamtsumme korrekt berechnet und angezeigt werden.
    f) Ändere die Versandart und prüfe, ob die Gesamtsumme aktualisiert wird und die Auswahl gespeichert bleibt.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Preise, Versandkosten und Steuern korrekt berechnet?
        - Ändern sich Lieferzeit und Zahlungsarten je nach Auswahl?
        - Bleibt die Auswahl nach Wechsel erhalten?
        - Gibt es Fehler oder Unklarheiten im Ablauf?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Versandkosten falsch", "Zahlungsart fehlt").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Checkout und Preisberechnung funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
77. Bestellung als Gast durchführen. Führe folgende Aufgaben durch:
    a) Lege Produkte in den Warenkorb und starte den Checkout als Gast.
    b) Fülle die erforderlichen Felder aus und schließe die Bestellung ab.
    c) Prüfe, ob keine Benutzerdaten gespeichert werden und keine Session erhalten bleibt.
    d) Prüfe, ob eine E-Mail-Bestätigung korrekt versendet wird (z.B. Mock/Log prüfen).
    e) Prüfe, ob nach Abschluss ein erneuter Checkout als Gast möglich ist.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden keine Benutzerdaten gespeichert?
        - Kommt die Bestätigungsmail korrekt an?
        - Bleibt keine Session erhalten?
        - Ist ein erneuter Checkout als Gast möglich?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Session bleibt erhalten", "Mail fehlt").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Gastbestellung und Datenschutz funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
78. Bestellung als registrierter Nutzer durchführen. Führe folgende Aufgaben durch:
    a) Logge dich ein und lege Produkte in den Warenkorb.
    b) Starte den Checkout und prüfe, ob die Adresse vorausgefüllt ist.
    c) Schließe die Bestellung ab und prüfe, ob die Bestellhistorie aktualisiert wird und die Bestellung dort erscheint.
    d) Prüfe, ob die Session erhalten bleibt und nach Abschluss die Bestellung in der Historie sichtbar ist.
    e) Ändere die Adresse nachträglich und prüfe, ob die Änderung übernommen wird.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Ist die Adresse vorausgefüllt?
        - Wird die Historie korrekt aktualisiert?
        - Bleibt die Session erhalten?
        - Kann die Adresse nachträglich geändert werden?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Adresse nicht übernommen", "Historie bleibt leer").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Bestellung und Historie funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
79. Wähle verschiedene Versandoptionen. Führe folgende Aufgaben durch:
    a) Lege Produkte in den Warenkorb und starte den Checkout.
    b) Wähle verschiedene Versandoptionen und prüfe, ob sich Lieferzeit, Versandkosten und verfügbare Zahlungsarten jeweils korrekt ändern.
    c) Prüfe, ob die Auswahl gespeichert wird und nach Wechsel der Versandart die Gesamtsumme stimmt.
    d) Prüfe, ob die Lieferzeit in der Bestellübersicht angezeigt wird.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Ändern sich Lieferzeit, Versandkosten und Zahlungsarten korrekt?
        - Bleibt die Auswahl gespeichert?
        - Stimmt die Gesamtsumme nach Wechsel?
        - Wird die Lieferzeit korrekt angezeigt?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Lieferzeit fehlt", "Versandkosten falsch").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Versandoptionen und Anzeige funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
80. Wähle verschiedene Zahlungsoptionen (z.B. Kreditkarte, PayPal, Rechnung). Führe folgende Aufgaben durch:
    a) Lege Produkte in den Warenkorb und starte den Checkout.
    b) Wähle verschiedene Zahlungsoptionen und prüfe die Validierung und Weiterleitung für jede Option.
    c) Prüfe, ob Zahlungsdaten sicher übertragen werden (z.B. HTTPS, keine Klartextdaten im Netzwerk).
    d) Simuliere Fehlerfälle (z.B. ungültige Kreditkarte, Abbruch der Zahlung) und prüfe, ob der Warenkorb erhalten bleibt.
    e) Schließe eine Zahlung erfolgreich ab und prüfe, ob die Bestätigung erscheint.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Zahlungsarten korrekt validiert und weitergeleitet?
        - Werden Zahlungsdaten sicher übertragen?
        - Bleibt der Warenkorb nach Abbruch erhalten?
        - Erscheint nach erfolgreicher Zahlung die Bestätigung?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Zahlungsdaten unsicher", "Warenkorb leer nach Abbruch").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Zahlungsarten und Sicherheit funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!
81. Schließe eine Bestellung ab. Prüfe, ob eine Bestellbestätigung per E-Mail versendet wird (Mock/Log prüfen), die Bestellnummer eindeutig ist, die Bestellung in der Historie erscheint und ob die Bestätigung alle relevanten Daten enthält. Kontrolliere, ob die E-Mail keine sensiblen Daten enthält.
81. Führe einen vollständigen Checkout-Prozess als eingeloggter Nutzer durch und dokumentiere jeden Schritt explizit:
    a) Logge dich mit gültigen Nutzerdaten ein und prüfe, ob die Session korrekt gesetzt wird (Cookie, Header-Anzeige, Profilseite).
    b) Lege mindestens drei verschiedene Produkte mit unterschiedlichen Varianten (z.B. Farbe, Größe) in den Warenkorb.
        - Prüfe nach jedem Hinzufügen, ob die Warenkorbanzeige (Icon, Summe, Anzahl) sofort aktualisiert wird.
        - Dokumentiere die Namen, Varianten und Preise der Produkte im Test (als Kommentar).
    c) Öffne den Warenkorb und prüfe, ob alle Produkte mit korrekten Varianten, Mengen und Preisen angezeigt werden.
        - Kontrolliere, ob die Gesamtsumme stimmt und alle Rabatte/Versandkosten korrekt berechnet werden.
        - Prüfe, ob Produktbilder, Namen und Varianten eindeutig zuordenbar sind.
    d) Gehe zur Kasse und prüfe, ob alle Pflichtfelder (Adresse, Versandart, Zahlungsart) vorausgefüllt oder korrekt leer sind.
        - Lasse absichtlich ein Pflichtfeld leer und prüfe, ob eine Fehlermeldung erscheint und das Feld markiert wird.
        - Fülle alle Felder korrekt aus und dokumentiere die eingegebenen Daten (als Kommentar, keine echten Daten verwenden!).
    e) Wähle verschiedene Versand- und Zahlungsarten aus und prüfe, ob sich die Gesamtsumme und die Anzeige entsprechend ändern.
        - Teste mindestens zwei verschiedene Kombinationen und dokumentiere die Unterschiede.
    f) Schließe die Bestellung ab und prüfe, ob eine Bestellbestätigung erscheint (Seite, E-Mail, Bestellnummer).
        - Kontrolliere, ob die Bestelldaten in der Bestellhistorie korrekt übernommen werden.
        - Prüfe, ob die Session nach Abschluss erhalten bleibt und der Nutzer eingeloggt bleibt.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wurden alle Pflichtfelder korrekt validiert?
        - Stimmen alle Summen, Rabatte und Versandkosten?
        - Sind alle Bestelldaten in der Historie korrekt und vollständig?
        - Bleibt die Session nach Abschluss erhalten?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Fehlermeldung fehlt", "Summe falsch", "Session verloren").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Checkout und Bestellprozess funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll den gesamten Checkout-Prozess lückenlos prüfen und dokumentieren.
82. Checkout mit ungültiger Adresse (z.B. fehlende PLZ, ungültige Straße). Prüfe Validierung, Fehlermeldung, ob die Felder nach Fehlern fokussiert werden und ob nach Korrektur die Bestellung möglich ist. Kontrolliere, ob die Fehlermeldungen verständlich sind.
82. Teste die Funktion "Passwort ändern" als eingeloggter Nutzer und dokumentiere alle Zwischenschritte und Prüfungen:
    a) Logge dich mit gültigen Nutzerdaten ein und öffne die Profil-/Kontoeinstellungen.
    b) Navigiere zum Bereich "Passwort ändern" und prüfe, ob alle erforderlichen Felder (altes Passwort, neues Passwort, Bestätigung) vorhanden sind.
    c) Gib ein falsches aktuelles Passwort ein und prüfe, ob eine eindeutige Fehlermeldung erscheint und das Passwort nicht geändert wird.
    d) Gib ein zu kurzes oder unsicheres neues Passwort ein und prüfe, ob die Passwortregeln angezeigt und eine Fehlermeldung ausgegeben wird.
    e) Gib ein gültiges neues Passwort ein (mind. 8 Zeichen, Groß-/Kleinschreibung, Zahl, Sonderzeichen) und bestätige es korrekt.
        - Prüfe, ob das Passwort erfolgreich geändert wird und eine Bestätigung erscheint.
        - Kontrolliere, ob die Session erhalten bleibt oder ein erneuter Login erforderlich ist.
    f) Logge dich mit dem neuen Passwort aus und wieder ein, prüfe, ob der Login funktioniert und die Session korrekt gesetzt wird.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Fehlerfälle (falsches Passwort, zu kurz, nicht übereinstimmend) korrekt erkannt?
        - Erscheinen die Fehlermeldungen verständlich und eindeutig?
        - Funktioniert der Login mit dem neuen Passwort?
        - Bleibt die Session nach Änderung erhalten oder wird ein Logout erzwungen?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Fehlermeldung fehlt", "Session bleibt aktiv trotz Passwortänderung").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Passwortänderung funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Fehlerfälle und den gesamten Ablauf dokumentieren.
83. Checkout mit ungültiger Zahlungsart (z.B. abgelaufene Kreditkarte, ungültige IBAN). Prüfe Validierung, Fehlermeldung, ob die Zahlungsdaten nicht gespeichert werden und ob nach Korrektur die Zahlung möglich ist. Kontrolliere, ob die Fehlermeldungen verständlich sind.
83. Teste die Funktion "Adresse hinzufügen/bearbeiten/löschen" im Nutzerkonto und dokumentiere alle Schritte und Prüfungen:
    a) Logge dich ein und öffne den Bereich "Adressen" im Nutzerkonto.
    b) Füge eine neue Adresse hinzu und prüfe, ob alle Pflichtfelder vorhanden und validiert werden.
        - Lasse absichtlich Felder leer und prüfe, ob Fehlermeldungen erscheinen.
        - Fülle alle Felder korrekt aus und dokumentiere die eingegebenen Daten (als Kommentar, keine echten Daten verwenden!).
    c) Speichere die Adresse und prüfe, ob sie in der Übersicht korrekt angezeigt wird.
    d) Bearbeite die Adresse (z.B. ändere Straße, PLZ) und prüfe, ob die Änderungen übernommen und angezeigt werden.
    e) Lösche die Adresse und prüfe, ob sie sofort aus der Übersicht verschwindet und ggf. eine Bestätigung erscheint.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Pflichtfelder korrekt validiert?
        - Erscheinen Fehlermeldungen bei fehlenden oder ungültigen Eingaben?
        - Werden Änderungen und Löschungen sofort übernommen?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Adresse bleibt sichtbar", "Fehlermeldung fehlt").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Adressverwaltung funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Fehlerfälle abdecken und dokumentieren.
84. Versuche, eine Bestellung ohne Produkte im Warenkorb abzuschließen. Prüfe, ob dies verhindert wird, eine passende Fehlermeldung erscheint und ob nach Hinzufügen eines Produkts die Bestellung möglich ist. Kontrolliere, ob die Fehlermeldung verständlich ist.
84. Teste die Funktion "Newsletter abonnieren/abbestellen" und prüfe alle Zwischenschritte, Kontrollfragen und Dokumentationspflichten:
    a) Logge dich ein und öffne den Bereich "Newsletter" oder entsprechende Einstellungen.
    b) Abonniere den Newsletter und prüfe, ob eine Bestätigung erscheint (Seite, E-Mail, Banner).
        - Kontrolliere, ob die E-Mail-Adresse korrekt übernommen wird und keine Doppeleinträge entstehen.
    c) Prüfe, ob der Status "abonniert" in den Einstellungen korrekt angezeigt wird.
    d) Melde dich vom Newsletter ab und prüfe, ob der Status sofort aktualisiert wird und eine Bestätigung erscheint.
    e) Versuche, den Newsletter erneut zu abonnieren und prüfe, ob dies möglich ist und korrekt angezeigt wird.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird der Status immer korrekt angezeigt und aktualisiert?
        - Erscheinen Bestätigungen (Seite, E-Mail) zuverlässig?
        - Gibt es Doppeleinträge oder Fehler beim Statuswechsel?
        - Bleibt die E-Mail-Adresse immer korrekt hinterlegt?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Status bleibt falsch", "Bestätigung fehlt").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Newsletter-Funktion funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Statuswechsel und Fehlerfälle abdecken und dokumentieren.
85. Führe eine große Bestellung als Gast durch. Prüfe Performance, Validierung, E-Mail-Bestätigung, ob die Bestellung nicht in der Historie erscheint und ob nach Abschluss ein erneuter Checkout möglich ist. Kontrolliere, ob die Seite auch bei vielen Produkten flüssig bleibt.
85. Teste die Funktion "Rechnungsadresse vs. Lieferadresse" im Checkout und prüfe alle Varianten, Kontrollfragen und Dokumentationspflichten:
    a) Logge dich ein und lege mindestens zwei Produkte in den Warenkorb.
    b) Gehe zur Kasse und prüfe, ob die Rechnungsadresse vorausgefüllt ist und bearbeitet werden kann.
    c) Wähle die Option "Lieferadresse abweichend" und gib eine neue Lieferadresse ein.
        - Prüfe, ob alle Pflichtfelder vorhanden und validiert werden.
        - Lasse absichtlich Felder leer und prüfe, ob Fehlermeldungen erscheinen.
        - Fülle alle Felder korrekt aus und dokumentiere die eingegebenen Daten (als Kommentar, keine echten Daten verwenden!).
    d) Schließe die Bestellung ab und prüfe, ob beide Adressen (Rechnung/Lieferung) in der Bestellübersicht korrekt angezeigt werden.
    e) Kontrolliere, ob die Adressen in der Bestellbestätigung (Seite, E-Mail) korrekt übernommen werden.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden beide Adressen korrekt angezeigt und übernommen?
        - Werden alle Pflichtfelder validiert und Fehlermeldungen angezeigt?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Lieferadresse fehlt", "Fehlermeldung fehlt").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Adressfunktionen im Checkout funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Fehlerfälle abdecken und dokumentieren.
86. Führe eine große Bestellung als registrierter Nutzer durch. Prüfe, ob alle Daten korrekt übernommen werden, die Historie stimmt, die Session erhalten bleibt und ob nach Abschluss die Bestellung in der Historie erscheint. Kontrolliere, ob die Seite auch bei vielen Produkten flüssig bleibt.
86. Führe eine große Bestellung als registrierter Nutzer durch und prüfe alle Details, Performance und Datenübernahme:
    a) Logge dich mit gültigen Nutzerdaten ein und prüfe, ob die Session korrekt gesetzt wird (Cookie, Header, Profilseite).
    b) Lege mindestens 20 verschiedene Produkte mit unterschiedlichen Varianten in den Warenkorb.
        - Prüfe nach jedem Hinzufügen, ob die Warenkorbanzeige (Icon, Summe, Anzahl) sofort aktualisiert wird.
        - Dokumentiere die Namen, Varianten und Preise der Produkte im Test (als Kommentar).
    c) Öffne den Warenkorb und prüfe, ob alle Produkte mit korrekten Varianten, Mengen und Preisen angezeigt werden.
        - Kontrolliere, ob die Gesamtsumme stimmt und alle Rabatte/Versandkosten korrekt berechnet werden.
        - Prüfe, ob Produktbilder, Namen und Varianten eindeutig zuordenbar sind.
    d) Gehe zur Kasse und prüfe, ob alle Pflichtfelder (Adresse, Versandart, Zahlungsart) vorausgefüllt oder korrekt leer sind.
        - Lasse absichtlich ein Pflichtfeld leer und prüfe, ob eine Fehlermeldung erscheint und das Feld markiert wird.
        - Fülle alle Felder korrekt aus und dokumentiere die eingegebenen Daten (als Kommentar, keine echten Daten verwenden!).
    e) Wähle verschiedene Versand- und Zahlungsarten aus und prüfe, ob sich die Gesamtsumme und die Anzeige entsprechend ändern.
        - Teste mindestens zwei verschiedene Kombinationen und dokumentiere die Unterschiede.
    f) Schließe die Bestellung ab und prüfe, ob eine Bestellbestätigung erscheint (Seite, E-Mail, Bestellnummer).
        - Kontrolliere, ob die Bestelldaten in der Bestellhistorie korrekt übernommen werden.
        - Prüfe, ob die Session nach Abschluss erhalten bleibt und der Nutzer eingeloggt bleibt.
    g) Prüfe die Performance der Seite während des gesamten Prozesses (Ladezeiten, Reaktionszeiten, AJAX-Updates).
    h) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wurden alle Pflichtfelder korrekt validiert?
        - Stimmen alle Summen, Rabatte und Versandkosten?
        - Sind alle Bestelldaten in der Historie korrekt und vollständig?
        - Bleibt die Session nach Abschluss erhalten?
        - Bleibt die Seite auch bei vielen Produkten flüssig?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    i) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Fehlermeldung fehlt", "Summe falsch", "Session verloren", "Performance schlecht").
    j) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Große Bestellung und Performance funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll den gesamten Prozess lückenlos prüfen und dokumentieren.
87. Teste verschiedene Versandarten bei großen Bestellungen. Prüfe Preis-, Lieferzeitberechnung, ob Versandkosten korrekt summiert werden und ob nach Wechsel der Versandart die Gesamtsumme stimmt. Kontrolliere, ob die Lieferzeit in der Bestellübersicht angezeigt wird.
87. Teste alle verfügbaren Versandarten bei einer großen Bestellung und prüfe alle Berechnungen, Anzeigen und Kontrollpunkte:
    a) Lege mindestens 10 verschiedene Produkte in den Warenkorb und gehe zur Kasse.
    b) Wähle nacheinander alle verfügbaren Versandarten aus und prüfe, ob die Versandkosten, Lieferzeiten und Gesamtsummen jeweils korrekt aktualisiert werden.
        - Dokumentiere für jede Versandart die angezeigten Kosten, Lieferzeiten und Hinweise (als Kommentar).
    c) Prüfe, ob die Lieferzeit in der Bestellübersicht und in der Bestellbestätigung (Seite, E-Mail) korrekt angezeigt wird.
    d) Simuliere einen Wechsel der Versandart nach Eingabe der Adresse und prüfe, ob alle Werte korrekt neu berechnet werden.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Versandarten korrekt angeboten und berechnet?
        - Stimmen die Lieferzeiten und Versandkosten in allen Anzeigen?
        - Werden Änderungen nach Wechsel der Versandart sofort übernommen?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Versandkosten falsch", "Lieferzeit fehlt").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Versandarten und Berechnungen funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Fehlerfälle abdecken und dokumentieren.
88. Teste verschiedene Zahlungsarten bei großen Bestellungen. Prüfe Validierung, Fehlerfälle, ob Zahlungsdaten nicht mehrfach gespeichert werden und ob nach Abbruch der Zahlung der Warenkorb erhalten bleibt. Kontrolliere, ob nach erfolgreicher Zahlung die Bestätigung erscheint.
88. Teste alle verfügbaren Zahlungsarten bei einer großen Bestellung und prüfe Validierung, Fehlerfälle und Datenhandling:
    a) Lege mindestens 10 verschiedene Produkte in den Warenkorb und gehe zur Kasse.
    b) Wähle nacheinander alle verfügbaren Zahlungsarten aus und prüfe, ob die Validierung, Weiterleitung und Anzeige für jede Zahlungsart korrekt funktioniert.
        - Simuliere Fehlerfälle (z.B. ungültige Kreditkarte, abgelaufene Karte, Abbruch der Zahlung) und prüfe, ob der Warenkorb erhalten bleibt und eine verständliche Fehlermeldung erscheint.
        - Prüfe, ob Zahlungsdaten nicht mehrfach gespeichert werden und keine sensiblen Daten im UI/Netzwerk sichtbar sind.
        - Dokumentiere für jede Zahlungsart die wichtigsten Prüfungen und Auffälligkeiten (als Kommentar).
    c) Schließe eine Zahlung erfolgreich ab und prüfe, ob die Bestätigung erscheint und die Bestellung korrekt übernommen wird.
    d) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Zahlungsarten korrekt validiert und weitergeleitet?
        - Werden Zahlungsdaten sicher und nicht mehrfach gespeichert?
        - Bleibt der Warenkorb nach Abbruch erhalten?
        - Erscheint nach erfolgreicher Zahlung die Bestätigung?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    e) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Zahlungsdaten unsicher", "Warenkorb leer nach Abbruch").
    f) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Zahlungsarten und Sicherheit funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Fehlerfälle abdecken und dokumentieren.
89. Prüfe, ob die Bestellbestätigung alle Produkte, Preise, Rabatte, Versandkosten, Lieferadresse und Zahlungsart korrekt auflistet, keine Daten fehlen und ob die Bestätigung als PDF herunterladbar ist. Kontrolliere, ob die E-Mail keine sensiblen Daten enthält.
89. Prüfe die Bestellbestätigung nach einer großen Bestellung auf Vollständigkeit, Korrektheit und Datenschutz:
    a) Schließe eine große Bestellung ab und prüfe, ob die Bestellbestätigung (Seite, E-Mail, PDF) erscheint.
    b) Kontrolliere, ob alle Produkte, Preise, Rabatte, Versandkosten, Lieferadresse und Zahlungsart korrekt und vollständig aufgelistet werden.
        - Vergleiche die Angaben mit den Daten aus dem Warenkorb und der Kasse (als Kommentar dokumentieren).
    c) Prüfe, ob die Bestätigung als PDF herunterladbar ist und ob das PDF alle Daten korrekt enthält.
    d) Kontrolliere, ob in der E-Mail und im PDF keine sensiblen Daten (z.B. vollständige Kreditkartennummer) enthalten sind.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Sind alle Angaben vollständig und korrekt?
        - Stimmen die Daten mit dem Warenkorb und der Kasse überein?
        - Ist das PDF korrekt und vollständig?
        - Sind keine sensiblen Daten enthalten?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "PDF fehlerhaft", "Daten fehlen", "Datenschutzproblem").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Bestellbestätigung und Datenschutz funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Angaben und Datenschutzaspekte prüfen und dokumentieren.
90. Nach Abschluss einer Bestellung prüfe, ob der Warenkorb geleert, die Session aktualisiert, die Historie korrekt ist und ob nach erneutem Login keine alten Produkte mehr im Warenkorb sind. Kontrolliere, ob die Anzeige im Header stimmt.
91. Teste die Funktion "Konto löschen" als eingeloggter Nutzer und prüfe alle Kontrollpunkte und Folgeeffekte:
    a) Logge dich mit gültigen Nutzerdaten ein und öffne die Kontoeinstellungen.
    b) Suche die Option "Konto löschen" und prüfe, ob eine Sicherheitsabfrage (z.B. Passwort, Bestätigung) erscheint.
    c) Versuche, das Konto ohne Bestätigung zu löschen und prüfe, ob der Vorgang abgebrochen wird und eine Warnung erscheint.
    d) Bestätige die Löschung und prüfe, ob das Konto endgültig entfernt wird und eine Abmeldebestätigung erscheint.
    e) Versuche, dich mit den gelöschten Zugangsdaten erneut einzuloggen und prüfe, ob dies verhindert wird.
    f) Kontrolliere, ob alle persönlichen Daten (Bestellungen, Adressen, Wunschliste) entfernt wurden und keine Rückstände im UI sichtbar sind.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Löschung immer korrekt bestätigt und durchgeführt?
        - Sind alle Daten nach Löschung entfernt?
        - Ist ein erneuter Login unmöglich?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Konto bleibt bestehen", "Daten sichtbar nach Löschung").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Kontolöschung funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Folgeeffekte abdecken und dokumentieren.

92. Teste die Funktion "Zwei-Faktor-Authentifizierung (2FA) aktivieren/deaktivieren" und prüfe alle Kontrollpunkte und Fehlerfälle:
    a) Logge dich mit gültigen Nutzerdaten ein und öffne die Sicherheitseinstellungen.
    b) Aktiviere 2FA und prüfe, ob ein QR-Code oder ein Setup-Link angezeigt wird.
    c) Scanne den Code mit einer Authenticator-App und prüfe, ob ein Bestätigungscode abgefragt wird.
    d) Gib einen falschen Code ein und prüfe, ob eine Fehlermeldung erscheint und die Aktivierung verhindert wird.
    e) Gib einen korrekten Code ein und prüfe, ob die Aktivierung abgeschlossen wird und eine Bestätigung erscheint.
    f) Logge dich aus und wieder ein, prüfe, ob 2FA beim Login abgefragt wird und nur mit korrektem Code ein Login möglich ist.
    g) Deaktiviere 2FA und prüfe, ob eine Bestätigung und Sicherheitsabfrage erscheint.
    h) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird 2FA korrekt aktiviert und deaktiviert?
        - Werden Fehlerfälle (falscher Code) erkannt?
        - Ist der Login ohne 2FA nach Deaktivierung wieder möglich?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    i) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "2FA bleibt aktiv", "Fehlermeldung fehlt").
    j) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "2FA funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Fehlerfälle abdecken und dokumentieren.

93. Teste die Funktion "E-Mail-Adresse ändern" und prüfe alle Kontrollpunkte, Validierungen und Folgeeffekte:
    a) Logge dich mit gültigen Nutzerdaten ein und öffne die Kontoeinstellungen.
    b) Ändere die E-Mail-Adresse auf eine neue, noch nicht verwendete Adresse und prüfe, ob eine Bestätigungsmail versendet wird.
    c) Prüfe, ob die alte E-Mail bis zur Bestätigung weiterhin gültig bleibt und ein Login mit beiden Adressen möglich ist.
    d) Klicke auf den Bestätigungslink in der neuen E-Mail und prüfe, ob die Änderung abgeschlossen wird und nur noch die neue Adresse gültig ist.
    e) Versuche, die alte E-Mail erneut zu verwenden und prüfe, ob dies verhindert wird.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Änderung immer korrekt bestätigt und durchgeführt?
        - Ist die alte E-Mail nach Bestätigung ungültig?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "E-Mail bleibt gültig", "Bestätigung fehlt").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "E-Mail-Änderung funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Folgeeffekte abdecken und dokumentieren.

94. Teste die Funktion "Benachrichtigungseinstellungen ändern" und prüfe alle Kontrollpunkte, Validierungen und Folgeeffekte:
    a) Logge dich mit gültigen Nutzerdaten ein und öffne die Benachrichtigungseinstellungen.
    b) Aktiviere und deaktiviere verschiedene Benachrichtigungsarten (z.B. E-Mail, SMS, Push) und prüfe, ob die Änderungen sofort übernommen werden.
    c) Prüfe, ob nach Änderung der Einstellungen die entsprechenden Benachrichtigungen (z.B. bei Bestellung, Versand, Rabattaktionen) korrekt ausgelöst oder unterdrückt werden.
    d) Teste, ob die Einstellungen nach Logout/Login und Seitenwechsel erhalten bleiben.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Änderungen sofort übernommen?
        - Funktionieren die Benachrichtigungen wie eingestellt?
        - Bleiben die Einstellungen nach Login/Logout erhalten?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Einstellungen werden nicht gespeichert", "Benachrichtigung kommt trotzdem").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Benachrichtigungseinstellungen funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Folgeeffekte abdecken und dokumentieren.

95. Teste die Funktion "Sprache und Währung umstellen" und prüfe alle Kontrollpunkte, Validierungen und Folgeeffekte:
96. Teste die Funktion "Session-Timeout und automatische Abmeldung" und prüfe alle Kontrollpunkte und Folgeeffekte:
    a) Logge dich mit gültigen Nutzerdaten ein und prüfe, ob die Session korrekt gesetzt wird (Cookie, Header, Profilseite).
    b) Lasse die Seite für die maximale Sessiondauer (z.B. 30 Minuten) geöffnet, ohne Aktionen durchzuführen.
    c) Prüfe, ob nach Ablauf der Zeit eine automatische Abmeldung erfolgt und eine entsprechende Meldung angezeigt wird.
    d) Versuche, nach Timeout eine Aktion auszuführen (z.B. Seite neu laden, Produkt in den Warenkorb legen) und prüfe, ob ein erneuter Login erforderlich ist.
    e) Logge dich erneut ein und prüfe, ob die Session wieder korrekt gesetzt wird und alle Daten erhalten bleiben.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Erfolgt die automatische Abmeldung immer nach der vorgesehenen Zeit?
        - Wird eine verständliche Meldung angezeigt?
        - Ist ein erneuter Login problemlos möglich?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Timeout funktioniert nicht", "Session bleibt aktiv").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Session-Timeout funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Folgeeffekte abdecken und dokumentieren.

97. Teste die Funktion "Datenauskunft nach DSGVO" und prüfe alle Kontrollpunkte, Validierungen und Folgeeffekte:
    a) Logge dich mit gültigen Nutzerdaten ein und öffne die Kontoeinstellungen oder den Bereich "Datenschutz".
    b) Fordere eine Datenauskunft gemäß DSGVO an und prüfe, ob eine Bestätigung erscheint und die Anfrage korrekt verarbeitet wird.
    c) Prüfe, ob die Auskunft per E-Mail oder Download bereitgestellt wird und alle gespeicherten Daten enthält.
    d) Kontrolliere, ob sensible Daten (z.B. Passwörter, Zahlungsdaten) nicht enthalten sind.
    e) Prüfe, ob die Auskunft vollständig, verständlich und maschinenlesbar ist (z.B. JSON, CSV, PDF).
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Auskunft immer korrekt bereitgestellt?
        - Sind alle Daten enthalten, aber keine sensiblen?
        - Ist das Format verständlich und maschinenlesbar?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Daten fehlen", "Format unlesbar", "Passwort enthalten").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Datenauskunft funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Folgeeffekte abdecken und dokumentieren.

98. Teste die Funktion "Cookie-Banner und Einwilligungsmanagement" und prüfe alle Kontrollpunkte, Validierungen und Folgeeffekte:
    a) Öffne die Startseite und prüfe, ob ein Cookie-Banner erscheint und alle erforderlichen Informationen (Zwecke, Anbieter, Optionen) angezeigt werden.
    b) Akzeptiere alle Cookies und prüfe, ob die Einwilligung korrekt gespeichert und alle Cookies gesetzt werden.
    c) Lehne alle Cookies ab und prüfe, ob nur technisch notwendige Cookies gesetzt werden und die Einwilligung korrekt gespeichert wird.
    d) Öffne die Einstellungen für das Einwilligungsmanagement und ändere die Auswahl (z.B. nur Statistik erlauben) – prüfe, ob die Auswahl korrekt übernommen wird.
    e) Kontrolliere, ob die Einwilligung nach Seitenwechsel, Logout/Login und erneutem Besuch erhalten bleibt.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Optionen korrekt angeboten und gespeichert?
        - Werden Cookies entsprechend der Auswahl gesetzt?
        - Bleibt die Einwilligung nach Seitenwechsel erhalten?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Cookies werden trotz Ablehnung gesetzt", "Banner erscheint immer wieder").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Cookie-Banner und Einwilligung funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Folgeeffekte abdecken und dokumentieren.

99. Teste die Funktion "Barrierefreiheit (Accessibility) im gesamten Shop" und prüfe alle Kontrollpunkte, Validierungen und Folgeeffekte:
    a) Öffne die Startseite und prüfe, ob alle Bedienelemente per Tastatur erreichbar sind (Tab, Enter, Space).
    b) Prüfe, ob alle Bilder, Buttons und Links mit Alt-Texten, ARIA-Labels oder Rollen versehen sind.
    c) Teste die Seite mit einem Screenreader und prüfe, ob alle Inhalte verständlich vorgelesen werden.
    d) Prüfe, ob Farbkontraste, Schriftgrößen und Fokus-Indikatoren den WCAG-Richtlinien entsprechen.
    e) Kontrolliere, ob Formulare korrekt beschriftet und Fehlermeldungen barrierefrei ausgegeben werden.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Sind alle Elemente per Tastatur und Screenreader bedienbar?
        - Sind alle Inhalte verständlich und barrierefrei?
        - Gibt es Probleme mit Kontrasten, Fokus oder Beschriftungen?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Button ohne ARIA-Label", "Kontrast zu gering").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Barrierefreiheit ist gewährleistet" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Aspekte der Barrierefreiheit abdecken und dokumentieren.

100. Teste die Funktion "Systemverhalten bei hoher Last (Stresstest)" und prüfe alle Kontrollpunkte, Validierungen und Folgeeffekte:
    a) Simuliere viele gleichzeitige Nutzer (z.B. mit Tools wie k6, JMeter oder Cypress parallel) und prüfe, ob die Seite weiterhin erreichbar und bedienbar bleibt.
    b) Lege unter hoher Last viele Produkte in den Warenkorb, führe Bestellungen durch und prüfe, ob alle Aktionen korrekt verarbeitet werden.
    c) Kontrolliere, ob Ladezeiten, Fehlermeldungen und Systemreaktionen dokumentiert werden (z.B. Logs, Monitoring).
    d) Prüfe, ob Fehlermeldungen verständlich und benutzerfreundlich ausgegeben werden (z.B. "Bitte versuchen Sie es später erneut").
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Bleibt die Seite auch bei hoher Last erreichbar?
        - Werden alle Aktionen korrekt verarbeitet?
        - Sind Fehlermeldungen verständlich und hilfreich?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Seite nicht erreichbar", "Fehlermeldung unverständlich").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Systemverhalten bei Last ist korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Aspekte der Stabilität und Performance unter Last abdecken und dokumentieren.
    a) Logge dich ein und öffne die Einstellungen für Sprache und Währung.
    b) Stelle die Sprache auf mindestens zwei andere Sprachen um und prüfe, ob die gesamte Seite (Menüs, Produkte, Footer, Fehlermeldungen) korrekt übersetzt wird.
    c) Stelle die Währung auf mindestens zwei andere Währungen um und prüfe, ob alle Preise, Summen und Rabatte korrekt umgerechnet und angezeigt werden.
    d) Prüfe, ob die Einstellungen nach Logout/Login, Seitenwechsel und im Warenkorb/Checkout erhalten bleiben.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Werden alle Texte und Preise korrekt übersetzt/umgerechnet?
        - Bleiben die Einstellungen nach Login/Logout erhalten?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Währung wird nicht übernommen", "Texte nicht übersetzt").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Sprache und Währung funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Varianten und Folgeeffekte abdecken und dokumentieren.
90. Prüfe nach Abschluss einer Bestellung alle Folgeeffekte auf Warenkorb, Session, Historie und Anzeige:
    a) Schließe eine Bestellung ab und prüfe, ob der Warenkorb sofort geleert wird und die Anzeige im Header (Icon, Anzahl) auf 0 gesetzt wird.
    b) Prüfe, ob die Session weiterhin aktiv ist und der Nutzer eingeloggt bleibt.
    c) Öffne die Bestellhistorie und prüfe, ob die abgeschlossene Bestellung korrekt und vollständig angezeigt wird.
    d) Logge dich aus und wieder ein, prüfe, ob der Warenkorb leer bleibt und keine alten Produkte mehr angezeigt werden.
    e) Prüfe, ob nach erneutem Login die Anzeige im Header, die Historie und die Session korrekt sind.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird der Warenkorb nach Abschluss immer geleert?
        - Bleibt die Session aktiv und korrekt?
        - Ist die Historie nach Login/Logout immer korrekt?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Warenkorb bleibt gefüllt", "Historie fehlerhaft").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Warenkorb, Session und Historie funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll alle Folgeeffekte nach einer Bestellung prüfen und dokumentieren.

### **Level 7: Benutzerkonto & Historie**
91. Zeige die Bestellhistorie an und führe folgende Prüfungen und Aufgaben explizit durch:
    a) Logge dich mit gültigen Nutzerdaten ein und öffne die Bestellhistorie.
    b) Prüfe, ob alle vergangenen Bestellungen mit folgenden Details angezeigt werden:
        - Bestellnummer, Status, Datum, Gesamtpreis, Produktanzahl.
        - Dokumentiere die Anzahl der Bestellungen und die wichtigsten Daten als Kommentar.
    c) Prüfe, ob Filter- und Suchfunktion vorhanden und funktionsfähig sind (z.B. Suche nach Bestellnummer, Filter nach Zeitraum).
    d) Sortiere die Historie nach Datum und prüfe, ob die Reihenfolge korrekt ist (neueste zuerst).
    e) Klicke auf eine Bestellung und prüfe, ob die Detailansicht erscheint.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Sind alle Bestellungen vollständig und korrekt gelistet?
        - Funktionieren Filter und Suche zuverlässig?
        - Ist die Sortierung nachvollziehbar?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Bestellung fehlt", "Sortierung falsch").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Bestellhistorie korrekt angezeigt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

92. Öffne die Details einer Bestellung und führe folgende Prüfungen und Aufgaben explizit durch:
    a) Wähle eine Bestellung aus der Historie und öffne die Detailansicht.
    b) Prüfe, ob folgende Informationen korrekt angezeigt werden:
        - Alle Produkte (Name, Menge, Preis), Adressen (Rechnung/Lieferung), Versandart, Zahlungsart, Status, Bestelldatum.
        - Dokumentiere die wichtigsten Daten als Kommentar.
    c) Prüfe, ob die Rechnung als PDF herunterladbar ist und öffne die Datei nach Download.
        - Kontrolliere, ob das PDF alle Daten korrekt und vollständig enthält.
    d) Vergleiche die Details mit der Bestellübersicht und prüfe auf Abweichungen.
    e) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Stimmen alle Angaben mit der Übersicht überein?
        - Ist das PDF korrekt und vollständig?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    f) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "PDF fehlerhaft", "Daten fehlen").
    g) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Bestelldetails korrekt angezeigt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

93. Ändere die Adresse im Benutzerkonto und führe folgende Prüfungen und Aufgaben explizit durch:
    a) Logge dich ein und öffne die Adressverwaltung im Benutzerkonto.
    b) Ändere eine bestehende Adresse (z.B. Straße, PLZ) und speichere die Änderung.
    c) Prüfe, ob die Änderung für neue Bestellungen übernommen wird (neue Bestellung anlegen und Adresse prüfen).
    d) Prüfe, ob die Historie der alten Bestellungen erhalten bleibt (alte Adresse bleibt in alten Bestellungen sichtbar).
    e) Prüfe, ob die Änderung protokolliert wird (z.B. Änderungsdatum, Hinweis im Konto).
    f) Prüfe, ob die alte Adresse nicht mehr auswählbar ist.
    g) Kontrolliere, ob die neue Adresse in der Bestellübersicht erscheint.
    h) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Änderung immer korrekt übernommen?
        - Bleibt die Historie erhalten?
        - Ist die alte Adresse nicht mehr auswählbar?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    i) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Adresse bleibt auswählbar", "Historie fehlerhaft").
    j) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Adressänderung funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

94. Ändere das Passwort im Benutzerkonto und führe folgende Prüfungen und Aufgaben explizit durch:
    a) Logge dich ein und öffne die Kontoeinstellungen.
    b) Ändere das Passwort (altes Passwort eingeben, neues Passwort setzen, bestätigen).
    c) Prüfe, ob nach Änderung ein erneuter Login erforderlich ist (Session abgelaufen).
    d) Versuche, dich mit dem alten Passwort einzuloggen (sollte nicht mehr funktionieren).
    e) Logge dich mit dem neuen Passwort ein und prüfe, ob der Login möglich ist.
    f) Kontrolliere, ob nach Änderung eine Bestätigungsmail versendet wird.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird ein erneuter Login erzwungen?
        - Funktioniert das alte Passwort nicht mehr?
        - Kommt die Bestätigungsmail korrekt an?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Session bleibt aktiv", "Mail fehlt").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Passwortänderung funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

95. Abonniere den Newsletter und führe folgende Prüfungen und Aufgaben explizit durch:
    a) Logge dich ein und öffne die Newsletter-Einstellungen.
    b) Abonniere den Newsletter und prüfe, ob eine Bestätigungsmail versendet wird (Mock/Log prüfen).
    c) Prüfe, ob der Bestätigungslink nur einmal nutzbar ist.
    d) Kontrolliere, ob das Abo in der Kontoverwaltung angezeigt wird.
    e) Melde dich vom Newsletter ab und prüfe, ob nach Abbestellen keine Mails mehr kommen.
    f) Kontrolliere, ob die Bestätigungsmail korrekt ankommt.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Kommt die Bestätigungsmail immer an?
        - Ist der Link wirklich nur einmal nutzbar?
        - Wird das Abo korrekt angezeigt?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Mail fehlt", "Abo bleibt bestehen").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Newsletter-Funktion funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

96. Versuche, den Newsletter mit ungültiger E-Mail zu abonnieren und führe folgende Prüfungen und Aufgaben explizit durch:
    a) Öffne das Newsletter-Formular und gib eine ungültige E-Mail ein (z.B. ohne @, mit Leerzeichen).
    b) Prüfe, ob die Validierung greift und eine passende Fehlermeldung erscheint.
    c) Prüfe, ob keine E-Mail versendet wird.
    d) Korrigiere die E-Mail und prüfe, ob das Abo dann möglich ist.
    e) Kontrolliere, ob die Fehlermeldung verständlich ist.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Fehlermeldung immer angezeigt?
        - Wird keine E-Mail versendet?
        - Ist das Abo nach Korrektur möglich?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Fehlermeldung fehlt", "Abo trotzdem möglich").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Newsletter-Validierung funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

97. Sende das Kontaktformular ab und führe folgende Prüfungen und Aufgaben explizit durch:
    a) Öffne das Kontaktformular und fülle alle Pflichtfelder mit gültigen Daten aus.
    b) Sende das Formular ab und prüfe, ob eine Bestätigung erscheint.
    c) Prüfe, ob eine E-Mail versendet wird (Mock/Log prüfen).
    d) Kontrolliere, ob die Anfrage in der Historie erscheint.
    e) Prüfe, ob nach Absenden alle Felder geleert werden.
    f) Kontrolliere, ob die Bestätigungsmail korrekt ankommt.
    g) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Erscheint immer eine Bestätigung?
        - Kommt die Mail korrekt an?
        - Wird die Anfrage in der Historie angezeigt?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    h) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Mail fehlt", "Felder bleiben gefüllt").
    i) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Kontaktformular funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

98. Sende das Kontaktformular mit ungültigen Daten ab und führe folgende Prüfungen und Aufgaben explizit durch:
    a) Öffne das Kontaktformular und gib ungültige Daten ein (z.B. leere Felder, ungültige E-Mail).
    b) Prüfe, ob die Validierung greift und eine passende Fehlermeldung erscheint.
    c) Prüfe, ob die Felder nach Fehlern automatisch fokussiert werden.
    d) Korrigiere die Daten und prüfe, ob das Absenden dann möglich ist.
    e) Kontrolliere, ob die Fehlermeldungen verständlich sind.
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird die Fehlermeldung immer angezeigt?
        - Werden die Felder nach Fehlern fokussiert?
        - Ist das Absenden nach Korrektur möglich?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Fehlermeldung fehlt", "Absenden trotzdem möglich").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Kontaktformular-Validierung funktioniert korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

99. Nach Logout: Versuche, auf geschützte Seiten zuzugreifen und führe folgende Prüfungen und Aufgaben explizit durch:
    a) Logge dich aus und versuche, auf eine geschützte Seite (z.B. Profil, Bestellhistorie) zuzugreifen.
    b) Prüfe, ob ein Redirect zum Login erfolgt und keine Sessiondaten mehr vorhanden sind.
    c) Kontrolliere, ob keine Benutzerdaten oder persönliche Daten mehr angezeigt werden.
    d) Logge dich erneut ein und prüfe, ob wieder alles wie erwartet funktioniert.
    e) Kontrolliere, ob nach Logout der Benutzername nicht mehr erscheint (Header, Profilseite).
    f) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!):
        - Wird immer ein Redirect zum Login durchgeführt?
        - Sind nach Logout keine Daten mehr sichtbar?
        - Funktioniert nach erneutem Login wieder alles?
        - Gibt es Fehler, Unklarheiten oder fehlende Features?
    g) Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Daten sichtbar nach Logout", "Redirect fehlt").
    h) Schreibe am Ende des Tests ein kurzes Fazit als Kommentar: "Logout und Zugriffsschutz funktionieren korrekt" ODER "Folgende Probleme gefunden: ...".
    Hinweis: Jeder Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein!

100. Abschlusstest: Führe einen vollständigen End-to-End-Test durch und dokumentiere jeden Schritt explizit:

    **a) Registrierung mit neuen Nutzerdaten**
    - Öffne die Registrierungsseite und fülle alle Pflichtfelder mit realistischen, aber fiktiven Daten aus.
    - Prüfe, ob für jedes Feld eine Validierung erfolgt (z.B. E-Mail-Format, Passwortregeln, Pflichtfelder).
    - Dokumentiere die verwendeten Testdaten im Testcode (als Kommentar, keine echten Daten!).
    - Sende das Formular ab und prüfe, ob eine Bestätigungsmail versendet wird (Mock/Log prüfen).
    - Öffne die Bestätigungsmail, prüfe den Link und klicke ihn an.
    - **Kontrollfragen:** Sind alle Validierungen verständlich? Kommt die Mail korrekt an? Ist der Link nur einmal nutzbar?

    **b) Login mit den neuen Daten**
    - Logge dich mit den neuen Zugangsdaten ein.
    - Prüfe, ob die Session korrekt gesetzt wird (Cookie, Header, Profilseite).
    - Kontrolliere, ob der Benutzername überall korrekt angezeigt wird.
    - Dokumentiere die Sessiondaten (z.B. Cookie-Name, Ablaufzeit) als Kommentar.

    **c) Produktsuche und Navigation**
    - Suche nach mindestens drei verschiedenen Produkten aus unterschiedlichen Kategorien (z.B. "Book", "Computer", "Gift Card").
    - Prüfe, ob die Suchergebnisse korrekt sind (Anzahl, Titel, Preis, Kategorie).
    - Öffne jeweils die Produktdetailseite und dokumentiere die wichtigsten Produktdaten (Name, Preis, Kategorie, Bild).
    - **Kontrollfragen:** Sind alle Suchergebnisse relevant? Gibt es fehlerhafte oder doppelte Einträge?

    **d) Produkte in den Warenkorb legen**
    - Lege mindestens 10 Produkte aus verschiedenen Kategorien in den Warenkorb (verschiedene Varianten, Mengen, Farben, Größen).
    - Prüfe nach jedem Hinzufügen, ob die Warenkorbanzeige (Icon, Summe, Anzahl) sofort aktualisiert wird.
    - Dokumentiere für jedes Produkt: Name, Variante, Menge, Preis, Kategorie.
    - **Kontrollfragen:** Werden alle Produkte korrekt angezeigt? Stimmen die Summen und Rabatte?

    **e) Warenkorb und Checkout vorbereiten**
    - Öffne den Warenkorb und prüfe, ob alle Produkte mit korrekten Varianten, Mengen und Preisen angezeigt werden.
    - Kontrolliere, ob die Gesamtsumme stimmt und alle Rabatte/Versandkosten korrekt berechnet werden.
    - Prüfe, ob Produktbilder, Namen und Varianten eindeutig zuordenbar sind.
    - Dokumentiere Auffälligkeiten (z.B. "Rabatt fehlt", "Bild falsch").

    **f) Checkout durchführen**
    - Gehe zur Kasse und prüfe, ob alle Pflichtfelder (Adresse, Versandart, Zahlungsart) vorausgefüllt oder korrekt leer sind.
    - Lasse absichtlich ein Pflichtfeld leer und prüfe, ob eine Fehlermeldung erscheint und das Feld markiert wird.
    - Fülle alle Felder korrekt aus und dokumentiere die eingegebenen Daten (als Kommentar, keine echten Daten verwenden!).
    - Wähle verschiedene Versand- und Zahlungsarten aus und prüfe, ob sich die Gesamtsumme und die Anzeige entsprechend ändern.
    - Teste mindestens zwei verschiedene Kombinationen und dokumentiere die Unterschiede.
    - **Kontrollfragen:** Werden alle Pflichtfelder validiert? Stimmen alle Summen, Rabatte und Versandkosten?

    **g) Bestellung abschließen**
    - Schließe die Bestellung ab und prüfe, ob eine Bestellbestätigung erscheint (Seite, E-Mail, Bestellnummer).
    - Kontrolliere, ob die Bestelldaten in der Bestellhistorie korrekt übernommen werden.
    - Prüfe, ob die Session nach Abschluss erhalten bleibt und der Nutzer eingeloggt bleibt.
    - Dokumentiere die Bestellnummer, Bestelldaten und E-Mail-Inhalt als Kommentar.
    - **Kontrollfragen:** Sind alle Daten korrekt? Kommt die Bestätigungsmail an? Gibt es Fehler im Ablauf?

    **h) Nachkontrolle und Logout**
    - Öffne die Bestellhistorie und prüfe, ob die abgeschlossene Bestellung korrekt und vollständig angezeigt wird.
    - Logge dich aus und prüfe, ob nach Logout keine Daten mehr sichtbar sind (Warenkorb, Historie, Header).
    - Versuche, auf geschützte Seiten zuzugreifen und prüfe, ob ein Redirect zum Login erfolgt.
    - Logge dich erneut ein und prüfe, ob alle Daten korrekt angezeigt werden (Historie, Profil, Warenkorb leer).
    - **Kontrollfragen:** Bleibt der Warenkorb nach Logout leer? Ist die Historie nach Login/Logout immer korrekt?

    **i) Sicherheits- und Integritätschecks**
    - Prüfe, ob keine sensiblen Daten (z.B. Passwörter, Zahlungsdaten) in E-Mails, UI oder Netzwerk sichtbar sind.
    - Teste, ob nach jedem Schritt keine Datenlecks oder Sicherheitslücken auftreten (z.B. Session-Fixation, CSRF, XSS).
    - Dokumentiere alle sicherheitsrelevanten Auffälligkeiten als Kommentar.

    **j) Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!)**
    - Funktioniert jeder Schritt ohne Fehler und wie erwartet?
    - Sind alle Daten nach jedem Schritt korrekt und konsistent?
    - Gibt es Sicherheitslücken, Datenlecks oder unklare Abläufe?
    - Sind alle E-Mails korrekt, vollständig und ohne sensible Daten?
    - Gibt es Fehler, Unklarheiten oder fehlende Features?

    **k) Dokumentation und Abschluss**
    - Dokumentiere alle Auffälligkeiten, Fehler oder fehlende Features im Testcode als Kommentar (z.B. "Mail fehlt", "Historie fehlerhaft", "Daten nach Logout sichtbar").
    - Notiere für jeden Prüfschritt, ob er bestanden wurde (z.B. // OK oder // FEHLER: ...).
    - Schreibe am Ende des Tests ein ausführliches Fazit als Kommentar: "Abschlusstest erfolgreich, alle Funktionen korrekt" ODER "Folgende Probleme gefunden: ...".
    - Füge ggf. Verbesserungsvorschläge hinzu (z.B. "Validierung optimieren", "Sicherheitslücke melden").

    > **Hinweis:** Jeder einzelne Prüfschritt muss im Testcode nachvollziehbar und kommentiert sein! Ziel: Der Tester soll den gesamten Ablauf, alle Datenflüsse, Sicherheitsaspekte und die Nutzererfahrung maximal detailliert prüfen und dokumentieren. Jeder Schritt, jede Entscheidung und jede Auffälligkeit muss im Testcode sichtbar und begründet sein.

---

**Hinweis:**  
Jeder Testfall ist eine kleine Aufgabe. Arbeite sie der Reihe nach ab und frage bei Problemen nach Hilfe!  
Kommentiere deinen Code und schreibe für jeden Test eine eigene `it`-Funktion.

**Wichtig:**  
- **Mache jeden Tag mindestens einen Commit** und pushe diesen auch ins Repository (hochladen!).
- **Ziel:** Schaffe mindestens **ein Level pro Woche**. So bleibst du im Zeitplan und kannst regelmäßig deinen Fortschritt zeigen.

---

