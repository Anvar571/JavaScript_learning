// obyektlardan odatda qachon foydalaniladi
// obyekt o'zi nima => o'zidabir qancha xususiyatlarni jamlagan ma'lumotlar desak bo'ladi
// nimaga kerak bu bizga asossiy sababi bu bizga ma'lumotlarni jamlab bergani uchun kerak aslida
// ya'ni umumiy ma'lumot bitta butun ishlaydigan qanaqadir narsa yasash uchun qo'l keladi
// masalan => sizga telefon kerak agar sizda telefonning bitta qismi bo'lganda uni ishlata olmas edingiz
// lekin ularning jamlanmasi bo'lsa telefon ishlaydi 
// dasturlashda ham obyektlar shu maqsadda ishlatilinadi

// endi biz bitta user obyektini create qilamiz
// bu userning bir qancha xususiyatlari va xodisalari bo'lsin
// salom beradigan, ...
// ismingizni kiriting va sizga salom beradi
// nodejswithobject fileda bir ikkita misollar ko'rishingiz mumkin terminal orqali bajariladigan

// let user = {
//     // ...
// };

// first, declare
function sayHi() {
    console.log("Hello!");
}

// then add as a method
// user.sayHi = sayHi;

// user.sayHi(); // Hello!

// qisqartma shakllar
// let user1 = {
//     hello: function () {
//         console.log("salom");
//     }
// }

// qisqartma shakllar
// let user11 = {
//     hello() {
//         console.log("salom");
//     }
// }

// demak biz obyektlarga methodlar va xususiyatlar qo'shar ekanmiz 
// shu obyektning ma'lumotlaridan foydalanishimiz kerak buladi 
// buning uchun bizga this kalit so'zi yordam beradi

// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         // "this" is the "current object"
//         console.log(this.name);
//     }

// };

// user.sayHi(); // John

// buning o'rniga o'sha obyektning o'zidan ham foydalanish mumkin lekin bu xatoliklarga olib keladi
let user = {
    name: "John",
    age: 30,

    sayHi() {
        console.log(user.name); // leads to an error
        console.log(this.name); // bu holatda xatokil bermaydi
    }
};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi();

// arrow functionlarda this keyword yuq