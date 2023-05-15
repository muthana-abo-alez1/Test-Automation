# Test-Automation
For GOALS website
## GOALs E2E

## How to run the test
- Clone the repo
- run `npm install`
- run `npm run e2e`
- run the test from the cypress runner
## Goals page : 

The test suite begins by utilizing the beforeEach hook to set the page's<br>
initial state. It goes to the homepage, logs in as an employee,<br>
and goes to the "Goals" page.<br>

### 1- "Filter all students with a low level":<br>
This test applies the filters, filters all students with a low level, and confirms that there are 30 goals in total.<br>

### 2- "Filter all students with a medium level":<br>
Like the previous test, this one checks that the total number of goals displayed is 20, filtering all students with a medium level.<br>

### 3- "Filter all students with a high level":<br>
This test checks that there are 30 goals in total and filters all students with a high level.<br>

### 4- "Filter all students with all levels":<br>
This test applies filters to show goals for every student, regardless of level, and confirms that there are 80 goals in total.<br>

### 5- "Please select a goal alert":<br>
This test clicks on the filter button without selecting any goal and verifies that an alert message appears with the text "Please select a goal."<br>

### 6- "Give grades to all filtered students": <br>
This test applies filters, selects a grade for all students, marks them as observed, and verifies that the total number of goals and observed goals match the expected values.<br>

### 7-"Check Design Goals Page": <br>
To make sure the design is accurate, this test verifies that certain aspects and components are present on the page.<br>





https://github.com/muthana-abo-alez1/Test-Automation/assets/92632582/27ae5979-e146-47e9-a4c0-925c6485a9ca







## Staff page:
The test suite starts with the beforeEach hook,<br>
which sets up the initial state of the page by visiting the homepage,<br>
logging in as a staff member, and navigating to the "Staff" page.<br>

### 1-"Sorting Staff by Username ascending":
This test clicks on the Username column header to sort the staff list in ascending order based on usernames. It then retrieves the usernames from the table and checks if they are sorted correctly.

### 2-"Sorting Staff by Username descending":
Similar to the previous test, this test clicks on the Username column header to sort the staff list in descending order based on usernames. It verifies the correctness of the sorting.

### 3-"Sorting Staff by First Name ascending":
This test clicks on the First Name column header to sort the staff list in ascending order based on first names. It checks if the first names are sorted correctly.

### 4-"Sorting Staff by First Name descending":
Similar to the previous test, this one sorts the staff list in descending order based on first names and verifies the sorting.

### 5-"Sorting Staff by Email ascending":
This test sorts the staff list in ascending order based on email addresses and checks the correctness of the sorting.

### 6-"Sorting Staff by Email descending":
This test sorts the staff list in descending order based on email addresses and verifies the sorting.

### 7-"Sorting Staff by Goal ascending":
This test sorts the staff list in ascending order based on goals and checks if the sorting is correct.

### 8-"Sorting Staff by Goal descending":
Similar to the previous test, this one sorts the staff list in descending order based on goals and verifies the sorting.

### 9-"Sorting Staff by Staff ascending":
This test sorts the staff list in ascending order based on staff members and checks the correctness of the sorting.

### 10-"Sorting Staff by Staff descending":
This test sorts the staff list in descending order based on staff members and verifies the sorting.

### 11-"Search by Email":
This test enters a specific email address in the search box and verifies that the corresponding email is displayed in the table.

### 12-"Search by Last Name":
This test searches for a specific last name in the search box and verifies that the corresponding last name is displayed in the table.

### 13-"Search by First Name":
This test searches for a specific first name in the search box and verifies that the corresponding first name is displayed in the table.

### 14-"Check the button for adding staff":
This test checks if the "Add staff" button is present on the page and has the correct text.

### 15-"Check if the search box exists":
This test checks the presence of the search box on the page.

### 16-"Check the columns in the staff table":
This test verifies the presence of specific columns in the staff table, such as Username, First Name, Last Name, Email, Goal, Staff, Student, Observe, and Academic.



https://github.com/muthana-abo-alez1/Test-Automation/assets/92632582/43b70964-647f-4a80-8592-4f64bf511db4


