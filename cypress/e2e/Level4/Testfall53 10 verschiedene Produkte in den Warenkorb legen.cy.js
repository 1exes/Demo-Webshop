describe('Großbestellung mit 10 Produkten', () => {
  it('legt 10 verschiedene Produkte in den Warenkorb', () => {
    cy.visit('https://demowebshop.tricentis.com/');

    cy.contains('Books').click()
    cy.contains('Computing and Internet').click();
    cy.get('#add-to-cart-button-13').click();

    cy.contains('Books').click();
    cy.contains('Fiction').click();
    cy.get('#add-to-cart-button-45').click();

    cy.contains('Books').click();
    cy.contains('Health Book').click();
    cy.get('#add-to-cart-button-22').click();

    cy.contains('Apparel & Shoes').click();
    cy.contains("50's Rockabilly Polka Dot Top JR Plus Size").click();
    cy.get('#add-to-cart-button-5').click();

    cy.contains('Apparel & Shoes').click();
    cy.contains("Blue and green Sneaker").click();
    cy.get('#add-to-cart-button-28').click();

    cy.contains('Apparel & Shoes').click();
    cy.contains("Blue Jeans").click();
    cy.get('#add-to-cart-button-36').click();

    cy.contains('Apparel & Shoes').click();
    cy.contains("Casual Golf Belt").click();
    cy.get('#add-to-cart-button-40').click();

    cy.contains('Apparel & Shoes').click();
    cy.contains("Genuine Leather Handbag with Cell Phone Holder & Many Pockets").click();
    cy.get('#add-to-cart-button-29').click();

    cy.contains('Digital downloads').click();
    cy.contains("3rd Album").click();
    cy.get('#add-to-cart-button-53').click();

    cy.contains('Jewelry').click();
    cy.contains("Black & White Diamond Heart").click();
    cy.get('#add-to-cart-button-14').click();

    cy.contains('Jewelry').click();
    cy.contains("Create Your Own Jewelry").click();
    cy.get('input[name="product_attribute_71_10_16"]').type('4');
    cy.get('#add-to-cart-button-71').click();

    cy.contains('Gift Cards').click();
    cy.contains('$5 Virtual Gift Card').click();
    cy.get('#giftcard_1_RecipientName').type('Tom');
    cy.get('#giftcard_1_RecipientEmail').type('Tom.tom@gmail.com');
    cy.get('#giftcard_1_SenderName').type('Johann');
    cy.get('#giftcard_1_SenderEmail').type('Johan.ast@gmail.com');
    cy.get('#giftcard_1_Message').type('alles gute mein bester');
    cy.get('#add-to-cart-button-1').click();

    cy.contains('Gift Cards').click();
    cy.contains('$25 Virtual Gift Card').click();
    cy.get('#giftcard_2_RecipientName').type('Tom');
    cy.get('#giftcard_2_RecipientEmail').type('Tom.tom@gmail.com');
    cy.get('#giftcard_2_SenderName').type('Johann');
    cy.get('#giftcard_2_SenderEmail').type('Johan.ast@gmail.com');
    cy.get('#giftcard_2_Message').type('alles gute mein bester');
    cy.get('#add-to-cart-button-2').click();
  });
});



