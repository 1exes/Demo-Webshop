describe('Registrieruung mit gültigen Daten ', () => {
  it('es soll sich registriert werden mit gültigen Daten', () => {
  

cy.visit('https://demowebshop.tricentis.com/') 

    cy.get('.ico-register') 
      .should('be.visible') 
      .click() 

    cy.url().should('include', '/register')
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Andre')
    cy.get('#LastName').type('Bach')
    cy.get('#Email').type('Andre.Bach@gmail.com')
    cy.get('#Password').type('Sicherheitsrisiko1423')
    cy.get('#ConfirmPassword').type('Sicherheitsrisiko1423')
    cy.get('#register-button').click()
    


    
    
  })
})
