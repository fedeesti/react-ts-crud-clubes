/// <reference types="cypress" />

const URL = 'http://localhost:3000/';
const URL_API = '/api/v1';

beforeEach(() => {
  cy.visit(URL);
});

describe('Single Page Application management', () => {
  it('Tests checks the navigation bar', () => {
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

describe('Home page management', () => {
  it('Tests show the amount of teams', () => {
    const ALL_TEAMS = 6;
    cy.intercept(`${URL_API}/teams`, { fixture: 'equipos.db.json' });
    cy.get("[data-test='home-information']").should('be.visible').and('contain', `There are ${ALL_TEAMS} teams`);
    cy.get("[data-test='btn-add-new-team']").should('be.visible').and('contain', 'Add');
    cy.get("[data-test='all-teams-table']").find("[data-test='team-row']").should('have.length', ALL_TEAMS);
    cy.get("[data-test='table-watch-link']").first().contains('Watch');
    cy.get("[data-test='table-edit-link']").first().contains('Edit');
    cy.get("[data-test='table-delete-link']").first().contains('Delete');
    cy.get("[data-test='table-watch-link']").last().contains('Watch');
    cy.get("[data-test='table-edit-link']").last().contains('Edit');
    cy.get("[data-test='table-delete-link']").last().contains('Delete');
  });
});
