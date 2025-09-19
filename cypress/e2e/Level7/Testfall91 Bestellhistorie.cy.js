describe('Bestellhistorie anzeigen', () => {
  it('soll Bestellhistorie anzeigen ', () => {
    cy.visit('https://demowebshop.tricentis.com/') 
    cy.contains('Log in').click();
    cy.get('#Email').type('Johnii3000@gmail.com');
    cy.get('#Password').type('Haus1423?!');
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();
    cy.get('a.account').first().click();
    cy.get('a.inactive').eq(1).click()

    
  });
});
    



//Bestellnummer: wird angezeigt
//Status:wird angezeigt
//Datum: wird angezeigt
//Gesamtpreis:wird angezeigt
//Produktanzahl: wird angezeigt
//Bestellungen:43
//Keine Filter verfügbar
//Sortierungen nicht möglich
//alle Bestellungen sind vollständig/ und auch gelistet
//Funktionieren Filter und Suche zuverlässig? : Funktioniert nicht ,weil keine Filter exstieren
//Folgende Probleme gefunden: keine Sortierungsbutton soder Filter gefunden 