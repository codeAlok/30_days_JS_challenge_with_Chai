// ***** Activity 1: Basic Regular Expression *****

// *** Task 1: Write a regular expression to match a simple pattern (e.g., match all occurences of the word "JavaScript" in a string). Log the matches. ***

const string1 = "We love JavaScript with JavaScript with chai";
const getJs = string1.match(/JavaScript/g);

console.log("string: ", getJs);

// *** Task 2: Write a regular expression to match all digits in a string. Log the matches. ***
const string2 = "Can i get 10 pen and 15 pencil on 22 aug 2024";

const getDigit = string2.match(/\d/g);

console.log("Digits: ", getDigit);

// ***** Activity 2: Character Classes and Quantifiers *****

// *** Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches. ***
const string3 = "Here, we are in India. A Hospitality master for all over the World";

const getCapital = string3.match(/[A-Z]\w+/g);

console.log("start with capital: ", getCapital);

// *** Task 4: Write a regular expression to match all sequences of one or more digits in a string. log the matches. ***
const string4 = "You have 5 cars having 30 wheels, bought on 10 may 2025";

const getDigits = string4.match(/\d+/g);
console.log("Digits: ", getDigits);

// ***** Activity 3: Grouping and Capturing *****

// *** Task 5: Wrie a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the caputures. ***
const string5 = " my mobile number of U.S (123) 456-7890)";

const matchResult = string5.match(/\((\d{3})\)\s(\d{3})-(\d{4})/);

console.log("area code: ", matchResult[1])
console.log("c_office code: ", matchResult[2]);
console.log("line number: ", matchResult[3]);

// *** Task 6: Write a regular expression to capture the username and domain from an email address. Log the capture. ***
const email = "kuchbhi20@gmail.com";

const getEmailData = email.match(/^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/);

console.log("Username: ", getEmailData[1]);
console.log("Domain: ", getEmailData[2]);


// ***** Activity 4: Assertions and Boundaries *****

// *** Task 7: Write a regular expression to match a wrod only if it is at the beginning of a string. Log the matches. ***
function matchWordAtBeginningOfString(text, word) {
    // Define the regex pattern to match the word at the beginning of the string
    const regex = new RegExp(`^${word}\\b`, 'i'); // 'i' flag for case-insensitive matching
  
    // Execute the regex on the input text
    const match = text.match(regex);
  
    // Log the match
    if (match) {
      console.log("Matched word:", match[0]);
    } else {
      console.log("No match found.");
    }
  }
  
  const string6 = "Kaise hain aaplog";
  const string61 = "Kuch to hai is word main";

  matchWordAtBeginningOfString(string6, "Kaise");
  matchWordAtBeginningOfString(string61, "Hello");


// *** Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches. ***
function matchWordAtEndOfString(text, word) {
    // Define the regex pattern to match the word at the end of the string
    const regex = new RegExp(`\\b${word}\\b$`);
  
    // Execute the regex on the input text
    const match = text.match(regex);
  
    // Log the match
    if (match) {
      console.log("Matched word:", match[0]);
    } else {
      console.log("No match found.");
    }
  }

  const text1 = "This is a test Hello";
  const text2 = "Hello world! This is a test Hell";
  matchWordAtEndOfString(text1, "Hello");
  matchWordAtEndOfString(text2), "Hello";

// ***** Activity 5: Practical Applications *****

// *** Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit), and one special character). Log whether the password is valid. ***
function validatePassword(password) {

    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Test the password against the regex pattern
    const isValid = regex.test(password);

    // Log whether the password is valid
    if (isValid) {
        console.log("The password is valid.");
    } else {
        console.log("The password is not valid.");
    }
}


const password1 = "Password1!";
const password2 = "password1!";
validatePassword(password1);
validatePassword(password2);


// *** Task 10: Write a regular expression to validate a URL. Log the whether the URL is valid. ***
function validateURL(url) {

    const regex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:[0-9]{1,5})?(\/[^\s]*)?$/;

    // Test the URL against the regex pattern
    const isValid = regex.test(url);

    // Log whether the URL is valid
    if (isValid) {
        console.log("The URL is valid.");
    } else {
        console.log("The URL is not valid.");
    }
}

const url1 = "https://www.google.com";
const url2 = "http*//facebook.compath/to/resource";

validateURL(url1);
validateURL(url2);