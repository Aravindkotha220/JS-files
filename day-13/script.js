
// Array Methods
// Array.prototype
Array.prototype.sum = function () {
    return this.reduce((total, num) => total + num, 0);
  };
  
  const nums = [1, 2, 3, 4];
  console.log(nums.sum()); 
  
//   Standalone custom method
function double_Values(arr) {
    return arr.map(num => num * 2);
  }
  
  console.log(double_Values([1, 2, 3])); 
  
//   Object Methods
const user = {
    name: "Aravind",
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  user.greet(); 

//   Object with method that processes data
const calculator = {
    a: 5,
    b: 10,
    add() {
      return this.a + this.b;
    }
  };
  
  console.log(calculator.add()); // Output: 15

//   Dynamic Object Method (with parameters)
const student = {
    name: "Aravind",
    subjects: ["English", "Science"],
    addSubject(subject) {
      this.subjects.push(subject);
    }
  };
  
  student.addSubject("Chemistry");
  console.log(student.subjects);


let a=[1,2,3]
a[10]=4
console.log(a);
console.log(a[5]);

// .map() Method
function customMap(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
    return result;
  }
  
  // Usage:
  const numbers = [1, 2, 3];
  const doubled = customMap(numbers, (n) => n * 2);
  console.log(doubled); // [2, 4, 6]
  

//   .filter() Method

function customFilter(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result.push(array[i]);
    }
  }
  return result;
}

// Usage:
const numss = [1, 2, 3, 4];
const even = customFilter(numss, (n) => n % 2 === 0);
console.log(even); // [2, 4]



// .reduce() Method

function customReduce(array, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}

// Usage:
const number = [1, 2, 3, 4];
const sum = customReduce(number, (acc, val) => acc + val, 0);
console.log(sum); // 10


// Add to Array.prototype 

Array.prototype.customMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

// Usage:
const doubled2 = [1, 2, 3].customMap(n => n * 2);
console.log(doubled2); // [2, 4, 6]