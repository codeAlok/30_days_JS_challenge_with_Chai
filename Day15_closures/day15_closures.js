// ***** Activity 1: Understanding Closures *****

// *** Task 1: Write a function that returns another function, where the inner function accesses a variable fromthe outer function's scope. Call the inner function and log the result. ***

function Outer() {
    let val1 = 23;

    return function inner() {
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

    return { increaseCounter, getValue }
}

const getCounter = counter();

getCounter.increaseCounter(); // increase value
getCounter.increaseCounter();
console.log("currentValue: ", getCounter.getValue()) // get current value


// ***** Activity 2: Practical Closures *****

// *** Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call. ***

function generateUniqueId() {
    let id = 1;

    return function () {
        id += 1;
        return id;
    }
}

const uniqueId = generateUniqueId();

console.log("uniqueId: ", uniqueId());

// *** Task 4: Create a closure that captures a user's name and returns a function that greets the user by name. ***

function yourName(myName) {
    return function () {
        return `Good day ${myName}`;
    }
}

const greet = yourName('Alok');

console.log(greet())


// ***** Activity 3: Closures in Loops *****

// *** Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index. ***

function createFunctionArray() {
    let functions = [];

    for (let i = 0; i < 10; i++) {
        functions.push((function (index) {
            return function () {
                console.log("Index of func: ", index);
            };
        })(i));
    }

    return functions;
}

// Create the array of functions
const functionArray = createFunctionArray();

console.log("functionArray: ", functionArray);

// Call each function in the array
functionArray.forEach((func) => {
    func();  // output index 
})


// ***** Activity 4: Module Pattern *****

// *** Task 6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items. ***

function createModule() {
    let itemsCollection = [
        {
            name: "item1",
            quantity: 10,
        },
        {
            name: "item2",
            quantity: 8,
        },
    ];

    // function to add item
    function addItem(itemName, itemQuantity) {
        itemsCollection.push({
            name: itemName,
            quantity: itemQuantity
        })
    }

    // function to remove item
    function removeItem(index) {
        if(index >= 0 && index < itemsCollection.length) {
            itemsCollection.splice(index, 1);
        }else{
            console.log("Index not valid");
        }
    }

    // function to list items
    function listItems() {
        itemsCollection.forEach((item, index) => {
            console.log(`Item ${index} is: `, item)
        })
    }


    // return all function (forming closures)
    return {
        addItem, 
        removeItem,
        listItems
    }
}


const module1 = createModule();

module1.addItem('itemNew', 32);
module1.removeItem(1);
module1.listItems();


// ***** Activity 5: Memoization *****

// *** Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations. ***
function calcSquareRoot() {
    const cache = {};

    return function getSquareRoot(num) {
        if (cache[num]) return cache[num];
        setTimeout(() => {
            const result = Math.sqrt(num).toFixed(3);
            cache[num] = result;
            console.log(`The square root of ${num} is ${result}`);
        }, 4000);
    }
}

const sqRoot = calcSquareRoot();
sqRoot(3); //It takes 4 seconds to give square root 1.732
sqRoot(3); //After memoizing result in cache it immediately gives the result

console.log();



// *** Task 8: Create a memoized version of a function that calculates the factorial of a number. ***
function factorial() {
    const memo = { };

    function factNumber(num) {
        if (num in memo) return memo[num];

        if (num < 0) return `not defined`;

        if (num == 0 || num == 1) return 1;

        memo[num] = num * factNumber(num-1);

        return memo[num];
    }
    return factNumber;
}

const fac = factorial();
const number = 6;
console.log(`The factorial of ${number} is ${fac(number)}`);