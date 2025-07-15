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
31. Öffne eine Produktdetailseite aus "Books" und prüfe, ob alle Produktbilder in voller Auflösung geladen werden und die Zoomfunktion funktioniert.
32. Prüfe, ob das Produktbild nach Klick auf das Vorschaubild in einer Lightbox angezeigt wird und ob die Navigation zwischen mehreren Bildern möglich ist.
33. Prüfe, ob die Produktbeschreibung HTML-Elemente korrekt rendert (z.B. Listen, Links, Formatierungen) und ob externe Links in neuem Tab öffnen.
34. Preis wird korrekt angezeigt und ändert sich bei Auswahl verschiedener Produktvarianten (z.B. Hardcover/Taschenbuch); prüfe auch, ob Rabatte korrekt angezeigt werden.
35. Bewertungen werden angezeigt, können nach "Hilfreichste" und "Neueste" sortiert werden und es ist nicht möglich, mehrfach zu bewerten.
36. Füge zwei verschiedene Produkte zum Vergleich hinzu, öffne die Vergleichsseite, prüfe die Unterschiede und entferne ein Produkt wieder aus dem Vergleich.
37. Teile ein Produkt auf Social Media (z.B. Facebook, Twitter) und prüfe, ob das Teilen-Fenster korrekt erscheint und die Produktdaten übernommen werden.
38. Filtere "Books" nach einem Preisbereich und nach Kategorie, prüfe, ob nur passende Produkte angezeigt werden und Filter zurückgesetzt werden können.
39. Sortiere "Books" nach Preis aufsteigend und prüfe, ob die Sortierung korrekt ist (inkl. Preisgleichstand und Produkte ohne Preis).
40. Sortiere "Books" nach Name A-Z und prüfe, ob Sonderzeichen, Umlaute und Zahlen korrekt einsortiert werden.
41. Filtere "Computers" nach Hersteller und Preis, prüfe, ob Filterkombinationen korrekt funktionieren und keine Produkte doppelt erscheinen.
42. Sortiere "Books" nach Preis absteigend und prüfe, ob Produkte mit gleichem Preis korrekt gruppiert werden und die Sortierung nach Entfernen eines Produkts erhalten bleibt.
43. Versuche, ein Produkt mit Menge 0 oder negativem Wert in den Warenkorb zu legen und prüfe, ob eine Fehlermeldung erscheint und kein Produkt hinzugefügt wird.
44. Versuche, ein Produkt mit einer unrealistisch hohen Menge (z.B. 9999) in den Warenkorb zu legen, prüfe Begrenzung, Fehlermeldung und ob die Menge automatisch korrigiert wird.
45. Entferne ein Produkt aus der Wunschliste, prüfe, ob die Wunschliste leer ist, eine entsprechende Meldung angezeigt wird und keine Geistereinträge bleiben.

### **Level 4: Warenkorb & Wunschliste**
46. Lege mehrere Produkte mit unterschiedlichen Varianten (z.B. Größe, Farbe) in den Warenkorb, prüfe, ob alle Varianten korrekt angezeigt werden und ob die Warenkorbsumme stimmt.
47. Füge ein Produkt zur Wunschliste hinzu, logge dich aus und wieder ein, prüfe, ob das Produkt noch vorhanden ist und ob die Wunschliste zwischen Geräten synchronisiert wird.
48. Erhöhe und verringere die Anzahl eines Produkts im Warenkorb, prüfe, ob der Gesamtpreis dynamisch angepasst wird und ob eine Mindest-/Maximalmenge eingehalten wird.
49. Öffne die Warenkorb-Seite in mehreren Browser-Tabs, ändere die Menge in einem Tab, prüfe die Synchronisation und ob Konflikte korrekt gelöst werden.
50. Entferne ein Produkt aus dem Warenkorb, prüfe, ob die Seite ohne Neuladen aktualisiert wird (AJAX) und ob die Warenkorbsumme stimmt.
51. Ändere die Menge eines Produkts im Warenkorb auf einen ungültigen Wert (z.B. Buchstaben, Sonderzeichen), prüfe die Validierung und ob die Menge automatisch korrigiert wird.
52. Leere den Warenkorb, prüfe, ob eine Bestätigungsmeldung erscheint, der Warenkorb wirklich leer ist und ob ein Undo möglich ist.
53. Lege 10 verschiedene Produkte in den Warenkorb, prüfe die Performance, ob alle Produkte korrekt angezeigt werden und ob die Warenkorbsumme stimmt.
54. Lege 20 gleiche Produkte in den Warenkorb, prüfe, ob Mengenrabatte oder Hinweise angezeigt werden und ob die Rabattberechnung korrekt ist.
55. Lege 50 verschiedene Produkte in den Warenkorb, prüfe, ob die Seite performant bleibt, keine Fehler auftreten und ob die Warenkorbanzeige paginiert wird.
56. Lege 100 gleiche Produkte in den Warenkorb, prüfe, ob eine Begrenzung greift, eine Warnung erscheint und ob die Seite weiterhin bedienbar bleibt.
57. Führe eine große Bestellung durch und entferne alle Produkte wieder, prüfe, ob der Warenkorb korrekt geleert wird und ob die Bestellhistorie stimmt.
58. Führe eine große Bestellung durch und ändere die Mengen im Warenkorb mehrfach, prüfe die Preisberechnung, Validierung und ob die Änderungen in der Bestellübersicht übernommen werden.
59. Entferne ein Produkt aus der Wunschliste, prüfe, ob die Anzahl korrekt aktualisiert wird, keine Geistereinträge bleiben und ob eine Rückgängig-Funktion angeboten wird.
60. Zeige die Wunschliste an, prüfe, ob Produkte nach Hinzufügungsdatum sortiert sind, ob Filter/Suche funktionieren und ob leere Wunschlisten korrekt behandelt werden.

