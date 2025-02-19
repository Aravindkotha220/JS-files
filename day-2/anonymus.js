
// 1
var processNumbers = function(num1, num2, callback){
    return callback(num1, num2);
}
var result = processNumbers(3, 4, function(a, b){
    return a + b;
})
console.log("Sum: " + result); 


//2
function greet(callback){
    return callback("Aravind");
}
var result = greet(function(name){
    return "Hello, " + name + "!";
})
console.log(result);
  

// //3
function calculate(x, y, callback){
    return callback(x, y);
}
var result = calculate(10, 5, function(x, y) {
    return x - y;
})
console.log("Difference: " + result);
  
