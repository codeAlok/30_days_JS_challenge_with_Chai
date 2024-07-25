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


// ***** Activity 3: Using Third-Party Modules *****
// *** Task 5 ***
import * as moduleObj from "./task5Module.js";

const radius = 15;
console.log(moduleObj);
console.log("MainM PI: ", moduleObj.PI);
console.log("MainM Data: ", moduleObj.Data);
console.log("MainM circum: ", moduleObj.calculateCircumference(radius));

console.log("MainM Area: ", moduleObj.calculateArea(radius));


// ***** Activity 4: Using Third-Party Modules *****

// *** Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script. ***

// **** NOTE: lodash is a small library which make it easy to Iterating arrays, objects, & strings and some other task also ****

import _ from "lodash";

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(_.reverse(numbers));
console.log(_.chunk(numbers, 3));
console.log(_.difference(numbers, [2, 3, 8]));

// *** Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script. ***

// ***** NOTE: axios is like a better option for fetching data compare to fetch() ****

import axios from "axios";

async function getData() {
    try{
        const user = await axios.get("  https://api.github.com/users/codeAlok");

        console.log(user);
        console.log(user.data.name);
    }
    catch(err) {
        console.log(err);
    }
}

getData();

