// ***** Activity 1: Object Creation and Access *****

// *** Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console. ***
const book1 = {
    title: "From CRT to multi 4k screen setup",
    author: "Alok kumar",
    year: 2025,
};

console.log(book1);

// *** Task 2: Access and log the title and autor properties of the book object. ***
console.log(book1.title);
console.log(book1.author);


// ***** Activity 2: Object Methods *****

// *** Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method. ***
book1.func1 = function () {
    console.log(`Author of book ${this.title} is ${this.author}`)
}

book1.func1();


// *** Task 4: Add a method to the book object that takes a parameter(year) and updates the book's year properly, then log the updated object. ***
book1.addYear = function (year) {
    this.year = year;
}

book1.addYear(2026);

console.log(book1);


// ***** Activity 3: Nested Objects *****

// *** Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. ***
const bookLibrary = {
    libraryName: "Study place",
    books: [
        {
            title: "story of lost ship",
            author: "jk paul",
            year: 1930
        },
        {
            title: "how things work",
            author: "main nahin bataunga",
            year: 1980
        },
        {
            title: "get things done",
            author: "aditya raj",
            year: 2018
        },
    ],
};

console.log(bookLibrary);

// *** Task 6: Access and log the name of the library and the titles of all the books in the library. ***
console.log(`library name is ${bookLibrary.libraryName}`);

bookLibrary.books.forEach((item, index) => {
    console.log(`Book ${index+1} is "${item.title}"`);
});


// ***** Activity 4: The this keyword *****

// *** Task 7: Add a method to the book object that uses the 'this' keyword to return a string with the book's title and year, and log the result of calling this method. ***
book1.getTitleYear = function () {
    return `Book title is "${this.title}" and year is ${this.year}`;
}

console.log(book1.getTitleYear());


// ***** Activity 5: Object Iteration *****

// *** Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value. ***

for(let key in book1) {
    // Note: we can't able to access like book1.key, it try access 'key' property value from object only

    console.log(`${key} value is ${book1[key]}`);
}

// *** Task 9: Use 'Object.keys' and 'Object.values' methods to log all the keys and values of the book object. ***

const book1Keys = Object.keys(book1);
console.log("book1 keys ", book1Keys)

const book1Values = Object.values(book1);
console.log("book1 values ", book1Values);



// **** Note: Know more for clarity (look for MDN) ****
//  ways to assign function / property to a object
//  this keyword
//  for...in loop
//  object.keys()
//  object.values()
//  object.entries()
