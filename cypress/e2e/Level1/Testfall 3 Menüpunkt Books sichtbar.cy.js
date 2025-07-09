describe('Books Sichtbarkeitsüberprüfung', () => {
  it('Button Books überprüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.contains("Books").should("be.visible");

    
  });

});
