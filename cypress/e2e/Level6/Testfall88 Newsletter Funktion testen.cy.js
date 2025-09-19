describe('Newsletter Funktion ', () => {
  it('soll den Newsletter abonieren und deabonieren können ', () => {
    cy.visit('https://demowebshop.tricentis.com/') 

 cy.contains('Log in').click();
    cy.get('#Email').type('Johnii3000@gmail.com');
    cy.get('#Password').type('Haus1423?!');
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();

    cy.get('#newsletter-email').type('Johnii3000@gmail.com')
    cy.get('#newsletter-subscribe-button').click()





  })
})


// Problem: ich habe keine deaboniren Funktion gefunden
// abonieren funktioniert korrekt 

