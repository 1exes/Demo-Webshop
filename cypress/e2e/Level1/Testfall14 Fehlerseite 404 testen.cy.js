describe('404-Seite Test', () => {
  it('zeigt 404-Fehlerseite bei falscher URL', () => {
cy.request({
  url: 'https://demowebshop.tricentis.com/falsche-seite',
  failOnStatusCode: false
}).its('status').should('eq', 404);
  });
});