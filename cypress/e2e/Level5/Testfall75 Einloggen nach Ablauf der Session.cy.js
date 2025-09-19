describe('Session Timeout Test (Einfach)', () => {

  it('prüft ob Session nach Inaktivität abläuft', () => {

    cy.visit('https://demowebshop.tricentis.com/');
    cy.contains('Log in').click();
    cy.get('#Email').type('Johnii3000@gmail.com');
    cy.get('#Password').type('Haus1423?!');
    cy.get('input[value="Log in"]').click();
    cy.wait(1000000)
    cy.contains('a', 'Orders').click()

   
  });

});

// Session bleibt aktiv



