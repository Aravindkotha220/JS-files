//  1 - task
//mathOperations.js
import { add, substract,mul,div } from "./mathOperations.js";
console.log(substract(5,6));
console.log(add(5,2));

// 2 - task 
// user.js
import user from './user.js';
console.log(user.name); // Alice
console.log(user.age); // 25 

// 3 - task
// const.js
import * as constant from './constant.js';

console.log(constant.add(2, 3));      // 5
console.log(constant.subtract(5, 2)); // 3
console.log(constant.mul(5,4));
console.log(constant.div(6,2));
console.log(constant.PI);
console.log(constant.G);
console.log(constant.S);


// 4 - task
async function loadModule() {
    try {
      const module = await import('./greeting.js');
      const sayHello = module.default; // Access default export
      sayHello(); // Call the function
    } catch (error) {
      console.error('Failed to load module:', error);
    }
  }
  
  loadModule(); // Outputs: Hello from the greetings module!

//   all over  is 5th task

  