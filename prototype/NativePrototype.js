//Mulk "prototype"JavaScript-ning yadrosi tomonidan keng qo'llaniladi.
//  Barcha o'rnatilgan konstruktor funktsiyalari undan foydalanadi.

// agar buni consolega chiqarsak string bo'lib chiqadi lekin qanday qilib string bo'lib qoldi ?
// bu o'zining constructor functionidan olib o'zining prototypega murojar qiladi va toString() ga link ko'rsatadi

let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true

let arr = [1, 2, 3];

// it inherits from Array.prototype?
console.log(arr.__proto__ === Array.prototype); // true

// then from Object.prototype?

console.log(arr.__proto__.__proto__ === Object.prototype); // true

console.log(arr.__proto__); // null

// and null on the top.
console.log(arr.__proto__.__proto__.__proto__); // null

// eng qiyinlari primiteve data typelarining prototypelari
// ular ishlash vaqtida wrapper object ochiladi va method olinadi va yopiladi yo'qoladi
// ularga yangi method qo'shishimiz mumkin bo'ladi
String.prototype.ecr = function (n) {
    return new Array(n).join(this);
}

console.log("salom".ecr(2));
// console.log(new Array("salom").join(this));

let obj3 = {
    0: "Hello",
    1: "world!",
    2: "salom",
    length: 3,
};

obj3.join = Array.prototype.join;

console.log(obj3.join(','));

// n secundan kiyin function ichi ihslasin
Function.prototype.defer = function (ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.apply(this, args), ms);
    }
};

// check it
function f(a, b) {
    console.log(a + b);
}

f.defer(3000)(1, 2); // shows 3 after 1 sec

String.prototype.orta = function(){
    return this.length / 2
}
let str = "name"
console.log(str[str.orta()]);