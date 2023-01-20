
// console.log("start 2");

// function quis(name, callback){
//     console.log("quis");
//     callback({name: name})
// }

// function anyFunc(email, callback) {
//     console.log("anyfunc");
//     callback([{email}])
// }

// quis("anvar", (data) => {
//     console.log(data);
//     anyFunc("anvar51@gmail.com", data => {
//         console.log(data);
//     })
// })

// console.log("finish 2");

// console.log("start1");

// setTimeout(() => {
//     console.log("set time out");
// }, 2000)

// console.log("finesh 1");


// console.log("start");

// callback functions
// endi buni Promisega aylantiramiz
function loginUser(userEmail) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(userEmail)
        }, 2000)
    })
}

function getUser(userEmail){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(userEmail)
        }, 2000)
    })
}

function searchUser(userName) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(["anvar", 'abror', 'adham'])
        }, 2000)
    })
}

// loginUser("anvar", 124345, (data) => {
//     console.log(`salom ${data}`);
//     getUser("anvar", user => {
//         console.log(user);
//         searchUser("a", data => {
//             console.log(data);
//             // callback hell
//         })
//     })
// })

// callback to promise
// loginUser("anvar", 31243451)
//     .then(res => {
//         console.log(res);
//         return getUser("anvar@312gmail.com")
//     })
//     .then(res => {
//         console.log(res);
//         return searchUser("bobur")
//     })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch(err => console.log(err))

// loginUser("anvar", 31243451)
//     .then(res => getUser(res))
//     .then(res => searchUser(res))
//     .then((res) =>  console.log(res))
//     .catch(err => console.log(err))

// Promise to async await
async function fullInfo(){
    let loggedUser = await loginUser("anvar", 31243415)
    let getuser = await getUser(loggedUser.userEmail)
    let searuser = await searchUser(getuser)
    console.log(searuser);
}
fullInfo()

// endi bir nechta apilardan ma'lumot kerak boladigan bo'lsa Promise.all() methoddan foydalanamiz
function boo(){
    return 2131
}

const foo = new Promise((res, rej) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => res(data))
})

const foo1 = new Promise((res, rej) => {
    fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(res => res.json())
    .then(data => res(data))
})

Promise.all([foo, foo1]).then(res => console.log(res))

console.log(boo());