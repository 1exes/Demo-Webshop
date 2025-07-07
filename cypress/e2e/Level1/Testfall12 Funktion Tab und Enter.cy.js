describe('Navigation über die Seite mit Tab und Enter', () => {
  it('sollte die Startseite laden', () => {


cy.visit("https://demowebshop.tricentis.com/")
cy.get('body').tab();                       
cy.press('Tab').press('Tab');             
cy.focused().type('{enter}');

    
  });
});
