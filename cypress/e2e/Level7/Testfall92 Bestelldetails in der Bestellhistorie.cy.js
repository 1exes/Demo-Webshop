describe(' Bestelldetails in Bestellhistorie anzeigen', () => {
  it('soll Bestelldetails prüfen und mit der PDF vergleichen  ', () => {
    cy.visit('https://demowebshop.tricentis.com/') 
    cy.contains('Log in').click();
    cy.get('#Email').type('Johnii3000@gmail.com');
    cy.get('#Password').type('Haus1423?!');
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();
    cy.get('a.account').first().click();
    cy.get('a.inactive').eq(1).click()
    cy.get('input.button-2.order-details-button').first().click()
    cy.get('a.button-2.pdf-order-button').first().click();

    
  });
});
    



//  Produktdetails: Name , Menge() , Preis[]: Create Your Own Jewelry(1) [100.00] Blue Jeans(1)[1.00]
//  Rechnungsadresse 
//  Lieferungsadresse 
//  Versandart 
//  Zahlungsart 
//  Status 
//  Bestelldatum
//  Stimmen alle Angaben mit der Übersicht überein? Nein, Status der Bestellung fehlt auf der PDF, Email adfesse fehlt auf der PDF
//  Ist das PDF korrekt und vollständig?- Nein da einige Daten wie oben genannt fehlen
//  Folgende Probleme gefunden: oben genannte Daten fehlen sonst funktioniert alles korrekt 
   
