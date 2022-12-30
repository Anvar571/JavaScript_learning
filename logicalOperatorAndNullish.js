// mantiqiy operatorlar en: logocal operator
// jsda bu operatorlar 4 ta hisoblanadi ||(or), &&(and), !(not), ??(nullish)
// birinchi || operatorni ko'ramiz bu qanday ishlaydi
// || => ikkala holatdan agar birortasi true yoki truega teng ma'lumot bo'lsa o'sh qism bajariladi ya'ni result true
// && => faqatgina ikkita qiymat uchun bitta holatda true (true && true) qolganlarida false
// ! => inkor teskarisiga o'giradi !true => false
// ?? => kiyinroq ko'ramiz

// bular ishlashidan oldin har bir qiymatni Booleanga o'tkazadi
// endi misollar ko'ramiz
console.log(true || false); // true
// true bo'lgan holatini qaytaradi
console.log(false || false || true); // true qaytaradi nechta bo'lsa ham
// false holatda birinchi qiymatni qaytaradi nechta bo'lsa ham
console.log(false+"3" || false+"2" || false+"1" || false+"0");
// bir nechta true qiymatlar qatnashsa faqatgina birinchi trueni qaytaradi
console.log("salom" || false || "alik" || "qale");

let isWeek = true;
let num = 23;

if (num > 34 || num < 22 || isWeek) {
    console.log("Assalomu alaykum");
}

let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

// sababi birinchi uchragan true qiymatni qaytaradi
console.log( firstName || lastName || nickName || "Anonymous"); // SuperCoder

console.log("true") || console.log("salom");

console.log( (console.log(1) || 2 || console.log(3)) || console.log(4) || "salom" || false );

// endi && operatorni ko'ramiz
// bu qanday ishlaydi 
// bu birinchi false qiymatni qaytaradi agar false qiymat topilmasa ozirgi true qiymatni chiqaradi
// hammasi true bo'lsa oxirgisi qaytadi
// && operator || operatordan ustun turadi

// eslatma  birinchi qiymatlarni Boolean typega o'tkasadi
console.log(false && true); // false

console.log(true+"1" && true+"2");// true2

// yuqoridagi qoidaga mos tushadi
console.log(true+"1" && true+"2" && true+"3" && true+"4");

// logika shu endi qanday ko'rinishda kelsa ham yechaolamsiz

console.log( 1 && 2 && null && 3 ); // null

// ikki xil ko'rinish 
let x = 1;

(x > 0) && console.log( 'Greater than zero!' );

let x1 = 1;

if (x1 > 0) console.log( 'Greater than zero!' );

// ! operatori teskariga o'giradi
// bu ham birinchi qiymatni Boolean typega o'giradi
console.log(!'salom');

// bir nechta bo'lishi ham mumkin o'ngdan bajarib kelaveradi 
// qiymatning true yoki falseligiga qarab o'zgartiraveradi
// bu misolada birinchi false, true, false, true
console.log(!!!!true);


// Nullish
// buning asosoiy vazifasi null yoki undefined emasligini tekshirish
let user = "nimadir";
let user1;

console.log(user ?? "Anonymous");  
console.log(user1 ?? "Nullish operator");

let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder";

// shows the first defined value:
console.log(firstName1 ?? lastName1 ?? nickName1 ?? "Anonymous"); // Supercoder

// bu huddi || operatorga o'zshaydi  lekin farqi bor 
let height = 0;
// sababi bu ?? faqat null yoki undefined bo'lganda ikkinchi qiymatni qaytaradi

console.log(height || 100); // 100
console.log(height ?? 100); // 0

console.log(null ?? "salom " ?? "nimadir" ?? undefined); // salom

console.log("salom " ?? "nimadir" ?? 2 ?? true); // salom

console.log(null+"1" ?? null+"2" ?? null+"3"); // null1