describe('volllständiger checkout Prozess+ Dokumentation', () => {
  it('soll ein Checkoutprozess durchführen und dokumentieren', () => {
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






// Sesssion wird korrekt gesetzt
//aktualiesiert den Warenkorb nach jedem Add to cart
//Fiction-24.00- Türkis
//14.1-inch Laptop-1590.00- Schwarz
//Create your own Jewelery-100.00-Gold
// Karteninhaber:John
// Kartennummer:4111 1111 1111 1111
//Ablaufdatum: 01.2028
//Kartencode:0809




//   Kreditkarte                                                   Zahlung bei Lieferung   
//-Kostenlos                                                       - 7.00
//-Kartendaten erforderlich zum Abschluss der Bestellung           - keine Daten erforderlich zum Abschluss der Bestellung



// Wurden alle Pflichtfelder korrekt validiert? - Ja
//Stimmen alle Summen, Rabatte und Versandkosten?- Ja
//Sind alle Bestelldaten in der Historie korrekt und vollständig? - Ja
//Bleibt die Session nach Abschluss erhalten? - Ja
//Gibt es Fehler, Unklarheiten oder fehlende Features?- Nein
//Checkout und Bestellprozess funktionieren korrekt ohne fehlende Features oder anderen Fehlern.