describe('Checkout Prozess ', () => {
  it('es soll den Checkout Prozess durchlaufen ', () => {
  

cy.visit('https://demowebshop.tricentis.com/') 

cy.get('.ico-login') 
      .should('be.visible') 
      .click() 
cy.get('#Email').type('Johnii3000@gmail.com') 
cy.get('#Password').type('Haus1423?!')
cy.get('#RememberMe').click()
cy.get('.button-1.login-button').should('be.visible').click();
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

cy.get('input.button-1.new-address-next-step-button').eq(0).click();
cy.get('input.button-1.new-address-next-step-button').eq(1).click();
cy.get('input.button-1.shipping-method-next-step-button').click();
cy.get('#paymentmethod_2').click()
cy.get('input.button-1.payment-method-next-step-button').click()
cy.get('#CardholderName').type('John')
cy.get('#CardNumber').type('4111 1111 1111 1111')
cy.get('#ExpireYear').select('2037')
cy.get('#CardCode').type('0908')
cy.get('input.button-1.payment-info-next-step-button').first().click();
cy.get('input.button-1.confirm-order-next-step-button').click()
//cy.get('input.button-1.payment-info-next-step-button').click();
//cy.get('input.button-1.confirm-order-next-step-button').click();
cy.get('input.button-2.order-completed-continue-button').click()



  })
})





//Werden alle Preise, Versandkosten und Steuern korrekt berechnet? - Ja
// Ändern sich Lieferzeit und Zahlungsarten je nach Auswahl? - Ja
// Bleibt die Auswahl nach Wechsel erhalten? -  Ja
//Gibt es Fehler oder Unklarheiten im Ablauf?  -  Nein
//Checkout und Preisberechnung funktionieren korrekt ohne Fehlermeldung, oder sonstigen Fehlfunktionen.
