// ***** Activity 1: Understanding LocalStorage *****

// *** Task 1: Write a script to save a string value to 'localStorage' and retrieve it. Log the retrived value. ***
const greetMorning = "Good Morning";
localStorage.setItem('greet', greetMorning);

const getGreetValue = localStorage.getItem('greet');
console.log("from localStorage: ", getGreetValue);


// *** Task 2: Write a script to save an object to 'localStorage' by converting it to a JSON string. Retrive and parse the object, then log it. ***
let studentData = {
    name: "anjali k",
    roll: 24,
};

localStorage.setItem('studData', JSON.stringify(studentData));

let gotStudentData = JSON.parse(localStorage.getItem('studData'));

console.log("obj from localStorage: ", gotStudentData);


// ***** Activity 2: Using LocalStorage *****

// *** Task 3: Create a simple form that saves user input (e.g., name and email) to 'localStorage' when submitted. Retrieve and display the saved data on page load. ***
const localName = document.querySelector('.localName');
const localEmail = document.querySelector('.localEmail');
const localStorageForm = document.getElementById('form1');

localStorageForm.addEventListener('submit', (e) => {
    if(localName.value !== '' || localEmail.value !== '') {
        localStorage.setItem('localName', localName.value);
        localStorage.setItem('localEmail', localEmail.value);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    localName.value = localStorage.getItem('localName');
    localEmail.value = localStorage.getItem('localEmail');
})

// *** Task 4: Write a script to remove an item from 'localStorage'. Log the 'localStorage' content before and after removal. ***
const removeLS = document.getElementById('removeLS');

removeLS.addEventListener('click', ()=> {
    console.log("Before LStorage Removal");
    console.log("Name: ", localStorage.getItem('localName'));
    console.log("Email: ", localStorage.getItem('localEmail'));

    localStorage.removeItem('localName');
    localStorage.removeItem('localEmail');

    console.log("After LStorage Removal");
    console.log("Name: ", localStorage.getItem('localName'));
    console.log("Email: ", localStorage.getItem('localEmail'));
})


// ***** Activity 3: Understanding SessionStorage *****

// *** Task 5: Write a script to save a string value to 'sessionStorage' and retrieve it. Log the retrived value. ***

// ** NOTE: sessionStorage only accessible till the tab/session is opened.

const intro = "kaise hain aaplog";
const setSS = document.querySelector('.setSS');

setSS.addEventListener('click', () => {
    sessionStorage.setItem('introduction', intro);
    
    console.log("from sessionStorage: ", sessionStorage.getItem('introduction'));
})


// *** Task 6: Write a script to save an object to 'sessionStorage' by converting it to a JSON string. Retrive and parse the object, then log it. ***
const game = {
    name: "Hockey",
    player: 11,
};

sessionStorage.setItem('game', JSON.stringify(game));

console.log("obj from sessionStorge: ", JSON.parse(sessionStorage.getItem('game')));


// ***** Activity 4: Using sessionStorage *****

// *** Task 7: Create a simple form that saves user input (e.g., name and email) to 'sessionStorage' when submitted. Retrieve and display the saved data on page load. ***
const sessionName = document.querySelector('.sessionName');
const sessionEmail = document.querySelector('.sessionEmail');
const sessionStorageForm = document.getElementById('form2');

sessionStorageForm.addEventListener('submit', (e) => {
    if(sessionName.value !== '' || sessionEmail.value !== '') {
        sessionStorage.setItem('sessionName', sessionName.value);
        sessionStorage.setItem('sessionEmail', sessionEmail.value);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    sessionName.value = sessionStorage.getItem('sessionName');
    sessionEmail.value = sessionStorage.getItem('sessionEmail');
})


// *** Task 8: Write a script to remove an item from 'sessionStorage'. Log the 'sessionStorage' content before and after removal. ***
const removeSS = document.getElementById('removeSS');

removeSS.addEventListener('click', ()=> {
    console.log("Before SStorage Removal");
    console.log("Name: ", sessionStorage.getItem('sessionName'));
    console.log("Email: ", sessionStorage.getItem('sessionEmail'));

    sessionStorage.removeItem('sessionName');
    sessionStorage.removeItem('sessionEmail');

    console.log("After SStorage Removal");
    console.log("Name: ", sessionStorage.getItem('sessionName'));
    console.log("Email: ", sessionStorage.getItem('sessionEmail'));
});


// ***** Activity 5: Comparing LocalStorage and sessionStorage *****

// *** Task 9: Write a function that accepts a key and a value, and saves the value to both 'localStorage' and 'sessionStorage'. Retrive and log the values from both storage mechanisms. ***
function saveData(keyData, valueData) {
    localStorage.setItem(keyData, valueData);
    sessionStorage.setItem(keyData, valueData);
}

saveData('DOB', 24);
saveData('instaId', "5454dfe");

console.log("localStorage Data: ", localStorage.getItem('DOB'));
console.log("sessionStorage Data: ", sessionStorage.getItem('DOB'));

// *** Task 10: Write a function that clears all data from both 'localStorage' and 'sessionStorage'. Verify that both storages are empty. ***
const resetAll = document.getElementById('resetAll');

function clearAllData() {
    localStorage.clear();
    sessionStorage.clear();
}

resetAll.addEventListener('click', clearAllData);


