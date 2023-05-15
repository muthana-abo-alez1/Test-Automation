describe('template spec', () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("form[action='/login/']").as("loginForm");
    cy.get("@loginForm").find("button[type='submit']").as("loginButton");
    cy.get("@loginForm").find("input[name='username']").as("username");
    cy.get("@loginForm").find("input[name='password']").as("password");
    cy.get("@loginForm").find("select[name='login_as']").as("loginAs");
  });

  it("should have a header", () => {
    cy.get("h1").should("contain", "GOALs");
  });

  it("should have a login form", () => {
    cy.get("@loginForm").should("exist");
    cy.get("@username").should("exist");
    cy.get("@password").should("exist");
    cy.get("@loginAs").should("exist");
    cy.get("@loginButton").should("exist");
    cy.get("@loginButton").should("contain", "Login");
  });

  it("should not login with wrong credentials as student", ()  => {
    cy.get("@loginForm").find("input[name='username']").type("wrong");
    cy.get("@loginForm").find("input[name='password']").type("wrong");
    cy.get("@loginForm").find("button[type='submit']").click();
    cy.get(".alert").should("contain", "Incorrect username or password.");
  });

  it("should not login with wrong credentials as staff", () => {
    cy.get("@username").type("wrong");
    cy.get("@password").type("wrong");
    cy.get("@loginAs").select("Staff");
    cy.get("@loginButton").click();
    cy.get(".alert").should("contain", "Incorrect username or password.");
  });

  it("should not login with wrong credentials as admin", () => {
    cy.get("@username").type("wrong");
    cy.get("@password").type("wrong");
    cy.get("@loginAs").select("Admin");
    cy.get("@loginButton").click();
    cy.get(".alert").should("contain", "Incorrect username or password.");
  });

  it("should not login with correct credentials as student", () => {
    cy.get("@username").type(Cypress.env("STAFF_USERNAME"));
    cy.get("@password").type(Cypress.env("STAFF_PASSWORD"));
    cy.get("@loginButton").click();
    cy.get(".alert").should(
      "contain",
      "You do not have permission on any module in this system."
    );
  });

  it("should login with correct credentials as staff", () => {
    cy.get("@username").type(Cypress.env("STAFF_USERNAME"));
    cy.get("@password").type(Cypress.env("STAFF_PASSWORD"));
    cy.get("@loginAs").select("Staff");
    cy.get("@loginButton").click();
    cy.url().should("include", "/staff/");
  });
})