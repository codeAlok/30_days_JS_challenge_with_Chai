// ***** Activity 1: For loop *****
// *** Task 1: WAP to print numbers from 1 to 10 using a for loop ***
for (let i = 1; i <= 10; i++) {
    console.log(`${i} `);
}

// *** Task 2: WAP to print the multiplication table of 5 using a for loop. ***
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// ***** Activity 2: While loop *****
// *** Task 3: WAP to calculate the sum of numbers from 1 to 10 using a while loop. ***
let num = 1;
let sum = 0;

while (num <= 10) {
    sum += num;
    num++;
}
console.log("sum from 1 to 10 is: ", sum);

// *** Task 4: WAP to print the numbers from 10 to 1 using a while loop. ***
let tempNum = 10;

while (tempNum > 0) {
    console.log(tempNum);
    tempNum--;
}


// ***** Activity 3: Do...While loop *****
// *** Task 5: WAP to print numbers from 1 to 5 using a do...while loop. ***
let num1 = 1;

do {
    console.log(num1);
    num1++;
} while (num1 <= 5);

// *** Task 6: WAP to calculate the factorial of a number using a do...while loop. ***
let num2 = 5;
let temp = num2;
let factorial = 1;

do {
    factorial *= num2;
    num2--;
} while (num2 > 1);

console.log(`factorial of ${temp} is ${factorial}`);


// ***** Activity 4: Nested loops *****
// *** Task 7: WAP to print a pattern using nested for loops. ***
let row = 5;

for (let i = 0; i < row; i++) {
    let pattern = '';
    for (let j = 0; j <= i; j++) {
        pattern += '* ';
    }
    console.log(pattern);
}


// ***** Activity 5: Loop Control Statements *****
// *** Task 8: WAP to print numbers from 1 to 10 , but skip the number 5 using the continue statement. ***
for (let i = 1; i <= 10; i++) {
    if (i == 5) continue;
    console.log(i);
}

// *** Task 9: WAP to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement. ***
for (let i = 1; i <= 10; i++) {
    if (i == 7) break;
    console.log(i);
}