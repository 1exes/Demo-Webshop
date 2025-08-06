describe('Warenkorb-Seite öffnen', () => {
  it('öffnet die Warenkorb-Seite', () => {
  cy.visit("https://demowebshop.tricentis.com/")
  cy.get('.cart-label').first().click()
  });
});
