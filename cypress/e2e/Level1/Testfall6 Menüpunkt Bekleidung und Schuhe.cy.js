describe('Toolbar Bekleidung & Schuhe prüfen', () => {
  it('sollte Menüpunkt Bekleidung & Schuhe prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.contains("BEKLEIDUNG&SCHUHE").should("be.visible");

    
  });
});
