describe('Bestellung als Gast', () => {
  it('es soll als Gast was bestellen', () => {
    cy.visit('https://demowebshop.tricentis.com/') 


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
cy.get('input[value="Checkout as Guest"]').click();
cy.get('#BillingNewAddress_FirstName').type('John')
cy.get('#BillingNewAddress_LastName').type('Stones')
cy.get('#BillingNewAddress_Email').type('John.Stones@gmail.com')




cy.get('#BillingNewAddress_CountryId')
    .should('be.visible')
    .select('Germany');
cy.get('#BillingNewAddress_City').type('Dresden')
cy.get('#BillingNewAddress_Address1').type('Königsallee 12')
cy.get('#BillingNewAddress_ZipPostalCode').type('01097')
cy.get('#BillingNewAddress_PhoneNumber').type('0174187187007')




cy.get('input.button-1.new-address-next-step-button').eq(0).click();
cy.get('input.button-1.new-address-next-step-button').eq(1).should('be.visible').click();
cy.get('input.button-1.shipping-method-next-step-button').should('be.visible').click();
cy.get('input.button-1.payment-method-next-step-button').should('be.visible').click();
cy.get('input.button-1.payment-info-next-step-button').should('be.visible').click();
cy.get('input.button-1.confirm-order-next-step-button').should('be.visible').click();
  })
})





// keine Benutzerdaten gespeichert
//Session bleibt aktiv
// Bestätigung ist Da
// kein erneuter Log Out möglich
