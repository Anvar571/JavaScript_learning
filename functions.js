// javascriptda basic qismda 
// function decloration, function expression, arrow functio, callback functionlar bor

// function nima uchun ishlatiladi => funksiya bu bitta kodni qayta qayta yozmasligimiz uchun bizga yordam beradi
// funksiyani ko'p marotaba ish;atishimiz mumkin bo'ladi

// function decloration
function funcName(parm1, parm2, ...parmn) {
    console.log(parm1, parm2, parmn);
}
// shunaqa ko'rinishda bo'ladi

// funksiya ichida va tashqarisida ishlatiladigan o'zgaruvchilar
// funksiya ichida ishlatilgan o'zgaruvchuni funksiya tashqarisida ishlatib bo'lmaydi
// funksiya tashqarisida ishlatilgan o'zgaruvchini funksiya ichida ish;atish mumkin bo'ladi

function myFunc() {
    let str = "Salom";
    console.log(str + " qalesan");
}

myFunc()
console.log(str); // str is not defined

// ============
let str1 = "Salom";

function myFunc1() {
    console.log(str1);// Salom
}

myFunc1()

// funksiya ichida va tashqarisida bir xil nom bilan ishlatilgan o'zgaruvchilarda funksiya ichidagisini birinchi ishlatadi

// parametrli funksiyalar
let arg1 = "Qale"
function myFunc2(arg1, arg2) {
    arg1 = "salom";
    console.log(arg1);
}

myFunc2(arg1, "nimadir")
console.log(arg1);

// default parametrga qiymat berish
// yangicha default qiymat berish
function myFunc3(text = "salomlar") {
    console.log(text);
}

myFunc3();
// eskicha default qiymat berish
function showMessage(from, text) {
    if (text === undefined) {
        text = 'no text given';
    }
    // yoki
    // text = text || "qanaqadir text"

    alert(from + ": " + text);
}

// qiymat qaytaradigan functions
// function qiymat qaytarish uchun return kalit so'zidan foydaladi
// returndan kiyin biror amal yozib bo'lmaydi ko'p amal yozmoqchi bo'lsak 
function myFunc4() {
    return (
        some + long + expression
        + or +
        whatever * f(a) + f(b)
    )
}


// funksiyani nomlash qoyidalari
// "get…"- qiymatni qaytarish,
// "calc…"- biror narsani hisoblash,
// "create…"- biror narsa yaratish,
// "check…"- biror narsani tekshiring va mantiqiy qiymatni qaytaring va hokazo.


// =======================================================================================================
// bularning barchasi function decloration edi endi function expressionni ko'ramiz
function sayHi() {
    alert("Hello");
}

console.log(sayHi);

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

}

// ...use it later
welcome(); // Error: welcome is not defined

let age1 = prompt("What is your age?", 18);

let welcome;

if (age1 < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now

// callback functionlar
// bu nima uchun ishlatiladi bu asosan bir funksiya ishlagandan kiyin ishlaydigan funksiya hisoblanadi
// bu qayirda ishlatiladi masalan: userdan qanaqadir ma'lumot olindi va shu ma'lumotni qayta ishlash kerak 
// bo'ladigan bo'lsa callback functiondan foydalansa bo'ladi
function userQ(question) {
  let question1 = "savol kiriting";
  question(question1) 
}

function question1(value) {
  console.log(`nimadir`, value);
}