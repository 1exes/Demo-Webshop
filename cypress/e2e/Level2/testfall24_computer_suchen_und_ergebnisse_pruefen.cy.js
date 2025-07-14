describe('Computer-Unterkategorien', () => {
  it('zeigt Produkte aus allen Kategorien', () => {
    cy.visit('https://demowebshop.tricentis.com');

    ['Desktops', 'Notebooks', 'Accessories'].forEach((kategorie) => {
      cy.contains(kategorie).click({ force: true });
      cy.get('.product-item').should('have.length.at.least', 1);
      cy.visit('https://demowebshop.tricentis.com'); 
    });
  });
});
