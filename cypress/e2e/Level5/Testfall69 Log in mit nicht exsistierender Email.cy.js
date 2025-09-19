describe('Log in mit nicht exsistierender Email .cy.js', () => {
  it('es soll sich mit einer nicht vorhandenen Email angemeldet werden  ', () => {
  

cy.visit('https://demowebshop.tricentis.com/') 

cy.get('.ico-login') 
      .should('be.visible') 
      .click()  
cy.get('#Email').type('Justus.Sonnenschein@gmx.de') 
cy.get('#Password').type('2255334')
cy.get('#RememberMe').click()
cy.get('.button-1.login-button').should('be.visible').click();


  })
})
