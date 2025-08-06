const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript'},
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'python'},
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'c++'},
      //... More employee records can be added here
    ];


 // Function to display all employees
const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}- ${employee.specialization}</p>`).join('');
        document.getElementById('employeesDetails').innerHTML = totalEmployees;
  

function calculateTotalSalaries() {
      const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
      alert(`Total Salaries: $${totalSalaries}`);
    }


function displayHREmployees() {
     const hrEmployees = employees.filter(employee => employee.department === 'HR');
      const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}- ${employee.specialization}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function displayJavaScriptEmployees() {
     const xEmployees = employees.filter(employee => employee.specialization === 'JavaScript');
      const xEmployeesDisplay = xEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary}- ${employee.specialization}</p>`).join('');
      document.getElementById('employeesDetails').innerHTML = xEmployeesDisplay;
}

