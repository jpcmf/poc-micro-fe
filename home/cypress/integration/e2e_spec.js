describe('Shapes World Cart Test', () => {
  it('should add an item to the cart', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#showlogin').click();
    cy.get('#btn-login').click();
    cy.get('#showcart').click();
    cy.get('#clearcart').click();
    cy.get('#addtocart_1').click();
    cy.get('#showcart').click();
    cy.get('#cart').click();
  });

  it('should check if the value on the cart is R$5.99', () => {
    cy.get('#grand_total').should('contain', 'R$5.99');
  });
});
