// data types
// Number , int, float, bigInt
// numberlarda _ belgi xuddi biz ajratib yozganimiz kabi (100.000)
console.log(100_000 + 1); // 100001 o'qishni osonlashtirish uchun ihlatiladi

// nolarni soni ko'payib ketatigan bo'lsa qiyin bo'ladi buning uchun 
console.log(1e5);
console.log(223e20); // bigInt bo'lgani uchun xatolik berayabdi

console.log(0.1 + 0.2 === 0.3); // bu false qaytadi sababi
// js chap tarafni hisoblaydi va solishtiradi
// bu oldini olish uchun toFixid() methodan foydalansak bo'ladi

console.log((0.1 + 0.2).toFixed(2) == 0.3);
// jsda consolga son yozsak ham string sifatida qabul qiladi
console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2);

// stringni Numberga aylantirish
// parsInt

// nuqta harlarni olib tashlab bizga qaytarib beradi
console.log(parseInt("0213.32424r")); // Nuberda bu NaN qaytaradi

// bu ham xuddi parseIntga o'xshaydi lekin fload qaytaradi
console.log(parseFloat("0312.1231eqw")); 

let num = 173
// console.log( num.toString(2)); // sanoq sestema
// console.log( num.toString()); // 123 string

// yaxlitlab beradi xona birliklariga qarab 
console.log(num.toPrecision(3)); // 200 

// Math sign
// manfiy sonlar uchun -1 musbatlar uchun 1 nol uchun 0
console.log(Math.sign(2));
console.log(Math.sign(-2));
console.log(Math.sign(0));
console.log(Math.sign(-22));
console.log(Math.sign("-12d")); // NaN
console.log(Math.sign("-12")); // -1


