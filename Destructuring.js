// jsda eng ko'p ishlatiladigan data typelar Object va array

// Ob'ektlar bizga kalit bo'yicha ma'lumotlar elementlarini saqlaydigan yagona ob'ektni yaratishga imkon beradi.
// Massivlar bizga ma'lumotlar elementlarini tartiblangan ro'yxatga yig'ish imkonini beradi.

// bu bizga nima uchun kerak va qanday yordam beradi
// bu bizga qulay yozishga ishlatishga 
let arr = ['first', "second"]

let [first, second] = arr
console.log(first, second);

let [firstName, surname] = "John Smith".split(' ');
alert(firstName); // John
alert(surname);  // Smith

let str = "abc"
let [a, , c] = str
console.log(a, c);

// object enteries orqali key va valuelarni takrorlash mumkin
let user = {
    name: "John",
    age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

// Map da ham
let user1 = new Map();
user1.set("name", "John");
user1.set("age", "30");

// Map iterates as [key, value] pairs, very convenient for destructuring
for (let [key, value] of user1) {
    console.log(`${key}:${value}`); // name:John, then age:30
}

// defaul value biriktirish
// agar qiymat bo'lsa ustiga yozadi owerwrite
let [newA = "birinchi", newA1 = "ikknchi"] = []

console.log(newA, newA1);

// newName change
let {key1: f, key2: s} = {key1: "salom", key2: "qale"}
console.log(f, s);

// logika shu buni har joyda ishlatish mumkin functondan kelayotgan parametrlarda va boshqa joylarda