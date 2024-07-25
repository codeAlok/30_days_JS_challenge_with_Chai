// ***** Activity 1: Creating and Exporting Modules *****
// *** Task 1 ***
import { addNumbers } from "./task1Module.js";

const num1=10;
const num2 = 40;
const sum = addNumbers(num1, num2);
console.log(`${num1} + ${num2} = ${sum}`);


// *** Task 2 ***
import { person } from "./task2Module.js";

console.log(`Welcome ${person.name} to day13_modules file`);
console.log(`your ID is: ${person.empId}`);

person.greet();


// ***** Activity 2: Named and Default Exports *****
// *** Task 3 ***
import { getProducts, getQuotient, getSubValue, checkEvenOdd } from "./task3Module.js";

const value1 = 65;
const value2 = 12;

console.log("MainM: ", getProducts(value1, value2));
console.log("MainM: ", getQuotient(value1, value2));
console.log("MainM: ", getSubValue(value1, value2));
console.log("MainM: ", checkEvenOdd(value2));


// *** Task 4 ***
import checkPalindrome from "./task4Module.js";

const pValue = 121;

console.log("MainM: ", checkPalindrome(pValue));


// ***** Activity 4: Using Third-Party Modules *****
// *** Task 5 ***
import * as moduleObj from "./task5Module.js";

const radius = 15;
console.log(moduleObj);
console.log("MainM PI: ", moduleObj.PI);
console.log("MainM Data: ", moduleObj.Data);
console.log("MainM circum: ", moduleObj.calculateCircumference(radius));

console.log("MainM Area: ", moduleObj.calculateArea(radius));


