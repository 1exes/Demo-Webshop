describe(' Suche mit Sonderzeichen', () => {
  it('', () => {


cy.visit('https://demowebshop.tricentis.com');
cy.get('input[name="q"]').type('@#$%&');
  

  });
});
