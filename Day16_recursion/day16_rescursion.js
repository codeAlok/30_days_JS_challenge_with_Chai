// ***** Activity 1: Basic Recursion *****

// *** Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases. ***
function getFactorial(num) {
    if (num === 0) return 1;

    return (num * getFactorial(num - 1))
}

console.log("Factorial is: ", getFactorial(5))
console.log("Factorial is: ", getFactorial(6))
console.log("Factorial is: ", getFactorial(8))


// *** Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases. ***

function fibonacci(n) {
    if (n <= 0) {
        return "Input should be a positive integer";
    } else if (n === 1) {
        return 0;
    } else if (n === 2) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Test cases
const testCases = [1, 2, 3, 5, 10, 15];

// Logging the results
testCases.forEach(testCase => {
    console.log(`Fibonacci(${testCase}) = ${fibonacci(testCase)}`);
});


// ***** Activity 2: Recursion with Arrays *****

// *** Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for a few text cases. ***
function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }

    return arr[0] + sumArray(arr.slice(1));
}

console.log("ArraySum is: ", sumArray([1, 2, 3, 4, 5]));
console.log("ArraySum is: ", sumArray([10, 20, 30]));


// *** Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases. ***

function maxElement(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    // each time calling the function after removing first element (value in max will come on returning time)
    max = maxElement(arr.splice(1));

    // arr[0] > max ? arr[0] : max;
    if (arr[0] > max) {
        return arr[0]
    }
    else {
        return max;
    }

}

const arr1 = [10, 5, 8, 9, 11];
const arr2 = [23, 120, 2, 543, 254];

console.log(`Max value: ${maxElement(arr1)}`);
console.log(`Max value: ${maxElement(arr2)}`);

// ***** Activity 3: String manipulation with Recursion *****

// *** Task 5: Write a recursive function to reverse a string. Log the result for a few test cases. ***

function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }

    // Recursive case: take the last character and add the reverse of the remaining string
    return str.charAt(str.length - 1) + reverseString(str.substring(0, str.length - 1));
}

// Test cases
console.log(reverseString("Alok"));
console.log(reverseString("Kumar"));

// *** Task 6: Write a recursive function to check if a string is palindrome. Log the result for a few test cases. ***

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    // Check if the first and last characters are the same
    if (str.charAt(0) !== str.charAt(str.length - 1)) {
        return false;
    }

    // Recursive case: check the substring excluding the first and last characters
    return isPalindrome(str.substring(1, str.length - 1));
}

// Test cases
console.log(isPalindrome("racecar"));
console.log(isPalindrome("asfas"));


// ***** Activity 4: Recursive Search *****

// *** Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases. ***

function binarySearch(arr, target, left = 0, right = arr.length - 1) {

    if (left > right) {
        return -1;
    }

    // Calculate the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) {
        return mid;
    }

    // If the target is less than the middle element, search in the left half
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }

    // If the target is greater than the middle element, search in the right half
    return binarySearch(arr, target, mid + 1, right);
}


console.log("found at index: ", binarySearch([1, 2, 3, 4, 5], 3));
console.log("found at index: ", binarySearch([1, 2, 3, 4, 5], 8));


// *** Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases. ***
function countOccurrences(arr, target, index = 0) {

    if (index >= arr.length) {
        return 0;
    }

    // Check if the current element matches the target
    const match = arr[index] === target ? 1 : 0;

    // Recursive case: add the match (0 or 1) to the count of the rest of the array
    return match + countOccurrences(arr, target, index + 1);
}

console.log("count is: ", countOccurrences([1, 2, 3, 2, 4, 2], 2));
console.log("count is: ", countOccurrences([1, 2, 3, 4, 5], 6));



// ***** Activity 5: Tree Traversal (Optional) *****

// *** Task 9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited. ***

// *** Task 10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases. ***

