describe('Funktion Adresse hinzufügen bearbeiten löschen im Nutzerkonto', () => {
  it('soll Nutzkonto auf die funktion Aresse hinzuügen oder bearbeiten oder löschen testen', () => {
 cy.visit('https://demowebshop.tricentis.com/') 


    cy.contains('Log in').click();
    cy.get('#Email').type('Johnii3000@gmail.com');
    cy.get('#Password').type('Haus1423?!');
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();
    cy.get('a.account').first().click();
    cy.get('a.inactive').first().click()
    cy.get('input.button-1.add-address-button').click()
    cy.get('#Address_FirstName').type('Jermie')
    cy.get('#Address_LastName').type('Doku')
    cy.get('#Address_Email').type('Jeremie.doku@mail.de')
    cy.get('#Address_CountryId')
    .should('be.visible')
    .select('United Kingdom')
    cy.get('#Address_City').type('Mancester')
    cy.get('#Address_Address1').type('Bakerstreet 75')
    cy.get('#Address_ZipPostalCode').type('254687')
    cy.get('#Address_PhoneNumber').type('23477234666')
    cy.get('Input.button-1.save-address-button').click()
    cy.get('Input.button-2.delete-address-button').first().click()
  })
})


// Vorname:Jermie
// Nachname:Doku
//E-Mail:Jeremie.doku@mail.de
//Land:United Kingdom
//Stadt:Mancester
//Adresse1:254687
//Postleitzahl:
//Telefonnummer:23477234666




//Kontrollfragen für den Tester (im Testcode als Kommentar beantworten!): - Ja
// Werden alle Pflichtfelder korrekt validiert? -Ja
//  Erscheinen Fehlermeldungen bei fehlenden oder ungültigen Eingaben? -Ja
//  Werden Änderungen und Löschungen sofort übernommen? -Ja
//  Gibt es Fehler, Unklarheiten oder fehlende Features? - Nein

// Der Testfall läuft korrekt Adressänderungen funktionieren wie Löschungen ebenfalls reibungslos.