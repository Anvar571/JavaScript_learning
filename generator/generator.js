// generators
// jsda oddit functionlar bitta qiymat qaytaradi 
// generatorlar bilan esa bir necha qiymatlarni qaytarishi mumkin bo'ladi

// bularni yozishning yo'llari mavjud
// function multpleValueReturn(){
//     // jsda faqat oxirgisini qaytaradi
//     return "salom", 123, true
// }
// console.log(multpleValueReturn());

// genetator function objecy qaytaradi
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

let one = generator.next();

console.log(one); // {value: 1, done: false}