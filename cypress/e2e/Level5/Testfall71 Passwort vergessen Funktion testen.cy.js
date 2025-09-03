describe('Forgot PAssword link testen  ', () => {
  it('es soll den Link Forgot Password aufrufen', () => {
  

cy.visit('https://demowebshop.tricentis.com/') 

cy.get('.ico-login') 
      .should('be.visible') 
      .click()  
cy.contains('Forgot password?').click();



  })
})
