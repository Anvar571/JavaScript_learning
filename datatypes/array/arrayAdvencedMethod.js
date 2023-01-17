// array advenced method
// filter, find, finfIndex, sort, reduce, map, every, some

let newArr = [
    {id: 1,  year: 2002, createdAt: "23:43", title: "Bugun ozroq yomg'iz yog'di", category: "weather"},
    {id: 2,  year: 1999, createdAt: "17:03", title: "Qanaqadir yangiliklar bo'ldi", category: "news"},
    {id: 3,  year: 2000, createdAt: "13:12", title: "Yangi serial chiqdi", category: "movie"},
    {id: 4,  year: 2001, createdAt: "21:43", title: "Hayot o'zgarmoqda sen nima qilmoqdasan", category: "mativation"},
    {id: 5,  year: 2001, createdAt: "12:25", title: "lorem ipsum", category: "other"},
]

// filter ya'ni ajratib olish
// let res = newArr.filter((val, ind) => {
    // return val.year === 2001
    // return val.category == 'news'
    // return 2; // agar qiymat true bo'lsa o'sha arrayni o'zini qaytaradi
// })

// console.log(res);
// find methodi ham shunga o'xshash lekin find methodi faqat birinchi uchraganini qaytaradi
// ya'ni faqat bitta qiymat qaytaradi filter esa to'g'ri keladigan barchasini qaytaradi

// sort ya'ni tartiblash
let res = newArr.sort((a, b) => a.title.localeCompare(b.title))
console.log(res);

// every method => arrayni tekshiradi har bir qiymatini agar hammasi shartni bajarsa true aks holda false
const numbers = [12, 34,1,44,23, -1]
console.log(numbers.every(num => num > 0));


// some method => everyning teskarisi bo'ladi 
// array ichida bittasi shartni bajarsa true aks holda false
const numbers1 = [21, 21,423,42,1,312,-12,0,234];
console.log(numbers1.some(num => num > 352432)); // false
console.log(numbers1.some(num => num > 21)); // true

// reduce method 
const nums = [12, 34,1,43,42,4]
const res2 = nums.reduce((prev, curr) => {
    // prev bu yerda oldingi qiymatni saqlab boradi
    // ya'ni eski qiymat bilan nimadir qilish kerak bo'lib qolsa ishlatish mumkin
    // oldingi qiymat bilan
    console.log(prev);
    return prev + curr
});
console.log(res2);
