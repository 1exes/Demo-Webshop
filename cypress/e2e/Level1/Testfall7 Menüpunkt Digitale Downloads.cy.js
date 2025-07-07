describe('Toolbar  Digitale Downloads prüfen', () => {
  it('sollte Menüpunkt Digitale Downloads prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.get("Digitale Downloads").should("be.visible");

    
  });
});
