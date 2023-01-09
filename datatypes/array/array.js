// console.log(Array.prototype.every());
// array nima what is array
// array bu bitta o'zgaruvchida ko'pab ma'lumoatarni saqlaydigan object
// array bilan objectning farqi xotirada joylashishda, qidirishda, e'lon qilishda va yana bir qancha

// array structure
// arraylarni e'lon qiish usuari
// 1- usul
let arr = [21, "bir", "son", 34, true, undefined]
console.log(arr);

// 2- usul
let arr1 = new Array(10);
arr1[0] = "birinchi";
console.log(arr1);

// arrayning xotirada joylashishi => ketma ket joylashadi qiymatning typega qarab
// shuning uchun arraydan malumotlarni o'chirish ko'p vaqt oladi
// arraylarga ma'umot qo'shish objectga nisbatan sekinroq chunki arrayga qo'shilgan ma'lumoat har bir indexni surib chiqadi

// arrayning elementarini chiqarish usullari
// har bir qiymatning indexi bor shu orqai chaqirsak bo'ladi

let arr2 = [1,3,4,5,6,64,5,54,2,4,4] // 
console.log(arr2[4]);
console.log(arr2[43]); // undefined
console.log(arr2.length); // array uzunligi
console.log(arr2[arr2.length - 1]); // last value
// yangi method
console.log(arr2.at(1));
console.log(arr2.at(-1)); // last value

// arrayni boshqa data typega convert qilish 
let arr22 = [12, 34, "salom"];
console.log(arr22.toString());
console.log(arr22.join("/")); // nima bilan ajratishni kiritish mumkin

// arrayarni bir biriga qo'shganda avtomatik string typega convert bo'ladi
let arr3 = [12, 34, 45];
let arr4 = [2, 4, 4];
console.log(arr3 + arr4);
console.log(arr3.concat(arr4, [231, 23], "saom"));

// taqoslash
let arr5 = [12,32]
let arr6 = [12,32]
console.log(arr5 == arr6); // false
console.log(arr5 === arr6); // false

// array methodlariga o'tishdan oldin pure va impure functionlarni o'rganing 
// va functionlarni yaxshilab o'rganing
// array methods 
// slice, splice, find, concat, push, shift, pop, reduce, indexOf, map, forEach, join, toString, 

// let newArr = [
//     {id: 1,  createdAt: "23:43", title: "Bugun ozroq yomg'iz yog'di", category: "weather"},
//     {id: 2,  createdAt: "17:03", title: "Qanaqadir yangiliklar bo'ldi", category: "news"},
//     {id: 3,  createdAt: "13:12", title: "Yangi serial chiqdi", category: "movie"},
//     {id: 4,  createdAt: "21:43", title: "Hayot o'zgarmoqda sen nima qilmoqdasan", category: "mativation"},
//     {id: 5,  createdAt: "12:25", title: "lorem ipsum", category: "other"},
// ]

let newArr1 = [12, 34, 45, 6]

// newArr1.push(65) // oxiriga qo'shadi  ixtioriy data typeni value sifatida qo'shadi
// newArr1.pop() // oxiridan bitta ma'lumotni olib tashlaydi
// newArr1.unshift() // array boshiga qiymat qo'shadi istalgancha and data type add
// newArr1.shift() ; // array boshidan o'chirib tashlaydi

// splice va slice bir biridan farqlari 
// splice arrayni asl xolatini o'zgartiradi slice esa o'zgartirmaydi
// spliceda add, delete, qirqib olish mumkin 
newArr1.splice(0, 2) // qirqib olish
// newArr1.slice(2, 3)

console.log(newArr1);
console.log(newArr1.slice(2, 3));

// indexOf qidirish faqat birinchi topilgan valueni indexni qaytaradi yoki -1 qaytaradi
// lastIndexOf ham huddi shunday faqat oxiridan qidiradi
let arr7 = [12, 34, 21, 45, 66]

// console.log(arr7.indexOf(4));

// console.log(arr7.join(',').split("!"));

// reverce arrayni teskarisiga o'girib beradi
console.log(arr7.reverse()); // asl qiymatini o'zgartiradi return function slice esa void function
console.log(arr7);

let task = ["anvar", "abdurashidov"]
// result har bir harfni necha martadan qatnashganligini topish
let obj = {}
let inr = 0;
for (let char of task) {
    for (let char1 of char){
        obj[char1] = inr++
    }
}
console.log(obj);