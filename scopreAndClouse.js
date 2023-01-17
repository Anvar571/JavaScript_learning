// bizda function bor bu function o'zidan yuqoridagi variablega kira oladi va ishlarati
// agar shu variable nome o'zgarsa nima bo'ladi

console.log(this);

// let sayHi = ("What is your name ?", "anvar")
// function sayHi1(arg) {
//     return `Assalomu Alaykum ${arg}`
// }

// console.log(sayHi1(sayHi)); 
// lexical envirment
// Biroq, agar funktsiya tugaganidan keyin ham kirish mumkin bo'lgan ichki funksiya mavjud bo'lsa, 
// u[[Environment]]leksik muhitga havola qiluvchi xususiyatga ega.


// function f() {
//     let value = 0;

//     return function () {
//         return value++
//     }
// }

// let g = f();
// console.log(g());
// console.log(g());
// console.log(g());
// console.log(g());
// g = null;
// console.log(g());

// function makeCounter() {
//     let count = 0;

//     return function () {
//         return count++;
//     };
// }

// let counter = makeCounter();
// let counter2 = makeCounter();

// console.log(counter()); // 0
// console.log(counter()); // 1

// console.log(counter2()); // ?
// console.log(counter2()); // ?

// function Counter() {
//     let count = 0;

//     this.up = function () {
//         return ++count;
//     };
//     this.down = function () {
//         return --count;
//     };
// }

// let counter = new Counter();

// console.log(counter.up()); // 1
// console.log(counter.up()); // 2
// console.log(counter.down()); // 1

function sumAnyNum(b){
    return function(a){
        return b += a
    }
}

console.log(sumAnyNum(2)(2));
