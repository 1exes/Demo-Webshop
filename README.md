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

Die Testfälle sind in 10 Level eingeteilt.  
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
31. Öffne Produktdetailseite aus "Books"
32. Produktbild ist sichtbar
33. Produktbeschreibung ist sichtbar
34. Preis wird angezeigt
35. Bewertungen werden angezeigt
36. Produkt vergleichen-Funktion nutzen
37. Teilen auf Social Media Buttons sichtbar
38. Filtere "Books" nach Preis
39. Sortiere "Books" nach Preis aufsteigend
40. Sortiere "Books" nach Name A-Z
41. Filtere "Computers" nach Hersteller
42. Sortiere "Books" nach Preis absteigend
43. Produkt mit Menge 0 in den Warenkorb legen (Fehlerfall)
44. Produkt mit zu hoher Menge in den Warenkorb legen (Fehlerfall)
45. Produkt aus Wunschliste löschen und prüfen

### **Level 4: Warenkorb & Wunschliste**
46. Produkt in den Warenkorb legen
47. Produkt zur Wunschliste hinzufügen
48. Anzahl im Warenkorb erhöhen/verringern
49. Warenkorb-Seite öffnet sich korrekt
50. Produkt aus Warenkorb entfernen
51. Menge im Warenkorb ändern
52. Warenkorb leeren
53. Große Bestellung: 10 verschiedene Produkte in den Warenkorb legen
54. Große Bestellung: 20 gleiche Produkte in den Warenkorb legen
55. Große Bestellung: 50 verschiedene Produkte in den Warenkorb legen
56. Große Bestellung: 100 gleiche Produkte in den Warenkorb legen
57. Große Bestellung und alle Produkte wieder entfernen
58. Große Bestellung und Mengen im Warenkorb ändern
59. Produkt aus Wunschliste entfernen
60. Wunschliste anzeigen

### **Level 5: Registrierung & Login**
61. Registrierung mit gültigen Daten
62. Registrierung mit bereits verwendeter E-Mail
63. Registrierung mit ungültiger E-Mail
64. Registrierung ohne Pflichtfelder
65. Registrierung mit zu kurzem Passwort
66. Registrierung mit zu langem Namen
67. Login mit gültigen Daten
68. Login mit ungültigem Passwort
69. Login mit nicht existierender E-Mail
70. Nach Login wird Benutzername angezeigt
71. Passwort vergessen-Funktion aufrufbar
72. Logout funktioniert
73. Pflichtfelder leer lassen und Validierung prüfen
74. Falsches Passwort beim Login
75. Login nach langer Inaktivität (Session abgelaufen)

### **Level 6: Checkout & Bestellung**
76. Weiter zur Kasse funktioniert
77. Bestellung als Gast durchführen
78. Bestellung als registrierter Nutzer durchführen
79. Versandoption auswählen
80. Zahlungsoption auswählen
81. Bestellung abschließen und Bestätigung erhalten
82. Checkout mit ungültiger Adresse
83. Checkout mit ungültiger Zahlungsart
84. Bestellung ohne Produkte im Warenkorb versuchen
85. Große Bestellung als Gast durchführen
86. Große Bestellung als registrierter Nutzer durchführen
87. Große Bestellung mit verschiedenen Versandarten testen
88. Große Bestellung mit verschiedenen Zahlungsarten testen
89. Bestellbestätigung prüfen
90. Nach Bestellung: Warenkorb ist leer

### **Level 7: Benutzerkonto & Historie**
91. Bestellhistorie anzeigen
92. Details einer Bestellung einsehen
93. Adresse im Benutzerkonto ändern
94. Passwort im Benutzerkonto ändern
95. Newsletter abonnieren
96. Newsletter mit ungültiger E-Mail abonnieren
97. Kontaktformular absenden
98. Kontaktformular mit ungültigen Daten absenden
99. Nach Logout: Zugriff auf geschützte Seiten nicht möglich
100. **Abschlusstest:** Registrierung, Login, Produktsuche, große Bestellung (mind. 10 Produkte, verschiedene Kategorien), Checkout, Bestellbestätigung, Logout – alles in einem Testfall!

---

**Hinweis:**  
Jeder Testfall ist eine kleine Aufgabe. Arbeite sie der Reihe nach ab und frage bei Problemen nach Hilfe!  
Kommentiere deinen Code und schreibe für jeden Test eine eigene `it`-Funktion.

**Wichtig:**  
- **Mache jeden Tag mindestens einen Commit** und pushe diesen auch ins Repository (hochladen!).
- **Ziel:** Schaffe mindestens **ein Level pro Woche**. So bleibst du im Zeitplan und kannst regelmäßig deinen Fortschritt zeigen.

---

