describe('Produkt in Warenkorb legen', () => {
  it('fügt "Buch" hinzu', () => {
    cy.visit('https://demowebshop.tricentis.com/');
    cy.contains('Books').click();
    cy.visit('https://demowebshop.tricentis.com/computing-and-internet')
    cy.get ('#add-to-cart-button-13').click({multiple:true});
  });
});
