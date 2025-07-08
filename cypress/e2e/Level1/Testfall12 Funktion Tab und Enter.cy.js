describe('Navigation über die Seite mit Tab und Enter', () => {
  it('sollte die Startseite laden', () => {


cy.visit('https://demowebshop.tricentis.com');
    cy.get('body').focus();       
    cy.press('Tab');            
    cy.press('Tab');         
    cy.focused().type('{enter}')
  });
});
    