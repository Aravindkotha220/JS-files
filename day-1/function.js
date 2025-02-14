
// question 1
function sayHello() {
    console.log("Hello, World!");
}
sayHello();

//   question 2
function displayWarning() {
    console.log("Warning! System Overload!");
}
displayWarning();

function printStatus() {
    console.log("System Status: Active");
}
printStatus();

//   question 4

function initialize() {
    console.log("Initialization Complete.");
    shutdown();
}
function shutdown() {
    console.log("System Shutting Down…");
}
initialize();

//   question 5
function startProcess() {
    console.log("Process Started.");
    endProcess();
}
function endProcess() {
    console.log("Process Ended.");
}
startProcess();

//   question 6
function greetUser(name) {
    console.log(`Hello, ${name} !`);
}
greetUser("name");
greetUser("Bob");

//   question 7
function calculateSum(num1, num2) {
    console.log(`Sum: ${num1 + num2}`);
}
calculateSum(5, 10);
calculateSum(20, 30);

//   question 8

function countDown() {
    for (let i = 5; i >= 1; i--) {
        console.log(i);
    }
}
countDown();

//   question 9

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log(`${number} is Even`);
    } else {
        console.log(`${number} is Odd`)
    }
}
checkEvenOdd(10);
checkEvenOdd(7);

//   question 10
function beginSession() {
    console.log("Session Started.");
    endSession();
}
function endSession() {
    console.log("Session Ended.");
}
beginSession(); 