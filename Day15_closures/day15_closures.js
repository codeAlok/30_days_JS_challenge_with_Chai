// ***** Activity 1: Understanding Closures *****

// *** Task 1: Write a function that returns another function, where the inner function accesses a variable fromthe outer function's scope. Call the inner function and log the result. ***

function Outer() {
    let val1 = 23;

    return function inner(){
           return (val1 += 10);
    }
}

const getInner = Outer();

console.log("Inner function: ", getInner());
console.log("Inner function: ", getInner());

// *** Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter. ***

function counter() {
    let counter = 1;

    function increaseCounter() {
        counter += 1;
    }

    function getValue() {
        return counter;
    }

    return {increaseCounter, getValue}
}

const getCounter = counter();

getCounter.increaseCounter(); // increase value
getCounter.increaseCounter(); 
console.log("currentValue: ", getCounter.getValue()) // get current value


// ***** Activity 2: Practical Closures *****

// *** Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call. ***

function generateUniqueId() {
    let id = 1;

    return function() {
        id += 1;
        return id;
    }
}

const uniqueId = generateUniqueId();

console.log("uniqueId: ", uniqueId());

// *** Task 4: Create a closure that captures a user's name and returns a function that greets the user by name. ***

function yourName(myName) {
    return function(){
        return `Good day ${myName}`;
    }
}

const greet = yourName('Alok');

console.log(greet())