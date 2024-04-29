//          100 days of coding challenge ( DAY 42 )

// Question 01  
let person = {
  name: "Kumar",
  getName: function () {
    return this.name;
  },
};
console.log(person.getName()); // Outputs: Kumar

// Question 02
// --An object with multiple properties and a method that interacts with them using 'this'
const rectangle = {
  length: 8,
  width: 5,
  calculateArea: function () {
    return this.length * this.width;
  },
};
console.log(rectangle.calculateArea()); // Outputs: 40

// Question 03 
// --Demonstrates 'this' behavior change in a nested function
const myObject = {
  property: "Value",
  outerMethod: function () {
    console.log(this.property); // Works as expected, logs "Value"

    const innerMethod = () => {
      console.log(this.property); // Still accesses myObject's 'property' due to arrow function capturing 'this' from outer scope
    };

    innerMethod();
  },
};

myObject.outerMethod();
