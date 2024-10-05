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
                name: "Jenson Buttton",
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
  
