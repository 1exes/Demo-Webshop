describe('Toolbar  Electronics prüfen', () => {
  it('sollte Menüpunkt Electronics prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/");
    cy.contains('Electronics', { timeout: 10000 }).should('be.visible');
  });
});
