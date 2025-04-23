

// modern .js
import {add,sub} from './module.js'
console.log(add(5, 2)); // 7
console.log(sub(7,3));  //4

import user from './module.js';
console.log(user.name); // Alice
console.log(user.age);


// app.js
import env, { port } from './config.js';
console.log(env, port); // Production 3000

// define(['module'], function(math) {
//   return {
//     compute: function(x, y) {
//       return module.add(x, y);
//     }
//   };
// });

// define([], function() {
//   return {
//     greet: function() {
//       return "Hi from AMD!";
//     }
//   };
// });

// require(['module1', 'module2'], function(m1, m2) {
//   console.log(m1.sayHello(), m2.sayBye());
// // });

// Basic Structure UMD
// (function (root, factory) {
//   if (typeof define === 'function' && define.amd) {
//     define(factory);
//   } else if (typeof module === 'object' && module.exports) {
//     module.exports = factory();
//   } else {
//     root.myUtil = factory();
//   }
// }(this, function () {
//   return {
//     sayHi: () => "Hi from SCB!"
//   };
// }));

// UMD with Dependency
// (function (root, factory) {
//   if (typeof define === 'function' && define.amd) {
//     define(['jquery'], factory);
//   } else if (typeof exports === 'object') {
//     module.exports = factory(require('jquery'));
//   } else {
//     root.myPlugin = factory(root.jQuery);
//   }
// }(this, function ($) {
//   return {
//     greet: () => $("body").text("Hello from UMD + jQuery")
//   };
// }));

//  Module Pattern
const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    get: () => count
  };
})();

console.log(counter.increment()); // 1
console.log(counter.get());       // 1

// Pass Parameters to IIFE
(function(name) {
  console.log("Hi, " + name);
})("Charlie");
