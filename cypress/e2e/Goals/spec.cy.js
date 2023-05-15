describe('goals', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("form[action='/login/']").as("loginForm");
    cy.get("@loginForm").find("button[type='submit']").as("loginButton");
    cy.get("@loginForm").find("input[name='username']").as("username");
    cy.get("@loginForm").find("input[name='password']").as("password");
    cy.get("@loginForm").find("select[name='login_as']").as("loginAs");
    cy.get("@username").type(Cypress.env("STAFF_USERNAME"));
    cy.get("@password").type(Cypress.env("STAFF_PASSWORD"));
    cy.get("@loginAs").select("Staff");
    cy.get("@loginButton").click();
    cy.url().should("include", "/staff/");
    cy.get(".nav > .nav-item > .nav-link").click();
    cy.get(".nav-item a.nav-link[href^='/staff'][href$='/goals/']").click();
  });



  it("Filter all students with a low level ", () => {
    cy.contains('label.custom-control-label', 'All').click();
    cy.get('label.custom-control-label[for="all_groups"]').click();
    cy.get('label.custom-control-label[for="all_levels"]').contains('All').click();
    cy.contains('label.custom-control-label[for="level_Low"]', 'Low').click();
    cy.get('label.custom-control-label[for="expected_ByNow"]').click();
    cy.get('.align-items-center > :nth-child(3) > .btn')
    cy.get('button.btn.btn-primary.mt-2.w-100[onclick="applyGoalFilters(this)"]').click();
    cy.contains('span.badge.badge-primary', 'Total Goals').find('span.h2#total_goal');
    cy.contains('span.h2#total_goal', '30');
  });

  it("Filter all students with a Medium level ", () => {
    cy.contains('label.custom-control-label', 'All').click();
    cy.get('label.custom-control-label[for="all_groups"]').click();
    cy.get('label.custom-control-label[for="all_levels"]').contains('All').click();
    cy.contains('label.custom-control-label[for="level_Medium"]', 'Medium').click();
    cy.get('label.custom-control-label[for="expected_ByNow"]').click();
    cy.get('.align-items-center > :nth-child(3) > .btn')
    cy.get('button.btn.btn-primary.mt-2.w-100[onclick="applyGoalFilters(this)"]').click();
    cy.contains('span.badge.badge-primary', 'Total Goals').find('span.h2#total_goal');
    cy.contains('span.h2#total_goal', '20');
  });

  it("Filter all students with a High level ", () => {
    cy.contains('label.custom-control-label', 'All').click();
    cy.get('label.custom-control-label[for="all_groups"]').click();
    cy.get('label.custom-control-label[for="all_levels"]').contains('All').click();
    cy.contains('label.custom-control-label[for="level_High"]', 'High').click();
    cy.get('label.custom-control-label[for="expected_ByNow"]').click();
    cy.get('.align-items-center > :nth-child(3) > .btn')
    cy.get('button.btn.btn-primary.mt-2.w-100[onclick="applyGoalFilters(this)"]').click();
    cy.contains('span.badge.badge-primary', 'Total Goals').find('span.h2#total_goal');
    cy.contains('span.h2#total_goal', '30');
  });

  it("Filter all students with a all levels ", () => {
    cy.contains('label.custom-control-label', 'All').click();
    cy.get('label.custom-control-label[for="all_groups"]').click();
    cy.get('label.custom-control-label[for="expected_ByNow"]').click();
    cy.get('.align-items-center > :nth-child(3) > .btn')
    cy.get('button.btn.btn-primary.mt-2.w-100[onclick="applyGoalFilters(this)"]').click();
    cy.contains('span.badge.badge-primary', 'Total Goals').find('span.h2#total_goal');
    cy.contains('span.h2#total_goal', '80');
  });

  it("Check Design Goals Page ", () => {
    cy.contains('label.custom-control-label', 'All').should('exist');
    cy.get('label.custom-control-label[for="all_groups"]').should('exist');
    cy.get('label.custom-control-label[for="expected_ByNow"]').should('exist');
    cy.get('.align-items-center > :nth-child(3) > .btn').should('exist');
    cy.get('button.btn.btn-primary.mt-2.w-100[onclick="applyGoalFilters(this)"]').should('exist');
    cy.contains('span.badge.badge-primary', 'Total Goals').find('span.h2#total_goal').should('exist');
    cy.get('button.btn.btn-danger.mt-2.w-100[onclick="observeAll(\'undo\', this)"]').should('exist');
    cy.get('button.btn.btn-primary.mt-2.w-100[onclick="observeAll(\'add\', this)"]').should('exist');
    cy.get('select[name="grade"].form-control.mt-2.w-100.pr-0').should('exist');
  });

  it("should a message containing Please select a goal appears when clicking on a filter without selecting any goal", () => {
    cy.get('button.btn.btn-primary.mt-2.w-100[onclick="applyGoalFilters(this)"]').click();
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Please selet a goal');
    });
  });

  it("Give grades to all filtered students", () => {
    cy.contains('label.custom-control-label', 'All').click();
    cy.get('label.custom-control-label[for="all_groups"]').click();
    cy.get('label.custom-control-label[for="expected_ByNow"]').click();
    cy.get('.align-items-center > :nth-child(3) > .btn')
    cy.wait(1000)
    cy.get('button.btn.btn-primary.mt-2.w-100[onclick="observeAll(\'add\', this)"]')
        .click();
    cy.wait(1000)
    cy.get(':nth-child(6) > .form-control').select("9")
    cy.wait(1000)
    cy.get('label.custom-control-label[for="not_observed"]')
        .click();
    cy.get('button.btn.btn-primary.mt-2.w-100')
        .contains('Observe')
        .click();
    cy.contains('span.h2#total_goal', '80');
    cy.get('span.h2#observedGoal')
        .contains('80');
    cy.get('div.col-6 select[name="grade"]')
        .should('have.value', '9');
  });

})