// ***** Activity 1: Function Declaration *****

// *** Task 1: Write a function to check if a number is even or odd and log the result to the console. ***
function checkEvenOdd(num) {
    if(num % 2 == 0){
        console.log("Even");
    }else {
        console.log("Odd");
    }
}

checkEvenOdd(10);   // Even
checkEvenOdd(7);    // Odd

// *** Task 2: Write a function to calculate the square of a number and return the result. ***
function getSquare(num) {
    return num*num;
}

console.log(getSquare(8));  // 64
console.log(getSquare(25)); // 625


// ***** Activity 2: Function Expression *****

// *** Task 3: Write a function expression to find the maximum of two numbers and log the result to the console. ***
let maxValue = function(num1, num2) {
    if(num1 > num2) {
        console.log(`${num1} is maximum`);
    } else {
        console.log(`${num2} is maximum`);
    }
}

maxValue(5, 8); // 8 is maximum

// *** Task 4: Write a function expression to concatenate two strings and return the result. ***
let addString = function(str1, str2) {
    return (str1 + ' ' + str2);
}

console.log(addString('Chai', 'Code'));     //Chai Code
console.log(addString('Alok', 'Kumar'));    // Alok Kumar


// ***** Activity 3: Arrow Functions *****

// *** Task 5: Write an arrow function to caluclate the sum of two numbers and return the result. ***
let getSum = (num1, num2) => {
    return num1+num2;
}

console.log(getSum(12, 15));    // 27

// *** Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value. ***
let stringHasChar = (str, char) => {
    for(let i=0; i<str.length; i++) {
        if(str[i] == char) {
            return true;
        }
    }

    return false;
}

console.log(stringHasChar('Alok kumar', 'm'));  // true
console.log(stringHasChar('chaiCode', 'p'));    // false


// ***** Activity 4: Function Parameters and Default Values *****

// *** Task 7: Write a function that takes two parameters and return their product. Provide a default value for the second parameter. ***
function getProduct(num1, num2=15) {
    return num1*num2;
} 

console.log(getProduct(10, 4));     // 40
console.log(getProduct(10));        // 150 (due to default parameter)

// *** Task 8: Write a function that takes a person's name and age and returns a greeting message. provide a default value for the age. ***
function greeting(name, age=10) {
    return `Hello ${name} have a good day, your age is ${age}.`;
}

console.log(greeting('Alok', 22));
console.log(greeting('Bot'));



// ***** Activity 5: Higher-Order Functions *****
// NOte:- HOF is a function which can take a function as a parameter.


// *** Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times. ***

function add(num1, num2) {
    console.log(num1 + num2);
}

function higherOrderFunc(func, num) {
    for(let i=0; i<num; i++) {
        func(i, i+1);
    }
}

higherOrderFunc(add, 5);    // 1 3 5 7 9

// *** Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result. ***
function addTen(num) {
    let result = num + 10;
    
    return result;
}

function multiplyTen (num) {
    console.log(num * 10);
}

function higherOrderFunc2(func1, func2, value) {
    func2(func1(value));
}

higherOrderFunc2(addTen, multiplyTen, 20);  // 300