### **Level 5: Registrierung & Login**
61. Registrierung mit gültigen Daten und anschließender E-Mail-Bestätigung (sofern vorhanden), prüfe, ob die E-Mail einen Bestätigungslink enthält und dieser nur einmal nutzbar ist.
62. Registrierung mit bereits verwendeter E-Mail, prüfe, ob eine eindeutige Fehlermeldung erscheint und keine Registrierung möglich ist.
63. Registrierung mit ungültiger E-Mail (z.B. ohne @, mit Leerzeichen), prüfe die Validierung und ob die Eingabe automatisch korrigiert wird.
64. Registrierung ohne Pflichtfelder, prüfe, ob alle Pflichtfelder korrekt markiert und validiert werden und ob ein Absenden verhindert wird.
65. Registrierung mit zu kurzem Passwort, prüfe Passwortregeln, Fehlermeldungen und ob ein Passwort-Strength-Meter angezeigt wird.
66. Registrierung mit zu langem Namen (>255 Zeichen), prüfe, ob eine Begrenzung greift und eine Fehlermeldung erscheint.
67. Login mit gültigen Daten, prüfe, ob ein Session-Cookie gesetzt wird, der Benutzername angezeigt wird und die Session nach Browser-Neustart erhalten bleibt.
68. Login mit ungültigem Passwort, prüfe, ob keine Session erstellt wird, eine Fehlermeldung erscheint und ein Rate-Limit greift.
69. Login mit nicht existierender E-Mail, prüfe, ob eine generische Fehlermeldung (ohne Hinweis auf Existenz) erscheint und keine Session erstellt wird.
70. Nach Login wird der Benutzername überall korrekt angezeigt (Header, Profilseite, Bestellübersicht) und ist nicht manipulierbar.
71. Passwort vergessen-Funktion aufrufen, prüfe, ob eine E-Mail versendet wird (Mock/Log prüfen), der Link nur einmal nutzbar ist und ein sicheres neues Passwort gesetzt werden kann.
72. Logout durchführen, prüfe, ob alle Sessiondaten gelöscht werden, ein Redirect erfolgt und ein erneuter Zugriff auf geschützte Seiten nicht möglich ist.
73. Lasse alle Pflichtfelder leer und prüfe, ob die Validierung für jedes Feld einzeln angezeigt wird und ob die Felder nach Fehlern fokussiert werden.
74. Falsches Passwort beim Login mehrfach eingeben, prüfe, ob ein Captcha oder eine Sperre erscheint und wie lange die Sperre anhält.
75. Login nach langer Inaktivität (Session abgelaufen), prüfe, ob ein erneuter Login erforderlich ist und ob die Session sicher abläuft.

