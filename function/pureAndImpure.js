// pure va impure function
// pure function bir il kirishlar  uchun bir xildagi chiqishlarni qaytarishi kerak
// impure function esa har safar chaqirilganda har xil javob qaytarishi mumkin bo'ladi
// qisqacha qilib aytganda funksiya tashqaridagi variableni oldingi qiymatini o'zgartirsa impure function
// aks holda pure function bo'ladi

// PURE FUNCTION 👼
const pureAdd = (num1, num2) => {
    return num1 + num2;
};

//always returns same result given same inputs
console.log(pureAdd(5, 5))
//10
console.log(pureAdd(5, 5))
//10

//IMPURE FUNCTION 😈
let plsMutateMe = 0;
const impureAdd = (num) => {
    return (plsMutateMe += num);
};

//returns different result given same inputs
console.log(impureAdd(5))
//5
console.log(impureAdd(5))
//10
console.log(plsMutateMe)
//10 🥳 I'm now double digit, yay!

// ajratish qiyin misollar
//IMPURE FUNCTION 😈
const impureAddToArray = (arr1, num) => {
    arr1.push(num);
    return arr1;
};

impureAddToArray([1, 2, 3], 4);
//[1,2,3,4]
impureAddToArray([1, 2, 3], 4);
//[1,2,3,4]

// PURE FUNCTION 👼
const pureAddToArray = (arr1, num) => {
    return [...arr1, num];
};


// endi esa obyeklarni ko'rib chiqamiz
// impure function
const impureAddToObj = (obj, key, val) => {
    obj[key] = val;
    return obj;
};

// PURE FUNCTION 👼
const pureAddToObj = (obj, key, val) => {
    return { ...obj, [key]: val };
}

// endi js o'zidagi array va math methodlarini pure va impurega ajratamiz
// bularning hammasi impure function hisoblanadi
// Math.random()
// Date.now()
// arr.splice()
// arr.push()
// arr.sort()

// bularining hammasi pure function hisoblanadi
// arr.map()
// arr.filter()
// arr.reduce()
// arr.each()
// arr.every()
// arr.concat()
// arr.slice()
// Math.floor()
// str.toLowerCase()

