// jsda data typelar ikki turga bo'linadi primitive non-primitive
// primitive data typelar faqat o'zida bitta ma'lumotni saqlaydi 
// non-primitivelar esa o'zida ko'p malumotlarni saqlaydi
// obyektlar yordamida murakkab muammolar yechiladi

// obyekt yaratish usullari
// 1- usul
let obj1 = {
    // ichida key va valulat to'plamidan iborat
}
// 2 - usul
let obj2 = new Object("value");

// 3 - usul
function MyOwnObj(name, age) {
    this.name = name;
    this.age = age;
}

let obj3 = new MyOwnObj("nimadir", 12)
console.log(obj3);

// 4 - usul
let obj4 = Object.create({
    name: "nimadir",
    age: 213
})
console.log(obj4);

// obyektlardan qiymatlarni o'qish usullari
let obj5 = {
    wid: "Assalomu alaykum",
    hei: "324"
}
let hello = "wid"
console.log(obj5.hei);
console.log(obj5[hello]);

// obyektdan ma'lumotlarni o'chrish
let obj6 = {
    name: "anvar",
    age: 21
}
delete obj6.name;
console.log(obj6);

let user = {
    name: "John",
    age: 30,
    "likes birds": true  // ko'b so'zli keylar
};

console.log(user["likes birds"]);

// ==================================================
// foydalanuvchi prompt orqali ma'lumot kiriradi shu malumotlarni obyektga yozish
// yechim exapmle pageda
let fruit = ("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag.apple); // 5 if fruit="apple"

// asosan kvadrat qavslar murakkbroq holatlarda ishlatiladi

// agar obyektlarda key ham value ham bir xil bo'ladigan bo'lsa qisqartirib yozish mumkin bo'ladi
let obj7 = {
    name: name,
    age: age
}
let obj8 = {
    name,
    age
}

// obyektlarni keylarini nomlashda cheklovlar yuq hamma keyni stringga o'tkazadi
let obj9 = {
    0: "nimadir", // "0":"nimadir" 
}
// faqat bularni chaqirishda [] foydalaniladi
console.log(obj9["0"]);

// ================================
//JavaScript-dagi ob'ektlarning boshqa ko'plab tillarga nisbatan e'tiborga loyiq xususiyati shundaki, 
//har qanday xususiyatga kirish mumkin. Agar mulk mavjud bo'lmasa, xato bo'lmaydi!

// obyekt keylarini tekshirish bor yoki yuqligini

let user1 = { name: "John", age: 30 };

// true yoki false qaytaradi
console.log("age" in user1); // true chunki bor key
console.log("blabla" in user1); // false

let user2 = { age: 30 };

let key = "age";
console.log(key in user2);

// endi biz obyektlarning barcha keylari va valuelari bo'ylab aylanib chiqishni ko'rib chiqamiz
let user3 = {
    name: "Sardor",
    age: 22,
    tel: "+9999999999"
}
// in bu obyeklarni aylanish uchun ishlatiladi
for (let key in user3) {
    console.log(key);
    console.log(user3[key]);
}

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    "1": "USA"
};

for (let code in codes) {
    console.log(code, codes[code]); // 1, 41, 44, 49
}