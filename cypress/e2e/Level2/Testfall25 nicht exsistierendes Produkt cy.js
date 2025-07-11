describe('nicht exsistierendes Produkt  ', () => {
  it('sollte nicht exsistierende Produkte anzeigen', () => {

cy.visit('https://demowebshop.tricentis.com')
cy.get('#small-searchterms').type('Autos{enter}');
cy.get('.no-result').should('contain', 'No products were found');




    
  });
});
