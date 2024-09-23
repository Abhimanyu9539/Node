// Creating a promise
let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let success = false;
        if (success) {
            resolve("The operation was successful!");
        } else {
            reject("There was an error.");
        }
    }, 2000); // Simulate async operation (like API call)
});

// Handling the promise
myPromise
    .then(function (message) {
        console.log(message); // "The operation was successful!" after 2 seconds
    })
    .catch(function (error) {
        console.log(error); // If the promise was rejected
    });
