describe('Bücher sortieren', () => {
  it('nach Name A-Z', () => {
    cy.visit('https://demowebshop.tricentis.com/books');
    cy.get('select#products-orderby').select('Name: A to Z');
    cy.get('.product-item').first().should('be.visible'); 
  });
});
