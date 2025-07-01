# Demo-Webshop1. Voraussetzungen

    Node.js und npm sollten auf deinem Rechner installiert sein.
    Prüfe dies mit:
    bash

    node -v
    npm -v

2. Cypress installieren

Wechsle in dein Projektverzeichnis (z.B. Demo-Webshop) und führe aus:
bash

npm init -y                 # Falls noch keine package.json existiert
npm install cypress --save-dev

3. Cypress öffnen & Grundstruktur anlegen

Starte Cypress mit:
bash

npx cypress open

Dadurch wird ein Verzeichnis cypress/ erstellt und das Cypress Test-UI geöffnet.
4. Beispiel-Test erstellen

Erstelle im Verzeichnis cypress/e2e eine Datei, z. B. demo.cy.js mit folgendem Inhalt:
js

describe('Demo-Webshop Startseite', () => {
  it('sollte die Startseite laden', () => {
    cy.visit('http://localhost:3000'); // Passe die URL ggf. an
    cy.contains('Demo-Webshop');
  });
});

5. Tests ausführen

    Über das geöffnete Cypress-Fenster kannst du Tests per Klick ausführen.
    Alternativ per Konsole (Headless-Modus):
    bash

    npx cypress run

6. Nützliche Cypress-Kommandos

    cy.visit('URL') – Seite besuchen
    cy.get('selector') – Element ansprechen
    cy.contains('Text') – Element mit Text finden
    cy.click() – Element klicken

7. Tipps

    Dokumentation: https://docs.cypress.io/
    Cypress kann auch Screenshots und Videos der Testläufe speichern.
    Tests können über CI/CD laufen, z.B. mit GitHub Actions.

