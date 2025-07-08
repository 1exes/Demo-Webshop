describe('Suchfeld sichtbar Überprüfung', () => {
  it('soll überprüfen, ob das Suchfeld sichtbar ist', () => {
    cy.visit('https://demowebshop.tricentis.com');
    cy.get('#small-searchterms', { timeout: 10000 }).should('be.visible');
  });
});
