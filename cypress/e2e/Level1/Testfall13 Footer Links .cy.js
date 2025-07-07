describe('Footer Links öffnen ', () => {
  it('Footer links sollen funktionieren', () => {


cy.visit('https://deine-webseite.de');
cy.get('footer a').each(link => {
  cy.request(link.prop('href'));
});
    
  });
});
