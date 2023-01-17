// call, apply, bind bular nimaga ishlatiladi
// keling bularni ko'rib chiqamiz oddiyroq misollar bilan birgalikda
// misol uchun bizga beckenddan kelgan ma'lumotlar bor ular obyekdan tashkel topgan 
// ular uchun umumiy function yozish kerak va shu function orqali hamma obyekt qiymatlari ustidi ishlay olaylik
// shu vaqda bular kerak buladi va yana this muammolarini hal qilish uchun ham ishalatiladi

let obj = [
    {name: "anvar", age: 21},
    {name: "anvar1", age: 21},
    {name: "anvar2", age: 21},
    {name: "anvar3", age: 21},
    {name: "anvar4", age: 21},
    {name: "anvar5", age: 21},
]
// let obj1 = {name: "samandar", age: 31}

function writeFunction() {
    return `${this.name} + ${this.age} user haqida ma'lumotlar` 
}
for (let user of obj) {
    console.log(writeFunction.call(user))
}
// console.log(writeFunction.call(obj1))

// console.log(writeFunction()); // 'Pika Chu I choose you!'