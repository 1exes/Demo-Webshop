describe('Demo-Büchr Button Sichtbarkeitsüberprüfung', () => {
  it('Button Bücher überprüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.get("Books").should("be.visible");

    
  });

});
