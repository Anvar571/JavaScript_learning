// class bu constructor functionga o'xshash narsa va bunda qo'shimcha yana imkoniyatlari bor
// basic class create qilish

class Basic {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    fullData() {
        return `${this.name} ${this.age}`
    }
}
// console.log(Basic == Basic.prototype.constructor); // res => true

let basic = new Basic("anvar", 21)
console.log(basic.fullData());

// class ham aslida function hisoblanadi
class Cls {
    some() {
        return "salom"
    }
}
// console.log(typeof cls); // function type
// ya'ni buning methodlari avtomatik prototypeda saqlanayabdi
console.log(Cls.prototype.some());


// bu qanday ishlayabdi 
// aslida biz prototypega o'xshagan narsa yaratayabmiz 
// va nusxa olinga objectlar o'sha prototypedagi methodlarda foydalana oladi

// endi bir narsani ko'ramiz
function User(name) {
    this.name = name
    this.sayHi = function () {
        return `salom ${this.name}`
    }
}
let user1 = new User("anvar")
// console.log(User.prototype.sayHi()); // is not function

User.prototype.sayHi = function () {
    return `salom ${this.name}`
}
console.log(User.prototype.sayHi()); // working

// classda methodlar avtomatik prototoypeda saqlanadi 
// constructor functionda esa shu function o'zida

// class va constructor function farqlari ...

// classlarni ham boshqa o'zgaruvchilarga tayinlash va functionlardan qaytishi ham mumkin
let Valid = class {
    name() {
        // code
    }
}

function makeClass(phrase) {
    // declare a class and return it
    return class {
        sayHi() {
            console.log(phrase);
        }
    };
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello

// classlarning ichid ham get va setlar ishlaydi
class UserOne {
    constructor(name, surename){
        this.name = name
        this.surename = surename
    }
    get fullname(){
        return `${this.name} ${this.surename}`
    }

    set fullname(val){
        [this.name, this.surename] = val.split(" ")
    }
}
let user2 = new UserOne("anvar", "abdurashidov")
console.log(user2.fullname);