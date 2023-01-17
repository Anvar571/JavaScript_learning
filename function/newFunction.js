//  new Functionhar qanday satrni funksiyaga aylantirish imkonini beradi. 
// Masalan, biz serverdan yangi funktsiyani qabul qilib, keyin uni bajarishimiz mumkin:
let str = "console.log('salom')"
let exam1 = new Function(str)
console.log(exam1());

let sum = new Function('a', 'b', 'return a + b');

console.log( sum(1, 2) ); // 3

// new Function Closure xusisiyati yuq ya'ni yuqoridagi varablelarga kira olmaydi 
// buning sababi js minifikator vaqtida qatoliklarga sabab bo'ladi shuning uchun ishlatilmaydi