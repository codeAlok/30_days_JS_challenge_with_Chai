// ****** NOTE: You can throw exceptions using the throw statement and handle them using the try...catch statements.

// ****** NOTE: If any statement within the try block (or in a function called from within the try block) throws an exception, control immediately shifts to the catch block.


// ***** Activity 1: Basic Error Handling with Try-Catch *****

// *** Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console. ***
function getError() {
    console.log("error function called");
    throw new Error("you got a error");
}

try {
    const a = getError();
    console.log(a);
}
catch (e) {
    console.error(e);
}

// *** Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error. ***

function getDivision(num1, num2) {
    if (num2 === 0) {
        throw new Error("Denominator can't be a zero");
    }
    else {
        return num1 / num2;
    }
}

try {
    const num1 = 10;
    const num2 = 0;
    const result = getDivision(num1, num2);
    console.log("Division result: ", result);
}
catch (err) {
    console.error(err);
}


// ***** Activity 2: Finally Block *****

// *** Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally block to obeserve the execution flow. ***
function getWeekName(weekNum) {
    const weeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    try{
        if (weekNum > 0 && weekNum <= 7) {
            for(let i=0; i<weeks.length; i++){
                if(i === weekNum){
                    console.log("WeekDay is:", weeks[i] );
                }
            }
        } else {
            throw new Error("Invalid Week Number");
        }
    }
    catch (err) {
        console.error(err);
    }
    finally {
        console.log("Finally your query is answered");
    }
}

getWeekName(5); 


// ***** Activity 3: Custom Error Objects *****

// *** Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block. ***
class CustomError extends Error {
    name = "CustomError"; 

    constructor(message) {
        super(message); // calling parent constructor with message
    }
}

function positiveNumber(num) {
    if(num > 0) {
        return "positive";
    }
    else{
        throw new CustomError("Not a valid number");
    }
}

try{
    const num = 0;
    const getValue = positiveNumber(num);
    console.log(getValue);
}
catch (err) {
    if(err instanceof CustomError){
        console.error(err.name);
        console.error(err.message);
    }
    else{
        console.log(err);
    }
}


// *** Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block. ***
function validateUserInput(userInput) {
    try{
        if(userInput === ''){
            throw new CustomError("userName should not be empty");
        }
        else{
            console.log("successull logedin");
        }
    }
    catch(err) {
        console.error(err);
    }
}

validateUserInput("AK");
// validateUserInput("");



// ***** Activity 4: Error Handling in Promises *****

// *** Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console. ***


const promiseOne = new Promise((resolve, reject) => {
    const randomNum = Math.floor(1 + (Math.random() * 10));

    if(randomNum <= 5){
        resolve(randomNum);
    }else{
        reject(new Error(`${randomNum} is greater than 5`))
    }
})

promiseOne
.then((response) => {
    console.log("value is: ", response);
})
.catch((err) => {
    console.error(err);
})

// *** Task 7: Use try-catch within an async function to handle errors from a promise that randomly resloves or rejects, and log the error message. ***
async function handleRandomResult() {
    try{
        const data = await promiseOne;
        console.log("In async data is ", data);
    }
    catch (err) {
        console.error("in async", err);
    }
}

handleRandomResult();


// ***** Activity 5: Graceful Error Handling in Fetch *****
/* **** NOTE: By default, fetch considers any HTTP response (even 404 or 500 status codes) as a successful fetch operation and resolves the Promise. These HTTP errors do not trigger the catch block automatically. Instead, they must be handled in the then block by checking the response.ok property or the status code explicitly. 
response.ok property will be true if the HTTP response status code is in the range of 200 to 299. These status codes indicate that the request was successful. ****
*/

// *** Task 8: Use the fetch API to request data from an invalid URL and handle the error using .catch(). log an appropriate error message to the console. ***

fetch('https://api.github.com/users/USERNAME')
.then((response) => {
    // console.log(response)
    
    if(response.ok) {
        return response.json();
    }else{
        throw new Error("USER Not found or Invalid URL")
    }
})
.then((user) => {
    console.log("Got data: ", user.name);
})
.catch((err) => {
    console.error("In .catch(): ", err);
});


// *** Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message. ***
async function handleInvalidURL() {
    try{
        const response = await fetch('https://api.github.com/users/USERNAME');
    
        if(!response.ok){
            throw new Error("USER Not Found or Invalid URL");
        }else{
            const user = await response.json();
            console.log("in async: ", user.name);
        }

    }
    catch (err) {
        console.error("In async try-catch: ", err);
    }
}

handleInvalidURL();