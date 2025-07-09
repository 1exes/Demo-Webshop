describe('Apparel&Shoes anklicken, Überschriftsüberprüfung', () => {
  it('sollte den Apparel&Shoes Bücher klicken un dann gucken ob die Überschrift da ist ', () => {


cy.visit('https://demowebshop.tricentis.com');
cy.contains('Apparel&Shoes').click();
cy.contains('Apparel&Shoes').should('be.visible');


    
  });
});
