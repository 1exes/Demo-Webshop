describe('Bis zu 50 Produkte in den Warenkorb legen', () => {
  it('fügt Produkte aus verschiedenen Kategorien hinzu', () => {
    cy.visit('https://demowebshop.tricentis.com/');


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
    cy.contains('TCP Coaching day').click
    cy.get('#add-to-cart-button-63').click()
    

    
    });
  });

