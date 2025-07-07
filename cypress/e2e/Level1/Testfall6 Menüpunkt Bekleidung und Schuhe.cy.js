describe('Toolbar  Bekleidung&Schuhe prüfen', () => {
  it('sollte Menüpunkt Bekleidung&Schuhe prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.get("Bekleidung&Schuhe").should("be.visible");

    
  });
});
