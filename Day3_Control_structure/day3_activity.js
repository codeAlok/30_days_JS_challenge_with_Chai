// ***** Activity 1: If- Else statements *****
// *** Task 1: WAP to check if a number is negative, positive, or zero, and log the result to the console. ***
let num1 = "dfk";

if (num1 > 0) {
    console.log("Positive");
} else if (num1 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// *** Task 2: WAP to check if a person is eligible to vote (age >= 18) and log the result to the console. ***
let age = 50;

if(age >= 18){
    console.log("Eligible to vote");
}else{
    console.log("Not Eligible to vote");
}


// ***** Activity 2: Nested If- Else statements *****
// *** Task 3: WAP to find the largest of three numbers using nested if-else statements. ***
let a = 50;
let b = 80;
let c = 20;

if(a >= b) {
    if(a >= c){
        console.log("a is largest");
    }
}else if(b >= a) {
    if(b >= c){
        console.log("b is largest");
    }else{
        console.log("c is largest")
    }
}else{
    console.log("c is largest");
}


// ***** Activity 3: Switch Case *****
// *** Task 4: WAP that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console. ***
let day = 5;  // (1-7)

switch(day) {
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day Number");
}

// *** Task 5: WAP tha uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'E', 'F') based on a score and log the grade to the console. ***
let score = 55;
let grade;

switch(true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 60):
        grade = 'C';
        break;
    case (score >= 50):
        grade = 'D';
        break;
    case (score >= 33):
        grade = 'E';
        break;
    case (score < 33):
        grade = 'F';
        break;
    default:
        console.log("Invalid score");
}

console.log("Grade is: ", grade);


// ***** Activity 4: Conditional (Ternary) Operator *****
// *** Task 6: WAP that uses the ternary operator to check if a number is even or odd and log the result to the console. ***
let  checkValue = 7;

(checkValue %2 == 0) ? console.log("Even") : console.log("Odd");


// ***** Activity 5: Combining Conditions *****
// *** Task 7: WAP to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log  the result to the console. ***
let year = 2432;

if(year % 4 == 0) {
    if((year % 100 != 0) || (year % 400 == 0 )) {
        console.log("leap year");
    }
    else {
        console.log("Not a leap year");
    }
}else {
    console.log("Not a leap year");
}
