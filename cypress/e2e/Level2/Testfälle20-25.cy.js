

import './Testfall21 Digital downloads.cy.js';
import './Testfall22 Gift Cards.cy.js';
import './Testfall23 book suchen.cy.js';
import './Testfall24 computer suchen.cy.js';
import './Testfall25 nicht existierendes Produkt.cy.js';

describe('Testfälle 20–25', () => {
  it('Startet den Demowebshop', () => {
    cy.visit('https://demowebshop.tricentis.com');
  });
});
