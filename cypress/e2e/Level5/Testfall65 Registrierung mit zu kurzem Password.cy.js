describe('Registrieruung ohne Pflichtfelder ', () => {
  it('es soll sich registriert werden mit zu kurzem Password', () => {
  

cy.visit('https://demowebshop.tricentis.com/') 

   cy.get('.ico-register') 
      .should('be.visible') 
      .click() 
    cy.url().should('include', '/register')
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Jon')
    cy.get('#LastName').type('Stan')
    cy.get('#Email').type('Jon,,Stan@gmail.com')
    cy.get('#Password').type('1234')
    cy.get('#ConfirmPassword').type('1234')
    cy.get('#register-button').click()
    
  })
})
