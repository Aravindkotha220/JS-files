
// task-1
const person = {
    name: "John Doe",
    age: 30,
    address: {
      city: "New York",
      country: "USA"
    },
    hobbies: ["Reading", "Traveling"]
  };
  
  // Destructuring with renaming and default value
  const {
    name: fullName,
    age,
    address: { city, country = "Unknown" },
    hobbies: [firstHobby]
  } = person;
  
  console.log(fullName);   
  console.log(age);       
  console.log(city);       
  console.log(country);   
  console.log(firstHobby);

// task-2

const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

// 1. Destructure first two fruits
let [fruit1, fruit2, ...remainingFruits] = fruits;

console.log(fruit1);         
console.log(fruit2);           
console.log(remainingFruits);  

// 2. Swap the first and second fruit
[fruit1, fruit2] = [fruit2, fruit1];

console.log(fruit1);
console.log(fruit2);

//TASK-3

function sumNumbers(...numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
  }
  
  console.log(sumNumbers(1, 2, 3, 4));
  console.log(sumNumbers(10, 20, 30)); 

//   task-4
const user = { name: "Alice", age: 25 };
const job = { title: "Developer", company: "TechCorp" };

const userProfile = {
  ...user,
  ...job,
  experience: "2 years"
};

console.log(userProfile);


// task-5
const numbers = [1, 2, 3, 4, 5];

// 1. Shallow copy of the array
const copyNumbers = [...numbers];

// 2. New array with 0 at the beginning and 6 at the end
const modifiedNumbers = [0, ...numbers, 6];

console.log(copyNumbers);       // Output: [1, 2, 3, 4, 5]
console.log(modifiedNumbers);   // Output: [0, 1, 2, 3, 4, 5, 6]

