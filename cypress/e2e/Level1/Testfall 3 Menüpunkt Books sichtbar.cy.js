describe('Demo-Webshop Startseite', () => {
  it('sollte die Startseite laden', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.contains("BÜCHER").should("be.visible");

    
  });
});
