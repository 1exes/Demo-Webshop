describe('Wunschliste prüfen und löschen', () => {
  
it('Wunschliste löschen', () => {
cy.visit('https://demowebshop.tricentis.com/books');
cy.contains('Add to wishlist').first().click();
cy.get('.wishlist-label').click();
cy.get('[name="removefromcart"]').check();
cy.get('[name="updatecart"]').click();
cy.contains('The wishlist is empty!').should('be.visible');
});

});
