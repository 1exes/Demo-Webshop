describe('Newsletter Funktion ', () => {
  it('soll den Newsletter abonieren und deabonieren können ', () => {
    cy.visit('https://demowebshop.tricentis.com/') 

 cy.contains('Log in').click();
    cy.get('#Email').type('Johnii3000@gmail.com');
    cy.get('#Password').type('Haus1423?!');
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();

    cy.contains('Jewelry').click();
    cy.contains("Create Your Own Jewelry").click();
    cy.get('input[name="product_attribute_71_10_16"]').type('4');
    cy.get('#add-to-cart-button-71').click();


     cy.contains('Apparel & Shoes').click();
    cy.contains("Blue Jeans").click();
    cy.get('#add-to-cart-button-36').click();



     cy.get('a.account').first().click();
    cy.get('a.inactive').first().click()
    cy.get('input.button-1.add-address-button').click()
    cy.get('#Address_FirstName').type('Jonas')
    cy.get('#Address_LastName').type('James')
    cy.get('#Address_Email').type('Jonas.James@mail.de')
    cy.get('#Address_CountryId')
    .should('be.visible')
    .select('United Kingdom')
    cy.get('#Address_City').type('New Castle')
    cy.get('#Address_Address1').type('Kingstreet 12')
    cy.get('#Address_ZipPostalCode').type('0070')
    cy.get('#Address_PhoneNumber').type('121314151617')
    cy.get('Input.button-1.save-address-button').click()


 cy.get('.cart-label').first().click()
cy.get('#termsofservice').click()
cy.get('#checkout').click()
cy.get('#billing-address-select')
   .should('be.visible')
   .select('4479749');
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




  })
})



// Jonas
//James
//Jonas.James@mail.de
//United Kingdom
//New Castle
//Kingstreet 12'
//0070
//121314151617


// Werden beide Adressen korrekt angezeigt und übernommen? - Ja
// Werden alle Pflichtfelder validiert und Fehlermeldungen angezeigt? - Ja
// Gibt es Fehler, Unklarheiten oder fehlende Features?- Nein
// Fazit:Adressfunktionen im Checkout funktionieren korrekt
