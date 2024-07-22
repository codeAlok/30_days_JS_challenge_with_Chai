// ***** Activity 1: Template literals *****

// *** Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console. ***
const pName = "Alok kumar";
const age = 22;
const string1 = `My name is ${pName} and I am ${age} year old`;

console.log(string1);

// *** Task 2: Create a multi-line string using template literals and log it to the console. ***
const string2 = `This string doesn't 
need any escape
character to break it into 
multi line as we're using template literals.`;

console.log(string2);


// ***** Activity 2: Destructuring *****

// *** Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. ***
const numbers = [10, 20, 30, 50, 60];
const [first, second] = numbers;

console.log(`first value ${first} and second value ${second}`);

// *** Task 4: Use object destructuring to extract the title and author from a book object and log them to the console. ***
const book = {
    title: "kaise hain aaplog",
    author: "ajay",
    year: 2020
};

const {title, author} = book;

console.log(`title is ${title} and author is ${author}`);


// ***** Activity 3: Spread and Rest Operators *****

// *** Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. ***

const arr1 = [10, 20, 30, 40, 50];
const spreadArray = [3, 5, ...arr1, 7, 80];

console.log("spreadArray ", spreadArray);

// *** Task 6: Use the rest operator in a function to accept an arbitary number of arguments, sum them, and return the result. ***
function getRestValue(a, b, ...rest) {
    let sum = a + b;
    console.log("length of rest: ", rest.length);
    
    rest.forEach((item) => {
        sum += item;
    });

    return sum;
}

const restResult = getRestValue(10, 20, 30, 40, 50, 60, 70, 80, 90, 100);

console.log("Total Sum: ", restResult);


// ***** Activity 4: Default Parameters *****

// *** Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of caling this function with and without the second parameter. ***

function getProduct(param1, param2 = 1) {
    return param1 * param2;
}

console.log(getProduct(10, 20)); // with both args
console.log(getProduct(20)); // with one args


// ***** Activity 5: Enhanced Object Literals *****

// *** Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. ***
const myName = "Alok";
const enhancedObject = {
    myName,
    age,
    role: "Frontend Developer",
    greeting() {
        console.log("Kaise hain aaplog");
    },
};

console.log("enhanced Object: ", enhancedObject);

// *** Task 9: Create an object with computed property names based on variables and log the object to the console. ***
const studentRoll = 3;
const studentName = "Aditya"

const computedPropsObj = {
    ["roll" + studentRoll]: "Aditya Raj",
    [studentName + "Age"]: 25,
};

console.log("computedProps Object: ", computedPropsObj);
