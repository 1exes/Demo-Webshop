


describe('Alle Bücher anzeigen', () => {
it('zeigt alle Bücher', () => {
cy.visit('https://demowebshop.tricentis.com');
cy.contains('Books').click();
cy.get('select[name="products-pagesize"]').select('12');
cy.get('.product-item').should('have.length', 6);
});
});
