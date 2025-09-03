describe('Log In mit gültigen Log In Daten ', () => {
  it('es soll sich erfolgreich angemeldet werden', () => {
  

cy.visit('https://demowebshop.tricentis.com/') 

cy.get('.ico-login') 
      .should('be.visible') 
      .click()  
cy.get('#Email').type('Johnii3000@gmail.com') 
cy.get('#Password').type('1234567')
cy.get('#RememberMe').click()
cy.get('.button-1.login-button').should('be.visible').click();


  })
})
