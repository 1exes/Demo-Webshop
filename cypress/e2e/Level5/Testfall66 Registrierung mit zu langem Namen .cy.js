
describe('Namensfeld - Maximalwert Registrierung', () => {
  it('Test mit 3000 Zeichen um zu gucken ob der NAme zu lang ist ', () => {
    cy.visit('https://demowebshop.tricentis.com/register');
    cy.get('input[name="FirstName"]').clear().type('A'.repeat(3000));
    cy.get('input[name="LastName"').clear().type('B'.repeat(3000));
    cy.get('#Email').type('Johnii3000@gmail.com');
    cy.get('#Password').type('1234567');
    cy.get('#ConfirmPassword').type('1234567');
    cy.get('#register-button').click();
  });
});


