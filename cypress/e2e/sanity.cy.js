describe('Sanity check', () => {
  it('abre la página de ejemplo y verifica el título', () => {
    cy.visit('/');
    cy.title().should('include', 'Cypress');
  });
});
