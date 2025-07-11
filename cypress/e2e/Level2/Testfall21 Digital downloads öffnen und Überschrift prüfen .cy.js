describe('Digital downloads anklicken, Überschriftsüberprüfung', () => {
  it('sollte den Button Digital downloads klicken un dann gucken ob die Überschrift da ist ', () => {


cy.visit('https://demowebshop.tricentis.com');
cy.contains('Digital downloads').click();
cy.contains('Digital downloads').should('be.visible');


    
  });
});
