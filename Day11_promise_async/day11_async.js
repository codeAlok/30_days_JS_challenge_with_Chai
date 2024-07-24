// ***** Activity 1: Understanding Promises *****

// *** Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console. ***
const promiseOne = new Promise((resolve, reject) => {

    // resolve after 2-sec
    setTimeout(() => {
        resolve();
    }, 2000);
});

promiseOne.then(() => {
    console.log("PromiseOne resolved");
})

// *** Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch(). ***
const promiseTwo = new Promise((resolve, reject) => {

    // reject after 2-sec
    setTimeout(() => {
        reject("Sorry didn't get result");
    }, 2000);
})

promiseTwo.then(() => {
    console.log("PromiseTwo resolved");
}).catch((error) => {
    console.log(error);
})


// ***** Activity 2: Chaining Promises *****

// *** Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order. ***
const promiseThree = new Promise((resolve, reject) => {
    // Dummy data
    const data = {
        name: "Alok kumar",
        stuId: 432,
        Books: [
            {
                bookName: "book1",
                autor: "author1",
            },
            {
                bookName: "book2",
                autor: "author2",
            },
        ],
    };

    setTimeout(() => {
        resolve(data);
    }, 2000);

})

promiseThree
    .then((data) => {
        console.log(data);
        return new Promise((resolve, reject) => {
            if (data.stuId <= 450) {
                resolve(data.Books);
            } else {
                reject("Invalid data");
            }
        })
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("PromiseThree rejected");
        }
    })
    .finally(() => {
        console.log("Your task is either fulfilled or rejected");
    })


// ***** Activity 3: Using Async/Await *****

// *** Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value. ***
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Developer Alok");
    }, 3000);
})

async function handleAsync() {
    const result = await promiseFour; // wait till promise resolves & store returned data

    console.log(result);
}

handleAsync();

// *** Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message. ***
const promiseFive = new Promise((resolve, reject) => {
    let data = 459;

    setTimeout(() => {
        if (data < 400) {
            resolve("Ye lo data");
        } else {
            reject("Data not found");
        }
    }, 3000);
})

async function handleTryCatch() {
    try {
        const result = await promiseFive;
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}

handleTryCatch();


// ***** Activity 4: Fetching Data from an API *****

// *** Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises. ***

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        return (response.json());
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Promise rejected")
        }
    })

// *** Task 7: Use the fetch API to get data from a public API and log the response data to the console using async/await. ***

async function getAllData() {
    try {
        const getData = await fetch('https://jsonplaceholder.typicode.com/posts');

        const data = await getData.json();
        console.log(data);
    }
    catch (error) {
        if (error) console.log(error);
        else console.log("Promise rejected");
    }
}

getAllData();


// ***** Activity 5: Concurrent Promises *****

// *** Task 8: Use 'Promise.all' to wait for multiple promises to resolve and then log all their values. ***
const pro1 = new Promise((resolve, reject) => {
    let data = true;

    setTimeout(() => {
        if(data) {
            resolve("P1 success");
        }
        else{
            reject("P1 fail");
        }
    }, 3000);
});

const pro2 = new Promise((resolve, reject) => {
    let data = true;

    setTimeout(() => {
        if(data) {
            resolve("P2 success");
        }
        else{
            reject("P2 fail");
        }
    }, 2000);
});

const pro3 = new Promise((resolve, reject) => {
    let data = true;

    setTimeout(() => {
        if(data) {
            resolve("P3 success");
        }
        else{
            reject("P3 fail");
        }
    }, 4000);
});


Promise.all([pro1, pro2, pro3])
.then((response) => {
    console.log("Through Promise.all(): ", response);
})
.catch((error) => {
    console.error(error);
})



// *** Task 9: Use 'Promise.race' to log the value of the first promise that resolves among multiple promises. ***
Promise.race([pro1, pro2, pro3])
.then((response) => {
    console.log("Through Promise.race(): ", response);
})
.catch((error) => {
    console.error(error);
})




// ***** NOte: *****

// Promise.all();   // It will throw error immediately if any promise get rejected, else wait till all promise got settled and return the result of all.

// Promise.race();  // It looks for the first Promise to be rejected/settled and return their result only.
