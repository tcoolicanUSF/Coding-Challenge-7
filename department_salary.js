//Coding Challenge 7: Company Department Salary Calculation
//Task 1: Create a Department Structure
const company = {
    departments: [
      {
        departmentName: "Racing Department",
        employees: [
          {
            name: "Micheal Schumacher",
            salary: 500000,
            subordinates: [
              {
                name: "Fernando Alonso",
                salary: 400000,
                subordinates: []
              },
              {
                name: "Jenson Button",
                salary: 300000,
                subordinates: []
              }
            ]
          },
          {
            name: "Lewis Hamilton",
            salary: 600000,
            subordinates: []
          }
        ]
      },
      {
        departmentName: "Engineering Department",
        employees: [
          {
            name: "Max Verstappen",
            salary: 700000,
            subordinates: [
              {
                name: "Sebastian Vettel",
                salary: 400000,
                subordinates: []
              },
              {
                name: "Kamui Kobayashi",
                salary: 100000,
                subordinates: []
              }
            ]
          },
          {
            name: "Rubens Barrichello",
            salary: 300000,
            subordinates: []
          }
        ]
      }
    ]
  };

//Task 2: Create a Recursive Function to Calculate Total Salary for a Department
function calculateDepartmentSalary(department) {
    let totalSalary = 0; 
    function calculateEmployeeSalary(employee) {
        totalSalary += employee.salary; 
        employee.subordinates.forEach(calculateEmployeeSalary); 
    }
    department.employees.forEach(calculateEmployeeSalary); // Calculate salary for each employee
    return totalSalary; // Return the total salary calculated
}
// Example usage:
const racingDepartmentSalary = calculateDepartmentSalary(company.departments[0]);
console.log(`Total Salary for Racing Department: $${racingDepartmentSalary}`);

const engineeringDepartmentSalary = calculateDepartmentSalary(company.departments[1]);
console.log(`Total Salary for Engineering Department: $${engineeringDepartmentSalary}`);

