describe('Produkt aus wunschliste entfernen', () => {
  it('es soll ein Produkt aus der Wunschliste enfernt werden', () => {

cy.visit('https://demowebshop.tricentis.com/');
cy.contains('Books').click()
cy.contains('Fiction EX').click()
cy.get('#add-to-wishlist-button-78').click()
cy.get('span.cart-label').contains('Wishlist').click();
cy.get('input.qty-input').clear()
cy.get('input[name="removefromcart"]').click();
cy.get('input[name="updatecart"]').click();

    
  });
});
