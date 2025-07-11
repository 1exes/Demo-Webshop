describe('Books anklicken, Überschriftsüberprüfung', () => {
  it('sollte den Button Bücher klicken un dann gucken ob die Überschrift da ist ', () => {


cy.visit('https://demowebshop.tricentis.com');
cy.contains('Books').click();
cy.contains('Books').should('be.visible');

  });
});
