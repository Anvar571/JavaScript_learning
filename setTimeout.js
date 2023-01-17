// Scheduling: setTimeout and setInterval
// Biz funktsiyani hozir emas, balki ma'lum bir vaqtda bajarishga qaror qilishimiz mumkin. 
//Bu "qo'ng'iroqni rejalashtirish" deb ataladi.

// setTimeout faqat bir marta ishlaydi 
// setInterval vaqt o'tgandan kiyin to'xtovsiz ishlaydi

// misol
// function sayHi() {
//     console.log('Hello');
// }

// setTimeout(sayHi, 4000);

// argumentlar bilan
function sayHi(phrase, who) {
    console.log(phrase + ', ' + who);
}

let id = setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

let clearT = clearTimeout(id)