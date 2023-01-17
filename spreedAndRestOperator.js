// bizda shunaqangi misol berilgan sonlarning yigindisini hisoblash lekin sonlarning soni aniq emas
// function sum(a, b) {
//     return a + b
// }

// console.log(sum(1, 3, 4,5,7,7,5, 34));

function sum(...arg) {
    let sum = 0;
    for (let s of arg) {
        sum += s
    }
    return sum
}
console.log(sum(12, 34, 4));
// bu faqat oxirida bo'lishi kerak bo'lmasa xatolik beradi

// Bu faqat ES6dan boshlab qo'shilgan ungacha "arguments"dan foydalanilgan
function showName() {
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);

    // it's iterable
    // for(let arg of arguments) alert(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");
// lekin arguments array emas shuning uchun unda array methodlari ishlamaydi
// bularning barchasi spreed operatori hisoblanadi

// endi esa rest operatorini ko'rib chiqamiz
let arr = [12,34,1, 2, 4]
console.log(...arr+2);

// va bu orqali array va objectlardan nusxa olishimiz mumkin
let arr2 = [12, 34,31,5]
let arr3 = [...arr2]
arr2[2] = 3
console.log(arr3);

let str = "12,4,45,56";
let strToArr = str.split(',')
console.log(strToArr);

// objectlarda ham huddi shunday