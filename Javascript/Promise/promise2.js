console.log("1. Starting the process");

// Creating a promise
let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let success = true;
        if (success) {
            resolve("3. The operation was successful!");
        } else {
            reject("There was an error.");
        }
    }, 2000); // Simulate async operation (like API call)
});

// This code executes while waiting for the promise
console.log("2. I am executing while waiting for the promise!");

// Handling the promise
myPromise
    .then(function (message) {
        console.log(message); // "The operation was successful!" after 2 seconds
    })
    .catch(function (error) {
        console.log(error); // If the promise was rejected
    });

console.log("4. I am also executing without waiting for the promise!");
