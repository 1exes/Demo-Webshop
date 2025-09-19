describe('komplette Bestellung  ', () => {
  it('soll eine Bestellung ausführen mit User anlegen einloggen auf Historie zugreifen können  ', () => {

cy.visit('https://demowebshop.tricentis.com/')
//cy.get('.ico-register') 
  //    .should('be.visible') 
    //  .click()
//cy.get('#gender-male').click()
//cy.get('#FirstName').type('John')
//cy.get('#LastName').type('Johnson')
//y.get('#Email').type('John.Johnson@web.com')
//cy.get('#Password').type('H121.!55slash')
//cy.get('#ConfirmPassword').type('H121.!55slash')
//cy.get('#register-button').click()
//cy.get('.button-1.register-continue-button').click()
cy.get('.ico-login') 
      .should('be.visible') 
      .click()

cy.get('#Email').type('John.Johnson@web.com')
cy.get('#Password').type('H121.!55slash')
cy.get('.button-1.login-button').click()


cy.contains('Books').click();
    cy.get('a[href="/health"]').first().click({ force: true });
    cy.get('#addtocart_22_EnteredQuantity').type('3')
    cy.get('#add-to-cart-button-22').click();

    cy.contains('Apparel & Shoes').click();
    cy.contains("50's Rockabilly Polka Dot Top JR Plus Size").first().click({ force: true });
    cy.get('#add-to-cart-button-5').click();


    cy.contains('Digital downloads').click();
    cy.contains("3rd Album").first().click({ force: true });
    cy.get('#add-to-cart-button-53').click();



     cy.visit('https://demowebshop.tricentis.com/desktops')
    cy.contains('Build your own cheap computer').first().click({ force: true });
    cy.get('#add-to-cart-button-72').click()   
    cy.go('back')


     cy.visit('https://demowebshop.tricentis.com/notebooks')
    cy.contains('14.1-inch Laptop').first().click({ force: true });
    cy.get('#add-to-cart-button-31').click();

    cy.visit('https://demowebshop.tricentis.com/accessories')
    cy.contains('TCP Instructor Led Training').first().click({ force: true });
    cy.get('#add-to-cart-button-66').first().click()
    cy.go('back')


     cy.visit('https://demowebshop.tricentis.com/cell-phones')
    cy.contains('Smartphone').first().click({ force: true });
    cy.get('#add-to-cart-button-43').click
    cy.go('back')
    cy.contains('Phone Cover').first().click({ force: true });
    cy.get('#product_attribute_80_1_38').type('White')
    cy.get('#add-to-cart-button-80').click()


cy.visit('https://demowebshop.tricentis.com/apparel-shoes')
      cy.contains("Casual Golf Belt").first().click({ force: true });
      cy.get('#addtocart_40_EnteredQuantity').type('5')
    cy.get('#add-to-cart-button-40').click();
    cy.go('back')



     cy.visit('https://demowebshop.tricentis.com/jewelry')
    cy.contains('Create Your Own Jewelry').first().click({ force: true });
    cy.get('#product_attribute_71_10_16').type('20')
    cy.get('#add-to-cart-button-71').click()
    

    cy.get('.cart-label').first().click()
    cy.get('#termsofservice').click()
    cy.get('#checkout').click()
    cy.get('input.button-1.new-address-next-step-button').eq(0).click();
    cy.get('input.button-1.new-address-next-step-button').eq(1).click();
    cy.get('input.button-1.shipping-method-next-step-button').click();
    cy.get('#paymentmethod_2').click()
    cy.get('input.button-1.payment-method-next-step-button').click();
    cy.get('#CardholderName').type('John')
    cy.get('#CardNumber').type('4111 1111 1111 1111')
    cy.get('#ExpireYear').type('2026')
    cy.get('#CardCode').type('375')
    cy.get('input.button-1.payment-info-next-step-button').first().click();
    cy.get('input.button-1.confirm-order-next-step-button').first().click();
    cy.get('input.button-2.order-completed-continue-button').first().click();





    cy.get('a.account').first().click();
    cy.get('a.inactive').eq(1).click()
    cy.get('.ico-logout')
      .should('be.visible')
      .click()
    


    





  









  });
});



//a)
//John- Vorname
//Johnson- Nachname
//John.Johnson@web.com- E- Mail
//H121.!55slash- Passwort
//Sind alle Validierungen verständlich?- Ja 
// Kommt die Mail korrekt an?- kein e Mail Postfach vorhanden
// Ist der Link nur einmal nutzbar?- kein Link verfügbar




//b)
//Ablaufzeit:Session bleibt erhalten
//Cookie Name:2a308c6c-dd80-4840-838e-76e209373e43(Cookie- Wert)



//c)

// Name:3rd Album / Preis:1.00  / Kategorie: Digital Downloads  / Bild: https://demowebshop.tricentis.com/content/images/thumbs/0000235_3rd-album_300.png
// Name:50's Rockabilly Polka Dot Top JR Plus Size/ Preis:11.00 / Kategorie: Apparel & Shoes/ Bild:https://demowebshop.tricentis.com/content/images/thumbs/0000018_50s-rockabilly-polka-dot-top-jr-plus-size_300.jpg
// Name:Health Book/ Preis:10.00 / Kategorie: Books/ Bild:https://demowebshop.tricentis.com/content/images/thumbs/0000131_health-book_300.jpeg


//Sind alle Suchergebnisse relevant? - Ja 
//Gibt es fehlerhafte oder doppelte Einträge? - Nein



//d)
//Werden alle Produkte korrekt angezeigt?  - Ja
//Stimmen die Summen und Rabatte?  - Ja

//e)
// alle Angaben sind Richtig und Übersichtlich dargestellt ( Bilder zuornungsbar, Mengen richtig, Prteise richtig, Produktdetails richtig )



//f) 
// Cash On Delivery : 7.00 Versandzahlung, Lieferdauer genau gleich, 
//  Check / Money Order: 5.00 Versandzahlung, Lieferdauer genau gleich
//Werden alle Pflichtfelder validiert? - Ja
// Stimmen alle Summen, Rabatte und Versandkosten? - Ja


//g) 
// Sind alle Daten korrekt?- Ja
//  Kommt die Bestätigungsmail an?- Kein MAil Postfach auffindbar 
//  Gibt es Fehler im Ablauf?- bis zum Schritt um zu prüfen ob die Session erhalten bleibt ja 



//Bestellnummer:#2104369
//Bestelldaten Phone: 572958286294, Adresse: Töpinger Strasse 20 ,Postleitzahl: 2012 Ort:Löbau,Land: Germany
//E-Mail:John.Johnson@web.com


//h) 
// Bleibt der Warenkorb nach Logout leer? - Ja 
//Ist die Historie nach Login/Logout immer korrekt? - Ja 
//Keine Daten nach Log Out mehr sichtbar 




//i)
//Check / Money Order: Zahlung enthält keine sensiblen daten die offen zu sehen sind 
//Visa: Zahlung zeigt den den Card code: nicht in * an sondern als Zahl
//Passwörter werden als * angezeigt 
// alle Schritte ohne Datenlecks und Sicherheitslücken die ich gesehen habe 


//j)
//Funktioniert jeder Schritt ohne Fehler und wie erwartet?- Ja 
//Sind alle Daten nach jedem Schritt korrekt und konsistent?- Ja
//Gibt es Sicherheitslücken, Datenlecks oder unklare Abläufe?- Nein
//Sind alle E-Mails korrekt, vollständig und ohne sensible Daten?- kein E- Mail Postfach gefunden
//Gibt es Fehler, Unklarheiten oder fehlende Features?- Nein




