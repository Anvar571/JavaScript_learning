// object.keys() ovject.values(), va object.enteries()

// Esda tutingki, ob'ektlar JavaScript-dagi barcha murakkab tuzilmalarning asosidir. 
//Shunday qilib, bizda datao'z data.values()usulini amalga oshiradigan o'z ob'ektimiz bo'lishi mumkin. 
//Va biz hali ham unga qo'ng'iroq qilishimiz mumkin Object.values(data).

// Object.* methodlari faqatgina array qaytaradi
// misol uchun
let obj = {
    name: "Jasur",
    age: 22
}
// console.log(Object.keys(obj)); // ["name", "age"]
// console.log(Object.entries(obj));
// for (let keys of Object.keys(obj)) {
//     console.log(typeof keys); // string
// }

// for (let values of Object.values(obj)) {
//     console.log(values);
// }

// endi muammo bizda obyectni massivda bor methodlar orqali ishlata olamaymiz
// lekin buning iloji bor
let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

console.log(doublePrices.meat); // 8

// objdagi umumiy summani hisoblash kerak
let salaries = {
    // "John": 100,
    // "Pete": 300,
    // "Mary": 250
};
// let s = 0;
// let sumObj = Object.fromEntries(
//     Object.entries(salaries).map(val => [val[0], s += val[1]])
// )
// console.log(s);
function sumSalaries(salaries) {
    // reduce ikkinchi parametri initialValue obj ichida ma'lumot bo'lmasa shuni qaytaradi
    return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}
console.log(sumSalaries(salaries));
// function sumSalaries(obj) {
//     let sum = 0
//     for (let val of Object.values(obj)) {
//         sum += val
//     }
//     return sum
// }

// console.log(sumSalaries(salaries));

// object keylarini length
let user = {
    name: 'John',
    age: 30
};
console.log(count(user));
function count(obj) {
    return Object.keys(obj).length
}

