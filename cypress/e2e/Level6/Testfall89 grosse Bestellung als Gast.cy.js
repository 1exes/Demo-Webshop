describe('Große Bestellung als Gast ', () => {
  it('große Bestellung als Gaast ausführen  ', () => {
    cy.visit('https://demowebshop.tricentis.com/') 

 cy.contains('Books').click();
    cy.contains('Computing and Internet').click();
    cy.get('#add-to-cart-button-13').click();

    cy.contains('Books').click();
    cy.contains('Fiction').click();
    cy.get('#add-to-cart-button-45').click();

    cy.contains('Books').click();
    cy.contains('Health Book').click();
    cy.get('#add-to-cart-button-22').click();


    cy.visit('https://demowebshop.tricentis.com/desktops')
    cy.contains('Build your own cheap computer').click()
    cy.get('#add-to-cart-button-72').click()   
    cy.go('back')

    
    cy.contains('Simple Computer').click()
    cy.get('#product_attribute_75_5_31_96').click()
    cy.get('#add-to-cart-button-75').click()
    cy.go('back')

    
    cy.contains('Build your own computer').click()
    cy.get('#product_attribute_16_3_6_18').click()
    cy.get('#add-to-cart-button-16').click()
    cy.go('back')

    
    cy.contains('Build your own expensive computer').click()
    cy.get('#add-to-cart-button-74').click()

    cy.visit('https://demowebshop.tricentis.com/notebooks')
    cy.contains('14.1-inch Laptop').click();
    cy.get('#add-to-cart-button-31').click();
    

    cy.visit('https://demowebshop.tricentis.com/accessories')
    cy.contains('TCP Instructor Led Training').click()
    cy.get('#add-to-cart-button-66').first().click()
    cy.go('back')

    cy.contains('TCP Coaching day').click()
    cy.get('#add-to-cart-button-63').first().click()
    cy.go('back')
    
    cy.contains('TCP Public Complete').click()
    cy.get('#add-to-cart-button-65').first().click()
    cy.go('back')
    

    cy.contains('TCP Public MT/AT').click()
    cy.get('#add-to-cart-button-62').first().click()
    cy.go('back')


    cy.contains('TCP Public RPA/TCD').click()
    cy.get('#add-to-cart-button-64').first().click()
    cy.go('back')


    cy.contains('TCP Self-Paced Training').click()
    cy.get('#add-to-cart-button-61').first().click()
    cy.go('back')


    cy.contains('TCP Self-Paced Training additional month').click()
    cy.get('#add-to-cart-button-67').first().click()
    cy.go('back')


    cy.visit('https://demowebshop.tricentis.com/cell-phones')
    cy.contains('Smartphone').click()
    cy.get('#add-to-cart-button-43').click
    cy.go('back')
    cy.contains('Phone Cover').click()
    cy.get('#add-to-cart-button-80').click()


    cy.visit('https://demowebshop.tricentis.com/apparel-shoes')
    
    cy.contains("50's Rockabilly Polka Dot Top JR Plus Size").click();
    cy.get('#add-to-cart-button-5').click();
    cy.go('back')
    
    cy.contains("Blue and green Sneaker").click();
    cy.get('#add-to-cart-button-28').click();
    cy.go('back')
    
    cy.contains("Blue Jeans").click();
    cy.get('#add-to-cart-button-36').click();
    cy.go('back')
    
    cy.contains("Casual Golf Belt").click();
    cy.get('#add-to-cart-button-40').click();
    cy.go('back')
  
   
    cy.visit('https://demowebshop.tricentis.com/apparel-shoes?pagenumber=2')
    cy.contains("Men's Wrinkle Free Long Sleeve").click()
    cy.get('#add-to-cart-button-10').click()
    cy.go('back')


    cy.contains('TBlue Jeans').click()
    cy.get('#add-to-cart-button-81').click()
    

    cy.visit('https://demowebshop.tricentis.com/digital-downloads')
    cy.contains('Digital downloads').click();
    cy.contains("3rd Album").click();
    cy.get('#add-to-cart-button-53').click();
    cy.go('back')

    
    cy.visit('https://demowebshop.tricentis.com/music-album-1');
    cy.get('[id^="add-to-cart-button"]').click();
    

    cy.visit('https://demowebshop.tricentis.com/music-2');
    cy.get('[id^="add-to-cart-button"]').click();


    cy.visit('https://demowebshop.tricentis.com/jewelry')
    cy.contains('Create Your Own Jewelry').click()
    cy.get('#product_attribute_71_10_16').type('20')
    cy.get('#add-to-cart-button-71').click()
    cy.go('back')

    cy.contains('Black & White Diamond Heart').click()
    cy.get('#add-to-cart-button-14').click()


    cy.visit('https://demowebshop.tricentis.com/gift-cards')
    cy.contains('$5 Virtual Gift Card').click()
    cy.get('#giftcard_1_RecipientName').type('Tom');
    cy.get('#giftcard_1_RecipientEmail').type('Tom.tom@gmail.com');
    cy.get('#giftcard_1_SenderName').type('Johann');
    cy.get('#giftcard_1_SenderEmail').type('Johan.ast@gmail.com');
    cy.get('#giftcard_1_Message').type('alles gute mein bester');
    cy.get('#add-to-cart-button-1').click();
    cy.go('back')




    
    cy.contains('$25 Virtual Gift Card').click()
    cy.get('#giftcard_2_RecipientName').type('Tom');
    cy.get('#giftcard_2_RecipientEmail').type('Tom.tom@gmail.com');
    cy.get('#giftcard_2_SenderName').type('Johann');
    cy.get('#giftcard_2_SenderEmail').type('Johan.ast@gmail.com');
    cy.get('#giftcard_2_Message').type('alles gute mein bester');
    cy.get('#add-to-cart-button-2').click();
    cy.go('back')


    cy.contains('$50 Physical Gift Card').click()
    cy.get('#giftcard_3_RecipientName').type('Tom');
    cy.get('#giftcard_3_SenderName').type('Johann');
    cy.get('#giftcard_3_Message').type('alles gute mein bester');
    cy.get('#add-to-cart-button-3').click();
    cy.go('back')


    cy.contains('$100 Physical Gift Card').click()
    cy.get('#giftcard_4_RecipientName').type('Tom');
    cy.get('#giftcard_4_SenderName').type('Johann');
    cy.get('#giftcard_4_Message').type('alles gute mein bester');
    cy.get('#add-to-cart-button-4').click();

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


