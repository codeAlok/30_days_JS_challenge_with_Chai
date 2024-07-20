// ***** Activity 1: Array Creation and Access *****

// *** Task 1: Create an array of numbers from 1 to 5 and log the array to the console. ***
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// *** Task 2: Access the first and last elements of the array and log them to the console. ***
console.log(numbers[0]);    // 1
console.log(numbers[numbers.length - 1]); // 5


// ***** Activity 2: Array Methods (Basic) *****

// *** Task 3: Use the push method to add a new number to the end of the array and log the update array. ***
numbers.push(6);
numbers.push(7);

console.log("New Array after 2 data push")
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// *** Task 4: Use the pop method to remove the last element from the array and log the updated array. ***
numbers.pop();
numbers.pop();
numbers.pop();

console.log("New Array after 3 data pop")
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// *** Task 5: Use the shift method to remove the first element from the array and log the update array. ***
numbers.shift();
numbers.shift();

console.log("New Array after deleting 2 data from front")
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// *** Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array. ***
numbers.unshift(10);
numbers.unshift(20);

console.log("New Array after adding 2 data from front")
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}


// ***** Activity 3: Array Methods (Intermediate) *****

// *** Task 7: Use the map method to create a new array where each number is doubled and log the new array. ***

let arr1 = [10, 20, 30, 40, 50];
let mapArray = arr1.map((item) => {
    return item * 2;
});

for (let i = 0; i < mapArray.length; i++) {
    console.log(mapArray[i]);
}

// *** Task 8: Use the filter method to create a new array with only even numbers and log the new array. ***
let arr2 = [12, 2, 3, 8, 7, 10, 11, 15];
let filterArray = arr2.filter((item) => {
    return (item % 2 == 0);
});

for (let i = 0; i < filterArray.length; i++) {
    console.log(filterArray[i]);
}

// *** Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result. ***
let arr3 = [1, 2, 4, 2, 1, 5];
let reducedData = arr3.reduce((sum, item) => {
    sum = sum + item;
    return sum;
}, 0);

console.log("reducedData using reduce() ", reducedData);


// ***** Activity 4: Array Iteration *****

// *** Task 10: Use a for loop to iterate over the array and log each element to the console. ***
const arr4 = [34, 23, 12, 5, 65, 76];

for (let i = 0; i < arr4.length; i++) {
    console.log(`Data ${i + 1} is ${arr4[i]}`);
}

// *** Task 11: Use the forEach method to iterate over the array and log each element to the console. ***
const arr5 = [20, 30, 1, , 34, 53];

// foreach() skips empty index
arr5.forEach((item, index) => {
    console.log(`index [${index}] data is ${item}`);
});

console.table(arr5); //show array in table form


// ***** Activity 5: Multi-dimensional Arrays *****

// *** Task 12: Create a two-dimensional array(matrix) and log the entire array to the console. ***
const matrixArray = [
    [2, 5, 3],
    [6, 8, 9],
    [1, 4, 2]
];

// print all element using for loop
for (let i = 0; i < matrixArray.length; i++) {
    for (let j = 0; j < matrixArray[i].length; j++) {
        console.log(`index [${i}][${j}] is ${matrixArray[i][j]}`);
    }
}

// print all element using for-each loop
matrixArray.forEach((row) => {
    row.forEach((element) => {
        console.log(element);
    })
});

// *** Task 13: Access and log a specific element from the two-dimensional array. ***
let rowNum = 1;
let colNum = 2;

console.log(`value at [${rowNum}][${colNum}] is ${matrixArray[rowNum][colNum]}`);

// ** OR **
function getIndexValue(rowNum, colNum, matrixArray) {
    if(rowNum < matrixArray.length && colNum < matrixArray[rowNum].length) {
        return matrixArray[rowNum][colNum];
    }
    else {
        return undefined;
    }
}

let data = getIndexValue(rowNum, colNum, matrixArray)
console.log(`value at [${rowNum}][${colNum}] is ${data}`);