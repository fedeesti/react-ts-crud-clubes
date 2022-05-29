/// <reference types="cypress" />

const URL = 'http://localhost:3000/';

beforeEach(() => {
  cy.visit(URL);
});

describe('Single Page Application management', () => {
  it('This test checks the navigation bar', () => {
    cy.get("[data-test='navbar']").should('be.visible');
    cy.get("[data-test='navbar']").contains('Home');
    cy.get("[data-test='navbar']").contains('Create Team');
  });
  it('Tests verify that it changes from home page to create team page', () => {
    cy.get("[data-test='page-title']").should('be.visible').and('contain', 'LIST OF TEAMS');
    cy.get("[data-test='navbar']").should('be.visible');
    cy.get("[data-test='nav-link-create-team']").click();
    cy.get("[data-test='navbar']").should('be.visible');
    cy.get("[data-test='page-title']").should('be.visible').and('contain', 'CREATE A NEW TEAM');
  });
});
