describe('Registrieruung mit ungültiger E Mail ', () => {
  it('es soll sich registriert werden mit ungültiger E Mail', () => {
  

cy.visit('https://demowebshop.tricentis.com/') 

    cy.get('.ico-register') 
      .should('be.visible') 
      .click() 

    cy.url().should('include', '/register')
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('John')
    cy.get('#LastName').type('Stone')
    cy.get('#Email').type('John,,Stone@gmail.com')
    cy.get('#Password').type('Sicherheitsrisiko1423')
    cy.get('#ConfirmPassword').type('Sicherheitsrisiko1423')
    cy.get('#register-button').click()
    


    
    
  })
})
