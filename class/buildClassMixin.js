// biz endi turli jsdagi bor constructor functionlarga prototype qo'shsak bo'ladi 
// class bilan bu juda oson

class IsEmpty extends Array {
    isEmpty(){
        return this.length === 0
    }
}

let arr = new IsEmpty(1, 2,34, 56);
let arr1 = new IsEmpty();

console.log(arr.isEmpty()); // false
console.log(arr1.isEmpty());// true

// aralashmalar mixins
// bizda turli obyektlar class va boshqa ma'lumotlar bor shularni birlashtirish mixin deb ataladi
let mixinObj = {
    sayHi(){
        return `Assalomu Alaykum ${this.name}`
    },

    bye(){
        return `Bye ${this.name}`
    }
}

class User {
    constructor(name){
        this.name = name
    }
}

Object.assign(User.prototype, mixinObj)

let user1 = new User("anvar")

console.log(user1.sayHi());