// this bu obyektlarni bog'lash uchun obyektga ishora qiladi
// biz oyektlar bilan ishlayotganimzda this yo'qolishi mumkin buning sababini qo'ramiz
let jamson = {
    sleep: "true only",
    swap() {
        console.log(`Lorem ${this.sleep}`)
    }
}
console.log(jamson.swap()); // working
setTimeout(jamson.swap, 1000) // Lorem undefined
// bu vaqtda function objectga tegishli bo'lmay qoladi xuddi manabunday
let foo = jamson.swap;
setTimeout(foo, 1000)

// buning oldini olish
setTimeout(() => jamson.swap(), 1000)

// bind bilan bog'lash


let wrapper = {
    name: "lorem"
}

wrapper.newProp = 21

function uwek() {
    console.log(`${this.name}`);
}

let bound = uwek.bind(wrapper)
console.log(bound());

// ================
// misol
function askPassword(ok, fail) {
    let password = "nimdir";
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'rockstar',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
