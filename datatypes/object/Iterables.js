// itereblelar ya'ni takrorlanuvchilar har bir value ustida amal bajarish mumkin boladi
// array, string bularni tsikl yordamida aylanishimiz mumkin lekin obyektlarni esa yuq 
// lekin iloji bor buning uchun for of yordam beradi obyektlarni ham arraylar kabi aylanishimiz mumkin bo'ladi

// misol uchun 
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    console.log(num); // 1, then 2, 3, 4, 5
}


// string iterable
for (let char of "test") {
    // triggers 4 times: once for each character
    console.log(char); // t, then e, then s, then t
}
// yana bunaqa usuldan ham foydalansak buladi bu biroz qiyinroq lekin 
// bunda jarayonni boshqarishimiz mumkin bo'ladi
let str = "Hello";

// does the same as
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();
console.log(iterator);
while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value); // outputs characters one by one
}

// endi bizdagi muammo biz arraylardan foydalanganimizda ularning methodlari bor va yana qo'shimcha imkoniyatlari bor
// bir obj stringlardan ham shunday foydalana olishimiz mumkin bo'ladi
// buning uchun bizga Array.from methodi yordam beradi
// misol uchun

let arrayLike = {
    0: "Hello",
    1: "World",
    2: "salom",
    ad: "nimadir", // bularni qabul qilmaydi
    length: 5,
};

// faqat bu indexlangan qiymatlarni arrayga o'tkazadi
let arr = Array.from(arrayLike); // (*)
console.log(arr);
// console.log(arr.pop()); // World (method works)
// bu qanday ishlaydi
// Array.fromsatrda (*)ob'ektni oladi, uni takrorlanadigan yoki massivga o'xshashligini tekshiradi, 
// so'ngra yangi massiv yaratadi va unga barcha elementlarni ko'chiradi.

// string to array
let str3 = "salom"
let newStr3 = Array.from(str3)
console.log(newStr3);
// ortida shu narsa yotibdi desak ham bo'ladi
let str31 = 'salom';

let chars = []; // Array.from internally does the same loop
for (let char of str31) {
  chars.push(char);
}

alert(chars);