### **Level 6: Checkout & Bestellung**
76. Führe den Checkout-Prozess mit mehreren Produkten, verschiedenen Versandoptionen und Zahlungsarten durch, prüfe die Preisberechnung, Lieferzeiten und ob alle Zwischensummen korrekt sind.
77. Bestellung als Gast durchführen, prüfe, ob keine Benutzerdaten gespeichert werden, die E-Mail-Bestätigung korrekt ist und keine Session erhalten bleibt.
78. Bestellung als registrierter Nutzer durchführen, prüfe, ob die Adresse vorausgefüllt ist, die Bestellhistorie aktualisiert wird und die Session erhalten bleibt.
79. Wähle verschiedene Versandoptionen, prüfe, ob sich Lieferzeit, Versandkosten und verfügbare Zahlungsarten korrekt ändern und ob die Auswahl gespeichert wird.
80. Wähle verschiedene Zahlungsoptionen (z.B. Kreditkarte, PayPal, Rechnung), prüfe Validierung, Weiterleitung, Fehlerfälle und ob Zahlungsdaten sicher übertragen werden.
81. Schließe eine Bestellung ab, prüfe, ob eine Bestellbestätigung per E-Mail versendet wird (Mock/Log prüfen), die Bestellnummer eindeutig ist und die Bestellung in der Historie erscheint.
82. Checkout mit ungültiger Adresse (z.B. fehlende PLZ, ungültige Straße), prüfe Validierung, Fehlermeldung und ob die Felder nach Fehlern fokussiert werden.
83. Checkout mit ungültiger Zahlungsart (z.B. abgelaufene Kreditkarte, ungültige IBAN), prüfe Validierung, Fehlermeldung und ob die Zahlungsdaten nicht gespeichert werden.
84. Versuche, eine Bestellung ohne Produkte im Warenkorb abzuschließen, prüfe, ob dies verhindert wird und eine passende Fehlermeldung erscheint.
85. Führe eine große Bestellung als Gast durch, prüfe Performance, Validierung, E-Mail-Bestätigung und ob die Bestellung nicht in der Historie erscheint.
86. Führe eine große Bestellung als registrierter Nutzer durch, prüfe, ob alle Daten korrekt übernommen werden, die Historie stimmt und die Session erhalten bleibt.
87. Teste verschiedene Versandarten bei großen Bestellungen, prüfe Preis-, Lieferzeitberechnung und ob Versandkosten korrekt summiert werden.
88. Teste verschiedene Zahlungsarten bei großen Bestellungen, prüfe Validierung, Fehlerfälle und ob Zahlungsdaten nicht mehrfach gespeichert werden.
89. Prüfe, ob die Bestellbestätigung alle Produkte, Preise, Rabatte, Versandkosten, Lieferadresse und Zahlungsart korrekt auflistet und keine Daten fehlen.
90. Nach Abschluss einer Bestellung prüfe, ob der Warenkorb geleert, die Session aktualisiert und die Historie korrekt ist.

### **Level 7: Benutzerkonto & Historie**
91. Zeige die Bestellhistorie an, prüfe, ob alle vergangenen Bestellungen mit Details, Status, Datum und Gesamtpreis angezeigt werden und ob Filter/Suche funktionieren.
92. Öffne die Details einer Bestellung, prüfe, ob alle Produkte, Preise, Adressen, Versand- und Zahlungsart korrekt sind und ob die Rechnung als PDF herunterladbar ist.
93. Ändere die Adresse im Benutzerkonto, prüfe, ob die Änderung für neue Bestellungen übernommen wird, die Historie erhalten bleibt und die Änderung protokolliert wird.
94. Ändere das Passwort im Benutzerkonto, prüfe, ob ein erneuter Login erforderlich ist, die Session abläuft und das alte Passwort nicht mehr funktioniert.
95. Abonniere den Newsletter, prüfe, ob eine Bestätigungsmail versendet wird (Mock/Log prüfen), der Link nur einmal nutzbar ist und das Abo in der Kontoverwaltung angezeigt wird.
96. Versuche, den Newsletter mit ungültiger E-Mail zu abonnieren, prüfe Validierung, Fehlermeldung und ob keine E-Mail versendet wird.
97. Sende das Kontaktformular ab, prüfe, ob eine Bestätigung erscheint, eine E-Mail versendet wird (Mock/Log prüfen) und die Anfrage in der Historie erscheint.
98. Sende das Kontaktformular mit ungültigen Daten ab, prüfe Validierung, Fehlermeldung und ob die Felder nach Fehlern fokussiert werden.
99. Nach Logout: Versuche, auf geschützte Seiten zuzugreifen, prüfe, ob ein Redirect zum Login erfolgt, keine Sessiondaten mehr vorhanden sind und keine Daten angezeigt werden.
100. Abschlusstest: Registrierung, Login, Produktsuche, große Bestellung (mind. 10 Produkte, verschiedene Kategorien), Checkout, Bestellbestätigung, Logout – alles in einem Testfall, prüfe Datenintegrität, keine Fehler im Ablauf, alle E-Mails korrekt und keine Sicherheitslücken.

---

**Hinweis:**  
Jeder Testfall ist eine kleine Aufgabe. Arbeite sie der Reihe nach ab und frage bei Problemen nach Hilfe!  
Kommentiere deinen Code und schreibe für jeden Test eine eigene `it`-Funktion.

**Wichtig:**  
- **Mache jeden Tag mindestens einen Commit** und pushe diesen auch ins Repository (hochladen!).
- **Ziel:** Schaffe mindestens **ein Level pro Woche**. So bleibst du im Zeitplan und kannst regelmäßig deinen Fortschritt zeigen.

---

