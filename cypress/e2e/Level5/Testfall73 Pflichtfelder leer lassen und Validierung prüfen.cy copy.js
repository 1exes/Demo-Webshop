describe('Log Out ', () => {
  it('es soll sich erfolgreich ausloggen', () => {
  

cy.visit('https://demowebshop.tricentis.com/') 

cy.get('.ico-register') 
      .should('be.visible') 
      .click() 
      
cy.get('#gender-male').click()
cy.get('#register-button').click()

  })
})
