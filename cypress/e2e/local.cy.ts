import "../support/commands";

describe('Local page', () => {
  it('Visit and back from', () => {
    cy.viewport('iphone-8');
    cy.visit('/');
    cy.contains('Strona główna');
    cy.screenshot();
    
    cy.goTo('storage/local', false);
    cy.contains('W pamięci przeglądarki');
    cy.screenshot();

    cy.goTo('home', true);
    cy.contains('Strona główna');
    cy.screenshot();
  })
})
 