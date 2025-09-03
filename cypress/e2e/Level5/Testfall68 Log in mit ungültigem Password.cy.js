describe('Log In mit ungültigem Password', () => {
  it('es soll sich mit falschem Passwort angemeldet werden ', () => {
  

cy.visit('https://demowebshop.tricentis.com/') 

cy.get('.ico-login') 
      .should('be.visible') 
      .click()  
cy.get('#Email').type('Johnii3000@gmail.com') 
cy.get('#Password').type('2255334')
cy.get('#RememberMe').click()
cy.get('.button-1.login-button').should('be.visible').click();


  })
})
