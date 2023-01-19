// va'da promises


let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
);

fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then below runs when the remote server responds
    .then(function (response) {
        // response.text() returns a new promise that resolves with the full response text
        // when it loads
        return response.json();
    })
    .then(function (text) {
        // ...and here's the content of the remote file
        console.log(text); // {"name": "iliakan", "isAdmin": true}
    });

// let promise1 = Promise.resolve();

// promise1
//     .then(() => console.log("promise done!"))

// console.log("code finished"); // this alert shows first

let promise2 = Promise.resolve()
    .then(() => console.log("salom 1"))
    .then(() => console.log("salom 2"))
    .then(() => console.log("salom 3"))
