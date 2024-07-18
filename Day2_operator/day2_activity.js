// ***** Activity 1: Arithmetic Operations *****
// *** Task 1 ***
let firstNumber = 55;
let secondNumber = 32;

console.log(firstNumber + secondNumber); // 87

// *** Task 2 ***
console.log(secondNumber - firstNumber); // -23

// *** Task 3 ***
console.log(firstNumber * secondNumber); // 1760

// *** Task 4 ***
console.log(firstNumber / secondNumber); // 1.71875

// *** Task 5 ***
console.log(firstNumber % secondNumber); // 23


// ***** Activity 2: Assignment Operators *****
// *** Task 6 ***
firstNumber += 100;
console.log(firstNumber); // 155

// *** Task 7 ***
firstNumber -= 55;
console.log(firstNumber); // 100


// ***** Activity 3: Comparison Operators *****
// *** Task 8 ***
console.log("54 > 45", 54 > 45);  // true
console.log("54 > 45", 54 < 45);  // false

// *** Task 9 ***
console.log("100 >= 100 " , 100 >= 100 );    // true

console.log("100 <= 99 ", 100 <= 99);    // false

// *** Task 10 ***
console.log("'10' == 10", '10' == 10);    // true
console.log("'10' === 10" ,'10' === 10);   // false


// ***** Activity 4: Logical Operators *****
// *** Task 11 ***
console.log((54 > 45) && ('10' === 10)); // false (only true if both condition will be true)

// *** Task 12 ***
console.log((54 > 45) && ('10' === 10)); // true ( only fasle if both condition will be false)

// *** Task 13 ***
console.log( !(100 <= 99) ); // true (! => negate or convert true-> false and fasle-> true)


// ***** Activity 5: Ternary Operator *****
// *** Task 14 ***
let num = 10;
let result = (num > 0)? "positive" : "negative";
console.log(result);    // positive

