// ***** Activity 1: Sorting Algorithm *****

// *** Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array. ***

function bubbleSort(arr) {
    let temp = arr[0];

    for (let i = 0; i < arr.length; i++) {
        let iteration = false;

        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;

                iteration = true;
            }
        }

        if (!iteration) break;
    }

    return arr;
}

const sortedArray = bubbleSort([10, 5, 22, 1, 5]);
console.log("bubbleSorted: ", sortedArray);

// *** Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array. ***

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let currentSmall = i;
        let temp;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[currentSmall]) {
                currentSmall = j;
            }
        }

        // swapping value
        temp = arr[currentSmall];
        arr[currentSmall] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

const selectSorted = selectionSort([10, 3, 22, 1, 5]);
console.log("selectionSorted: ", selectSorted);

// *** Task 3: Implement the quicksort algorithm to sort an array of numbers in ascending order. Log the sorted array. ***

function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low;
    let j = high;
    let temp;

    while (i < j) {
        while (arr[i] <= pivot && i <= high - 1) {
            i++;
        }

        while (arr[j] > pivot && j >= low + 1) {
            j--;
        }

        if (i < j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    temp = arr[low];
    arr[low] = arr[j];
    arr[j] = temp;

    return j;
}

function quickSort(arr, low, high) {
    if (low < high) {
        let partitionIndex = partition(arr, low, high);

        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }

    return arr;
}

const arr = [10, 3, 22, 1, 5];

const quickSorted = quickSort(arr, 0, arr.length - 1);
console.log("QuickSorted: ", quickSorted);


// ***** Activity 2: Searching Algorithms *****

// *** Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value. ***

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return null;
}

const arr1 = [10, 3, 22, 1, 5];
console.log("lSearch target at index: ", linearSearch(arr1, 3))

// *** Task 5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value. ***

function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid = start + (end - start) / 2;

    while (start <= end) {
        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            start = mid + 1;
        }

        if (arr[mid] > target) {
            end = mid - 1;
        }

        mid = start + (end - start) / 2;
    }

    return null;
}

const arr2 = [2, 4, 6, 8, 12, 13, 15];
console.log("bsearch target at index: ", binarySearch(arr2, 12))


// ***** Activity 3: String Algorithms *****

// *** Task 6: Write a function to count the occurrences of each character in a string. Log the character counts. ***
function countCharOccurrences(str) {
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    return charCount;
}

const str = "hello world";
const characterCounts = countCharOccurrences(str);
console.log("charObj: ", characterCounts)


// *** Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring. ***

// NOte: sliding window technique
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (charIndexMap.has(char)) {
            start = Math.max(charIndexMap.get(char) + 1, start);
        }

        charIndexMap.set(char, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}


const inputString = "abcabcbb";
const result = lengthOfLongestSubstring(inputString);

console.log("Longest Substring length: ", result);


// ***** Activity 4: Array Algorithms *****

// *** Task 8: Write a function to rotate an array by k positions. Log the rotated array. ***

function rotateArray(arr, k) {
    const n = arr.length;
    k = k % n; // To handle cases where k is greater than array length
    return arr.slice(-k).concat(arr.slice(0, -k));
}


const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
const rotatedArray = rotateArray(array, k);

console.log("Rotated Array:", rotatedArray);

// *** Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array. ***

function mergeSortedArrays(arr1, arr2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    // Traverse both arrays and add the smaller element to the merged array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add any remaining elements from arr1
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add any remaining elements from arr2
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

const array1 = [1, 3, 5, 7];
const array2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(array1, array2);

console.log("Merged Array:", mergedArray);


// ***** Activity 5: Dynamic Programming (Optional) *****

// *** Task 10: Write a function to solve the Fibonacci sequence using dynamic programming. Log the Fibonacci numbers. ***


// *** Task 11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained. ***
