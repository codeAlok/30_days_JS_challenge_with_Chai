// ***** Activity 1: Selecting and Manipulating Elements *****

// *** Task 1: Select an Html element by its ID and change its text content. ***
const heading3 = document.getElementById("heading3");
heading3.textContent = "Learn Javascript with Chai";

// *** Task 2: Select an HTML element by its class and change its background color. ***
const define = document.querySelector('.define');
define.style.backgroundColor = "#a3f2d1"


// ***** Activity 2: Creating and Appending Elements *****

// *** Task 3: Create a new div element with some text content and append it to the body. ***
const body = document.querySelector("body");
const newDiv = document.createElement('div');
newDiv.textContent = "Javascript can be used for both frontend and backend development.";

body.appendChild(newDiv);

// *** Task 4: Create a new li element and add it to an existing ul list. ***

const ul = document.querySelector('.items')
const newLi = document.createElement("li");
newLi.textContent = "New list added";

ul.appendChild(newLi);


// ***** Activity 3: Removing Elements *****

// *** Task 5: Select an HTML element and remove it from the DOM. ***
const para1 = document.getElementById('delete');
para1.remove();

// *** Task 6: Remove the last child of a specific HTML element. ***
console.log(ul.lastChild);
ul.lastChild.remove();  
// or
ul.removeChild(ul.lastChild);


// ***** Activity 4: Modifying Attributes and Classes *****

// *** Task 7: Select an HTML element and change one of its attribute (e.g., src of an img tag). ***
const googleLink = document.getElementById("googleLink");

googleLink.setAttribute('href', "https://www.youtube.com");

console.log(googleLink.getAttribute('href'));

// *** Task 8: Add and remove a CSS class to/from an HTML element. ***

googleLink.classList.add('link');
console.log(googleLink);

googleLink.classList.remove('link');
console.log(googleLink);


// ***** Activity 5: Event Handling *****

// *** Task 9: Add a click event listener to a button that changes the text content of a paragraph. ***
const content = document.getElementById('content');

document.getElementById('change').addEventListener('click', (e) => {
    content.textContent = 'Content is changed now';
});

// *** Task 10: Add a mouseover event listener to an element that changes its border color. ***
content.addEventListener('mouseover', (e) => {
    e.target.style.borderColor = 'green';
});

content.addEventListener('mouseout', (e) => {
    e.target.style.borderColor = 'red';
});


// ********* Notes: know more ****
// * how DOM manipulation work or applied to the screen. (like we add a class and print element , then on 3rd line again remove class and print element. We find from both console that class has gone.).  HOw ?????
