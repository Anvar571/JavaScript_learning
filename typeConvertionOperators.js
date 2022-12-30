// biror ma'lumotni stringga o'tkazish uchun String() function foydalaniladi
// number to string
let num1 = 213;
console.log(String(num1)); // string
console.log(typeof ("" + num1)); // string

// String to Number
console.log("6" / "2"); // arfmitik amallarda string avtomatik numberga o'giriladi
console.log(typeof Number("12")); // number

// alert() bu function o'zi avtomatik type almashtiradi lekin ichiga raqam sifatida text tashlab bo'lmaydi
// masalan
// let num2 = Number("nimalardir alert uchun")
// alert(num2)

// console.log(Number(undefined)); // NaN
// console.log(Number(null)); // 0

// Boolean convertion
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("nimadir")); // true
console.log(Boolean("")); // false 
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(312)); // true
console.log(Boolean(" ")); // true

let answer;
answer = 1 + 'Ninja';
console.log(answer)

let input = false;
console.log("input = " + input);
console.log(typeof (input));
input = String(input);
console.log("input = " + input);
console.log(typeof (input));
console.log(Number(undefined)); // NaN
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(String(undefined)) // "undefined"

let str = "1"
str = +str
console.log(typeof str);

console.log(true + false); // 1
console.log([, , ,].length);
console.log(!!"");
console.log(+true);

console.log(true == "true");
console.log(010 - 03);
console.log("" - - "");
console.log(++true);
console.log("" - 1);
console.log(0 + "0");
console.log("true" - 0);
console.log([] + []);
console.log(undefined + false);
console.log("" && -0);

//  Operators
// unary, binry, operend

let x = 23;

x = -x;
console.log(x);

 // string concatenation birlashtirish
// agar qo'shiladigan ma'lumotlardan biri string bo'lsa ikkinchisini ham stringga o'giradi
// faqatgidna string ichidagi raqam bo'lsa
console.log("1" + 4);// 14
console.log(5 + "6"); // 56
console.log(2 + 4 + "7"); // 67

// + operatori faqatgina satrlarni qo'llab quvvatlaydi qolganlari esa faqat raqamlar bilan ishlaydi
// va string ichidagi numberlarni faqat NUmberga aylantiradi

// unary plus bu faqat bitta qiymatga ishlatiladi
// masalan +true, +"", +[] bularning hammasini raqamga aylantiradi
console.log(+[]); // nu Number() function bilan bir xil faqat bu qisqaroq

// =====================================
// operatorlarning yuqoriligi yani qaysi birinchi bajarilishi prearititi yuqoriligi

let d = 2 * 4 + 5 * 2;
console.log(d);

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); // 3
console.log( c ); // 0

// chaining 
let a1, b1, c1;

a1 = b1 = c1 = 2 + 2;

console.log( a1 ); // 4
console.log( b1 ); // 4
console.log( c1 ); // 4

// oxiridagini oladi
let a3 = (1 + 2, 3 + 4, 44, 56+3);
console.log(a3);

// Comparisons taqoslashlar
// Barcha taqqoslash operatorlari mantiqiy qiymatni qaytaradi:
// stringlar assci ga qarab taqoslanadi
console.log("a" > "s");
// Har xil turdagi qiymatlarni solishtirganda, JavaScript qiymatlarni raqamlarga aylantiradi.

console.log("2" > 5);

console.log(true === 1); //f alse
console.log(true == 1);// true
console.log(typeof "0");