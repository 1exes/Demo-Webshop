
describe('Bücher sortieren', () => {
  it('nach Preis von günstig nach teuer', () => {
    cy.visit('https://demowebshop.tricentis.com/books');
    cy.get('select#products-orderby').select('Price: High to Low');
  });
});

