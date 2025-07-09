describe('Electronics anklicken, Überschriftsüberprüfung', () => {
  it('sollte den Button Electronics klicken un dann gucken ob die Überschrift da ist ', () => {


cy.visit('https://demowebshop.tricentis.com');
cy.contains('Electronics').click();
cy.contains('Electronics').should('be.visible');


    
  });
});
