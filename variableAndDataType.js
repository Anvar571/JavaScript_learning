"use strict"
var foo = "nimadir";
console.log(foo);

let text1 = "salom"
let text2 = text1;

text2 = "qalesan";

console.log(text1);
console.log(text2);

let obj = {
    name: "anvar"
}
let obj1 = obj;
obj1.name = "bobur"

console.log(obj, "\n", obj1);

// nom berish qoidalari camlCase

// ===============
var message = "send var message";
// syntaxError already been declared
let message = "send message";
console.log(message);
// let message = "send two message";


// data type 
// javaScript dinamic programming language not static programming 
//language yani js hech qanday typega bog'lanmagan
// bularning farqlari
// data type in js 8 ta 
// String, Number, Boolean, Null, Undefined, BigInt, Symbol, Object

let message1 = "message";
message1 = 213124;
console.log(message1);

alert( 1 / 0 ); // Infinity
// string data typeni o'tganda tirnoqlarini tushuntirish kerak '', "", ``


let a = undefined;

console.log(a + 1); // result NaN

a = null;
console.log(a + 4); // result 4

// advenced qismiga ham kelamiz kiyinroq