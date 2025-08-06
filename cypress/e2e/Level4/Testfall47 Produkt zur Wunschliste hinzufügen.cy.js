describe('Produkt zur Wunschliste hinzufügen', () => {
  it('fügt Buch "Ficition EX" zur wishlist hinzu', () => {

    cy.visit('https://demowebshop.tricentis.com/');
    cy.contains('Books').click();
    cy.visit('https://demowebshop.tricentis.com/fiction-ex')
    cy.get ('#add-to-wishlist-button-78').click();

  });
});
