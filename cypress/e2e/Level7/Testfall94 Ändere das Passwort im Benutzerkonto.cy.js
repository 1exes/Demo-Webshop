describe('Ändere das Passwort im Benutzerkonto', () => {
  it('soll das Passwort im Benutzerkonto ändern ', () => {

cy.visit('https://demowebshop.tricentis.com/') 
cy.contains('Log in').click();
    cy.get('#Email').type('Johnii3000@gmail.com');
    cy.get('#Password').type('Haus1423?!');
    cy.get('#RememberMe').click()
    cy.get('input[value="Log in"]').click();
    cy.get('a.account').first().click();
    cy.contains('a.inactive', 'Change password').click();
    cy.get('#OldPassword').type('Haus1423?!')
    cy.get('#NewPassword').type('Haus1423?!')
    cy.get('#ConfirmNewPassword').type('Haus1423?!')
    cy.get('.button-1.change-password-button').click()



  });
});
    
   
//Wird ein erneuter Login erzwungen? - Nein
//Funktioniert das alte Passwort nicht mehr? - Nein
//Kommt die Bestätigungsmail korrekt an?- Nein
// Mail Postfach exsistiert nicht 
// Session bleibt aktiv
//Folgende Probleme gefunden: Passwort wurde erfolgreich geändert , aber es kam keine Mail sondern nur eine Benachrichtigung
