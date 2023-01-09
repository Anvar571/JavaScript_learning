// distructure
// objectlarning ichidan ma'lumotlarni o'qish qulay holatda
let obj = {
    name: "anvar",
    age: 21,
    job: {
        title: "developer",
        description: "full stack developer",
        team: {
            name: "IT nimadie",
            description: "lorem ipsum"
        }
    }
}
// o'zgaruvchi agar nomini o'zgartirish kerak bo'ladigan kerak bo'ladigan bo'lsa : newName dan foydalanamiz

let {name, job: {title: newTitle}} = obj;
console.log(name, newTitle);

// ikki objectni bir biriga qo'shish
let obj2 = {
    name1: "Samandar",
    age1: 12
}

let obj3 = {
    name: "Abbos",
    age: 32
}

for (let key in obj2) {
    obj3[key] = obj2[key]
}

console.log(obj3);

// optinal chaining nima bu o'zi
// biz obyekt ichidan yuq bo'lgan propertyni chaqiradigan bo'lsak bizga xatolik chiqaradi
// shunda bizga ? yordam beradi, misol uchun

let user = {};

// console.log(user.address.link); // TypeError!

// shuning uchun tekshirish kerak buladi
let user1 = {
    address: "nimadir"
};

// console.log(user1.address ? user1.address.street : undefined);

// endi bir yomon tarafi bor bitta kodni qayta qayta yoshida to'gri keladi
// yana bir misol 
let user2 = {}; // user has no address

// console.log(user2.address ? user2.address.street ? user2.address.street.name : null : null);

// bu bizga clean codega ham yomon tasir qiladi o'zi bir kodni ikki marta yazish yomon
// buning o'rniga boshqa yo'l bor

let user3 = {}; // user has no address

// console.log( user3?.address?.street ); // undefined (no error)

// endi yana bir muammo bor bizga majburiy bo'lmagan propotylarga optional chaning qo'ymaslik kerak
// misol uchun user objtida address majburiy emas ichidagi proporty keak bo'lsa faqat shu uchun ishlatamiz
// agar obj bo'lmasa referenceError qaytaradi
let obj4 = {
    address: "nimadir"
}
// bu yerda street borligini tekshiradi bor bo'lsa ichidagi nameni qaytaradi aks holda undefined qaytaradi

// console.log(obj4.address.street?.name);

// ? bu faqat e'lon qilingan variable uchun ishlatiladi

// endiagar obj ichida function bo'ladigan bo'lsa uni qanday chaqirishimimz mumkin bo'ladi


let user5 = null;
let x = 0;

user5?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

// console.log(x);

// 
let obj6 = {
    child: {
        name: "anvar",
        sayHi() {
            return ("salom");
        }
    }
}

// console.log(obj6.child.sayHi?.());
// console.log(obj6.child?.name);

// [] kv qavaslar orqali ham ishlatsak bo'ladi
let key = "firstName";

let user7 = {
  firstName: "John"
};

let user8 = null;

console.log( user7?.[key] ); // John
console.log( user8?.[key] ); // undefined