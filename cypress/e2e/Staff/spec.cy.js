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
    cy.get('a.nav-link.text-light[href="/staff/33/staffs/"]').click();
  });

  it("Sorting Staff by Username ascending", () => {
    cy.wait(1000)
    cy.get('tr td:first-child').then($columns => {
      const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
      const sortedValues = [...values].sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
      });
      expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
    });
  });
  it("Sorting Staff by Username descending", () => {
    cy.get('.dataTables_scrollHeadInner > .table > .thead-dark > tr > .sorting_asc').click();
    cy.get('tr td:first-child').then($columns => {
      const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
      const sortedValues = [...values].sort((a, b) => b.localeCompare(a));
      expect(values).to.deep.equal(sortedValues);
    });
  });



  it("Sorting Staff by first name ascending", () => {
    cy.contains('th.sorting[aria-label="First Name: activate to sort column ascending"]', 'First Name').click();
    cy.get('tr td:nth-child(2)').then($columns => {
      const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
      const sortedValues = [...values].sort();

      expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
    });
  });

  it("Sorting Staff by first name descending", () => {
    cy.contains('th.sorting[aria-label="First Name: activate to sort column ascending"]', 'First Name').click();
    cy.wait(1000)
    cy.get('th.sorting_asc[aria-label="First Name: activate to sort column descending"]').click();
    cy.get('tr td:nth-child(2)').then($columns => {
      const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
      const sortedValues = [...values].sort((a, b) => b.localeCompare(a));

      expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
    });
  });


  it("Sorting Staff by Email ascending", () => {
    cy.contains('th.sorting[aria-label="Email: activate to sort column ascending"]', 'Email').click();
    cy.wait(1000);
    cy.get('tr td:nth-child(4)').then($columns => {
      const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
      const sortedValues = [...values].sort();
      expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
    });
  });

  it("Sorting Staff by Email descending", () => {
    cy.contains('th.sorting[aria-label="Email: activate to sort column ascending"]', 'Email').click();
    cy.wait(1000)
    cy.contains('th[aria-label="Email: activate to sort column descending"]', 'Email').click();
    cy.get('tr td:nth-child(4)').then($columns => {
      const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
      const sortedValues = [...values].sort((a, b) => b.localeCompare(a));
      expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
    });
  });

  it("Sorting Staff by Goal ascending", () => {
    cy.contains('th.sorting[aria-label="Goal: activate to sort column ascending"]', 'Goal').click();
    cy.wait(1000);
    cy.get('tr td:nth-child(5)').then($columns => {
      const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
      const sortedValues = [...values].sort();
      expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
    });
  });


  it("Sorting Staff by Goal descending", () => {
    cy.contains('th.sorting[aria-label="Goal: activate to sort column ascending"]', 'Goal').click();
    cy.contains('th[aria-label="Goal: activate to sort column descending"]', 'Goal').click();
    cy.wait(1000)
    cy.get('tr td:nth-child(5)').then($columns => {
      const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
      const sortedValues = [...values].sort((a, b) => b.localeCompare(a));
      expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
    });
  });


  it("Sorting Staff by Staff ascending", () => {
    cy.contains('th.sorting[aria-label="Staff: activate to sort column ascending"]', 'Staff').click();
    cy.wait(1000);
    cy.get('tr td:nth-child(6)').then($columns => {
      const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
      const sortedValues = [...values].sort();
      expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
    });
  });


  it("Sorting Staff by Staff descending", () => {
    cy.contains('th.sorting[aria-label="Staff: activate to sort column ascending"]', 'Staff').click();
    cy.contains('th[aria-label="Staff: activate to sort column descending"]', 'Staff').click();
    cy.wait(1000);
    cy.get('tr td:nth-child(6)').then($columns => {
      const values = $columns.map((index, element) => Cypress.$(element).text().trim()).get();
      const sortedValues = [...values].sort((a, b) => b.localeCompare(a));
      expect(JSON.stringify(values)).to.equal(JSON.stringify(sortedValues));
    });
  });



  it("Search by Email", () => {
    cy.get('input[type="search"][aria-controls="staffs"]')
        .type('BP415@live.mdx.ac.uk');
    cy.get('tr td:nth-child(4)')
        .contains('BP415@live.mdx.ac.uk');

  });

  it("Search by Last Name", () => {
    cy.get('input[type="search"][aria-controls="staffs"]')
        .type('aboalez');
    cy.get('tr td:nth-child(3)')
        .contains('aboalez');
  });

  it("Search by First Name", () => {
    cy.get('input[type="search"][aria-controls="staffs"]')
        .type('muthana');
    cy.get('tr td:nth-child(2)')
        .contains('muthana');
  });

  it("Check the button for add stuff, if the button is present", () => {
    cy.get('button.btn.btn-primary[onclick="addStaff()"]').should('exist').should('contain.text', 'Add staff') ;
  });

  it("Check if the search box exists", () => {
    cy.get('input[type="search"].form-control.form-control-sm[aria-controls="staffs"]').should('exist')
  });

  it("check the columns in the staff table if they are all present", () => {
    cy.contains('div.dataTables_scrollHead', 'Username').should('exist')
    cy.contains('div.dataTables_scrollHead', 'First Name').should('exist')
    cy.contains('div.dataTables_scrollHead', 'Last Name').should('exist')
    cy.contains('div.dataTables_scrollHead', 'Email').should('exist')
    cy.contains('div.dataTables_scrollHead', 'Goal').should('exist')
    cy.contains('div.dataTables_scrollHead', 'Staff').should('exist')
    cy.contains('div.dataTables_scrollHead', 'Student').should('exist')
    cy.contains('div.dataTables_scrollHead', 'Observe').should('exist')
    cy.contains('div.dataTables_scrollHead', 'Academic').should('exist')
  });


})