// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.


const employee1 = {
  name: 'Atticus',
  employeeNumber: '2405',
  annualSalary: '47000',
  reviewRating: 3
}

// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  let bonusSum = 1;
  if (employee.reviewRating <= 2 ) {
    bonusSum;
  } else if (employee.reviewRating = 3 ) {
    bonusSum += .04;
  } else if (employee.reviewRating = 4 ) {
    bonusSum += .06;
  } else {
    bonusSum += .1;
  }
  if (employee.employeeNumber.length === 4) {
    bonusSum += .05;
  } 
  if (employee.annualSalary > 65000) {
    bonusSum -= .01;
  }
  bonusSum = Math.min(Math.max(bonusSum, 1), 1.13)
  let totalComp = Math.floor(employee.annualSalary * bonusSum);
    let totalBonus = Math.floor(employee.annualSalary * (bonusSum -1));
    const newObj = {
      name: employee.name,
      totalComp,
      totalBonus,
      bonusPercentage: Math.floor((bonusSum - 1) * 100)
    }
    return newObj;
  }    

function calculateBonuses () {
  for (employee of employees){
    console.log('Calculated values: ', calculateIndividualEmployeeBonus(employee))
}
  return;
}
  
  // return new object with bonus results

//console.log(calculateIndividualEmployeeBonus(employee1));