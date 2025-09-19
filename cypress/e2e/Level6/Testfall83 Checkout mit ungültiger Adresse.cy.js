describe('Checkout mit ungültiger Adresse', () => {
  it('soll ein Checkoutprozess durchführen mit ungültiger Adresse', () => {
    cy.visit('https://demowebshop.tricentis.com/') 


 cy.contains('Log in').click();
    cy.get('#Email').type('Johnii3000@gmail.com');
    cy.get('#Password').type('Haus1423?!');
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();
cy.contains('Books').click();
cy.visit('https://demowebshop.tricentis.com/fiction')
cy.get('#add-to-cart-button-45').click()
cy.contains('Computers').click()
cy.visit('https://demowebshop.tricentis.com/notebooks')
cy.visit('https://demowebshop.tricentis.com/141-inch-laptop')
cy.get('#add-to-cart-button-31').first().click()
cy.visit('https://demowebshop.tricentis.com/create-it-yourself-jewelry')
cy.get('#product_attribute_71_10_16').type('4')
cy.get('#add-to-cart-button-71').click();
cy.get('.cart-label').first().click()
cy.get('#termsofservice').click()
cy.get('#checkout').click()
cy.get('#billing-address-select')
  .should('be.visible')
  .select('New Address');

cy.get('#BillingNewAddress_CountryId')
  .should('be.visible')
  .select('Germany')
cy.get('#BillingNewAddress_City').type('Dresden')
cy.get('#BillingNewAddress_Address1').type('Töpinger Strasse 20')
cy.get('#BillingNewAddress_ZipPostalCode').type('0303030')
cy.get('#BillingNewAddress_PhoneNumber').type('244868495936777')
cy.get('input.button-1.new-address-next-step-button').eq(0).click();
cy.get('input.button-1.new-address-next-step-button').eq(1).should('be.visible').click();
cy.get('#shippingoption_2').click()
cy.get('input.button-1.shipping-method-next-step-button').should('be.visible').click();
cy.get('#paymentmethod_2').click()
cy.get('input.button-1.payment-method-next-step-button').should('be.visible').click()
cy.get('#CardholderName').type('John')
cy.get('#CardNumber').type('4111 1111 1111 1111')
cy.get('#ExpireYear').select('2028')
cy.get('#CardCode').type('0809')
cy.get('input.button-1.payment-info-next-step-button').click();
cy.get('input.button-1.confirm-order-next-step-button').should('be.visible').click();



//cy.get('input.button-1.payment-method-next-step-button').should('be.visible').click();
//cy.get('input.button-1.payment-info-next-step-button').click();
//cy.get('input.button-1.payment-info-next-step-button').should('be.visible').click();
//cy.get('input.button-1.confirm-order-next-step-button').should('be.visible').click();



  })
})
