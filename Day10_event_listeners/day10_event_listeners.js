// ***** Activity 1: Basic Event Handling *****

// *** Task 1: Add a click event listener to a button that changes the text content of a paragraph. ***
const content = document.querySelector(".content");

document.getElementById('change').addEventListener('click', (e) => {
    content.textContent = 'Content has changed onclick to button';
});

// *** Task 2: Add a double-click event listener to an image that toggles its visibility. ***
const img1 = document.querySelector('.img1');
const imgDiv = document.querySelector('.img-div');

img1.addEventListener('dblclick', (e) => {

    if(e.target.style.opacity == 0){
        e.target.style.opacity = "1";
    }
    else{
        e.target.style.opacity = "0";
    }
})


// ***** Activity 2: Mouse Events *****

// *** Task 3: Add a mouseover event listener to an element that changes its background color. ***
const bgChange = document.querySelector('.bg-change');

bgChange.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'cyan';
});

// *** Task 4: Add a mouseout event listener to an element that resets its background color.
bgChange.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = '';
});


// ***** Activity 3: Keyboard Events *****

// *** Task 5: Add a keydown event listener to an input field that logs the key pressed to the console. ***
const firstName = document.querySelector('.first-name');

firstName.addEventListener('keydown', (e) => {
    console.log(e.key);
});

// *** Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph. ***
const info = document.querySelector('.info');
const infoPara = document.querySelector('.info-para');

info.addEventListener('keyup', (e) => {
    infoPara.textContent = e.target.value;
});



// ***** Activity 4: Form Events *****

// *** Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console. ***
const form1 = document.getElementById('form1');

form1.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form1);
    const formEntries = Object.fromEntries(formData.entries());

    console.log(formEntries)
    console.table(formEntries);
});

// *** Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph. ***
const items = document.getElementById('items');
const para2 = document.querySelector('.para2');

items.addEventListener('change', (e) => {
    console.log(e.target.value);
    para2.innerText = `Selected value: ${e.target.value}`;
});


// ***** Activity 5: Event Delegation *****

// *** Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation. ***
const lists = document.querySelector('.lists');

lists.addEventListener('click', (e) => {

    if(e.target.tagName === 'LI') {
        console.log(e.target.innerText);
    }
});

// *** Task 10: Add a event listener to a parent element that listens for events from dynamically added child elements. ***

lists.addEventListener('click', (e) => {

    if(e.target.tagName === 'LI') {
        e.target.style.backgroundColor = 'cyan';
    }
});

// to dynamically add childItems
const addButton = document.querySelector('.add');

addButton.addEventListener('click', (e) => {
    const newItem = document.createElement('li');
    newItem.innerText = "New item added";
    
    lists.append(newItem);
});

