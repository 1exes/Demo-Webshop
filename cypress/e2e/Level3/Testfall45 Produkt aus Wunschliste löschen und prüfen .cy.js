describe('Wunschliste - Produkt entfernen', () => {
  const email = 'deine@email.de'; 
  const password = 'deinPasswort'; 
  it('Entfernt ein Produkt aus der Wunschliste', () => {
  cy.visit('https://demowebshop.tricentis.com/');
  cy.get('.header-links a[href="/login"]').click();
  cy.get('#Email').type(email);
  cy.get('#Password').type(password);
  cy.get('input[value="Log in"]').click();
  cy.get('.header-links a[href="/wishlist"]').click();
  //cy.get('input[name="removefromcart"]').check(); 
  //cy.get('input[name="updatecart"]').click();
  //cy.get('.wishlist-content').should('contain', 'The wishlist is empty!');
  });
});
