

describe('Demo-Webshop Startseite: Books', () => {
  it('soll Bücher anklicken und gucken ob die Überschrift verfügbar ist ', () => {

cy.visit("https://demowebshop.tricentis.com/")
cy.visit("https://demowebshop.tricentis.com/books")
cy.contains("Books").should("be.visible")

    
  });
});
