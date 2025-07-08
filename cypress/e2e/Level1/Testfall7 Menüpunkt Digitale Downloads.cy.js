describe('Toolbar  Digital downloads prüfen', () => {
  it('sollte Menüpunkt Digital downloads prüfen ob sichtbar', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.contains("Digital downloads",).should("be.visible");

    
  });
});
