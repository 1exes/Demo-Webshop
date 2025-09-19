describe('Kontaktformular absenden mit ungültigen Daten', () => {
  it('soll das Kontaktformular ohne gültige Daten auszufüllen  ', () => {

cy.visit('https://demowebshop.tricentis.com/') 
cy.contains('Log in').click();
    cy.get('#Email').type('Johnii3000@gmail.com');
    cy.get('#Password').type('Haus1423?!');
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();

  cy.contains('a', 'Contact us').click()
  cy.get('#FullName').type('Joni3000')
  cy.get('#Enquiry').type(' Mein Gerät funktioniert nicht wie erwartet bitte um Rückmeldung. Mit freundlichen Grüßen Johni')
  cy.get('.button-1.contact-us-button').click()



 });
});


//Wird die Fehlermeldung immer angezeigt? - Ja 
//Werden die Felder nach Fehlern fokussiert? - Nein
//Ist das Absenden nach Korrektur möglich? - Ja 
//Kontaktformular-Validierung funktioniert korrekt, ausser das fokussieren des Feldes wo der Fehler drin ist 