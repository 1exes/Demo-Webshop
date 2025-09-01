describe('', () => {
  it('', () => {

    cy.visit('https://demowebshop.tricentis.com/')
    cy.contains('Books').click();
    cy.contains('Computing and Internet').first().click()
    cy.get('#addtocart_13_EnteredQuantity').clear().type(20)
    cy.get('#add-to-cart-button-13').click()



    
  });
});
