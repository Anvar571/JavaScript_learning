// generators
// jsda oddit functionlar bitta qiymat qaytaradi 
// generatorlar bilan esa bir necha qiymatlarni qaytarishi mumkin bo'ladi

// bularni yozishning yo'llari mavjud
// function multpleValueReturn(){
//     // jsda faqat oxirgisini qaytaradi
//     return "salom", 123, true
// }
// console.log(multpleValueReturn());

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let generator = generateSequence();
// object qaytaradi
// ichida xuddi linked listga o'xshab ketar ekan  
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());


let obj = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}

console.log(obj.next.next);

for (let value of generator) {
    console.log(value); // 1, then 2, then 3
}
// console.log(one); // {value: 1, done: false}

function* fibonacci() {
    let [prev, current] = [0, 1];
    while (true) {
        [prev, current] = [current, prev + current];
        yield current;
    }
}

const sequence = fibonacci();
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3

// Har safar chaqirilganda keyingi tub sonni hosil qilish 
// masalasini hal qiladigan generator funksiyasiga misol:
function* primes() {
    let current = 2;
    while (true) {
        if (isPrime(current)) {
            yield current;
        }
        current++;
    }
}

function isPrime(number) {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const primesSequence = primes();
console.log(primesSequence.next().value); // 2
console.log(primesSequence.next().value); // 3
console.log(primesSequence.next().value); // 5
console.log(primesSequence.next().value); // 7
console.log(primesSequence.next().value); // 11

// tub sonlarni qaytaradigan gerator function yozish

function isTubni(n) {
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return true
}

function* returnTub() {
    let curr = 2
    while (1) {
        if (isTubni(curr)) {
            yield curr
        }
        curr++
    }
}

// returnTub(20)
const tubnext = returnTub()
console.log(tubnext.next());
console.log(tubnext.next());
console.log(tubnext.next());
console.log(tubnext.next());

// bu orqali turli xildagi iterablelarni yaratihs mumkin
// a - z gacha harflarni chiqarish
function* alfa(){
    for (let i=97; i<122; i++){
        yield i
    }
}

for(let key of alfa()){
    console.log(String.fromCharCode(key));
}

// console.log(String.fromCharCode(67));