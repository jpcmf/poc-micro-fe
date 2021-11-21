describe('First e2e test', () => {
  it('should add an item to the cart', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#showlogin').click();
    cy.get('#btn-login').click();
    cy.get('#addtocart_1').click();
    cy.get('#showcart').click();
    cy.get('a:nth-child(3)').click();
  });
});
