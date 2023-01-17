// bizda biror o'zgarmas function bor lekin biz uni ko'p marta ishlatamiz 
// shuning uchun uni cashda saqlab qo'yib foydalansak bo'ladi 

function boo(x) {
    console.log();
    return x
}

function cashengFunction(func) {
    let cashe = new Map();
    // shu func bo'lsa shuni qaytarib beradi
    return function (x) {
        if (cashe.has(x)) {
            return cashe.get(x)
        }
        // bo'lmasa saqlab qo'yib qaytarib beradi
        let res = func(x)
        cashe.set(x, res)
        return res
    }
}

boo = cashengFunction(boo)

console.log(boo(43));

// endi obyektlarda ishlatib ko'ramiz
let obj = {
    sameMethod() {
        return 1
    },
    boo(x) {
        return x * this.sameMethod()
    }
}

function casheObj(func) {
    let cashe = new Map()
    return function (x) {
        if (cashe.has(x)) {
            return cashe.get(x)
        }
        let res = func(x)
        cashe.set(x, res)
        return res
    }
}

console.log(obj.boo(3));

// obj.boo = casheObj(obj.boo)

// console.log(obj.boo(4));

function foo1() {
    return this;
}
console.log(foo1());

// yuqorida xatolik kelib chiqadi sababi function thisda undefined qaytaradi
// soddaroq misol bilan ko'rib chiqamiz
function sayHi() {
    console.log(this.name);
}

let user = { name: "John" };
let admin = { name: "Admin" };

// bu yerda functiondagi this undefined qaytaradi endi uni obj bilan bog'lash kerak
sayHi(user); // undefined
sayHi(admin); // undefined
// call bunga yordam beradi
sayHi.call(user)
