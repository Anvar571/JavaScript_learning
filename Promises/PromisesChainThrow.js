// ichma ich promiselar
// asosan promiselar server bilan birgalikda ishlatiladi sababi asynchron hisoblanadi
let isAdmin = true;

let promise = new Promise((res, rej) => {
    res("lorem ipsum")
})

promise
    .then((res) => { 
        console.log(res) 
        return new Promise((res, rej) => {
            res("ichma ich promise")
        })
    })
    .then((res) => {
        console.log(res);
        return new Promise((res, rej) => {
            res({
                name: "lorem"
            })
        })
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => console.log(err))