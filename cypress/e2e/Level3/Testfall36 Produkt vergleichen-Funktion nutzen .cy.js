describe('Footer-Link', () => {
  it('öffnet Produktliste vergleichen', () => {
    cy.visit('https://demowebshop.tricentis.com');
    cy.contains('Compare products list').click();
    cy.url().should('include', '/compareproducts');
  });
});
