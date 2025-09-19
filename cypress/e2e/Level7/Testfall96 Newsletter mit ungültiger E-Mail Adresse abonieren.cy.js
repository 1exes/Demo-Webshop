describe('Newsletter mit ungültiger E-Mail Adresse abonieren', () => {
  it('soll den Newsletter mit ungültiger E-Mail Adresse abonieren ', () => {

cy.visit('https://demowebshop.tricentis.com/') 

cy.visit('https://demowebshop.tricentis.com/') 
cy.contains('Log in').click();
    cy.get('#Email').type('Johnii3000@gmail.com');
    cy.get('#Password').type('Haus1423?!');
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();
    cy.get('#newsletter-email').type('aeio123@ gmd.de')
    cy.get('#newsletter-subscribe-button').click()



  });
});





//Wird die Fehlermeldung immer angezeigt? -  Ja 
//Wird keine E-Mail versendet? - Nein
//Ist das Abo nach Korrektur möglich?- Ja 