

// Spread Operator
// Spread with Arrays

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); 

//  Spread with Objects
const user = { name: "Alice", age: 25 };
const profile = { ...user, job: "Developer" };
console.log(profile);

// Spread in Function Calls
const nums = [3, 5, 7];
console.log(Math.max(...nums)); // Output: 7

// Spread to Clone and Modify Arrays
const original = [1, 2, 3];
const clone = [...original];
const modified = [...original, 4];
console.log(clone);     // [1, 2, 3]
console.log(modified);  // [1, 2, 3, 4]

// Spread to Merge Objects
const contact = { phone: "123456789" };
const person = { name: "Bob", ...contact };
console.log(person); // { name: "Bob", phone: "123456789" }



// REST OPERATOR
// Rest in Function Parameters
function sumAll(...nums) {
    return nums.reduce((a, b) => a + b, 0);
  }
  console.log(sumAll(1, 2, 3, 4));   

// Rest with Object Destructuring
const { name, ...rest } = { name: "Alice", age: 25, job: "Engineer" };
console.log(name); // Alice
console.log(rest); // { age: 25, job: "Engineer" }

// Rest in Variadic Function
function multiply(factor, ...nums) {
    return nums.map(num => num * factor);
  }
  console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]

//   Rest to Catch Extra Arguments
  function greet(first, ...others) {
    console.log("Hello", first);
    console.log("Also saying hi to:", others);
  }
  greet("Sam", "Alex", "Jordan"); 
  // Hello Sam
  // Also saying hi to: [ 'Alex', 'Jordan' ]
  
