// jsda hamma narsa object hisoblanadi 
// jsda har data typening methodlari bor faqat null va undefineddan tashqari
// lekin jsbuni anchagina optemallashtirgan shuning uchun bu muammo emas tez ishlaydi
// har bir data typening methodlarini chaqirganimizda ular ichidagi objectlarga murojat qiladi
// let str = "hello"
// console.log(str.open); chaqirilganda wrapper object ochiladi va qiymat bo'lsa oladi yuq bo'lsa undefined qaytaradi
// va wrapper object yopiladi

let zero = new Number(0);

if (zero) { // zero is true, because it's an object
  console.log( "zero is truthy!?!" );
}