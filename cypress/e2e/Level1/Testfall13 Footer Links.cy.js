describe('Footer Links prüfen', () => {
  it('Footerlinks sollen erreichbar sein', () => {
    cy.visit('https://demowebshop.tricentis.com');
    cy.get('.footer a').each(($link) => {
      const url = $link.prop('href');
      if (url && !url.startsWith('javascript')) {
        cy.request({
          url: url,
          failOnStatusCode: false
        }).then((resp) => {
          // Optional: Log Statuscode, um zu sehen, was zurückkommt
          cy.log(`${url} -> Status: ${resp.status}`);
        });
      }
    });
  });
});




























`// 1. Besuche die Demo-Webseite

/ 2. Suche alle Links (<a>) im Footer und gehe jeden einzeln durch
// 3. Hol die URL vom Link (href-Attribut)

// 4. Prüfe:
javascript:" (diese Links ignorieren wir)

// 5. Mache eine HTTP-Anfrage (ohne die Seite im Browser zu öffnen)
// 6. Anfrage zur Link-URL
// 7. Wenn ein Fehler-Statuscode (z.B. 404) kommt, stoppt der Test nicht sofort
// 8. Wenn Antwort kommt, führe das hier aus:
; // 9. Schreibe die URL und den Statuscode in das Test-Log`