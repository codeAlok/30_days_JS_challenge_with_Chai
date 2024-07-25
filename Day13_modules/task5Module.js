// *** Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties. ***

const PI = 3.14;
const Data = 100;
const SECONDS = 60;


// Function to calculate the circumference of a circle
function calculateCircumference(radius) {
    return (2 * PI * radius);
}

// Function to calculate the area of a circle
function calculateArea(radius) {
    return (PI * radius * radius);
}

// Function to calculate Seconds in Hours
function calculateSeconds() {
    return (SECONDS * Data);
}

export { PI, Data, SECONDS, calculateArea, calculateCircumference, calculateSeconds };