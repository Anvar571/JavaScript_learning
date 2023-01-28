// Immutability => translate - o'zgarmaslik
// mutation => Mutatsiya - ob'ektning qiymati yoki tuzilishining o'zgarishi.
// FP => da obyect va arraylarning asl qiymatini o'zgatirmaslik kerak bo'ladi shu narsa immutability deyiladi
// bitta misol ko'ramiz

const cartProducts = [
    {
        "name": "Nintendo Switch",
        "price": 320.0,
        "currency": "EUR"
    },
    {
        "name": "Play station 4",
        "price": 350.0,
        "currency": "USD"
    }
]

// cartProducts.forEach((product) => {
//     const currencySign = product.currency === 'EUR' ? '€' : '$'
//     product.price = `${product.price} ${currencySign}`
// })

// let total = 0
// cartProducts.forEach((product) => {
//     total += product.price
// })

// // Now let's print the total
// console.log(total)
// console.log(cartProducts);

// endi boshqacharoq usulini ko'rib chiqamiz
// bu yerda arrayning asl nusxasiga tegmagan holatda uning nusxasini olib ishlatayabmiz

const productsWithCurrencySign = cartProducts.map((product) => {
    const currencyName = product.currency === 'EUR' ? 'euros' : 'dollars'
    // Copy the original data and then add priceWithCurrency
    return {
        ...product,
        priceWithCurrency: `${product.price} ${currencyName}`
    }
})

console.log(productsWithCurrencySign);

let total = 0;
productsWithCurrencySign.forEach((product) => {
    total += product.price
})

console.log(total)

// SAYT-EFFECT => bu function local scopdan tashqaridagi scoplarni o'zgartirishi 
// YA'NI => function tashqaridagi variablelarning qiymatlarini o'zgartirishi, o'zining qiymati o'zgarib ketadi

let arr = ["salom", "lorem", "nimadir"]

console.log(free("ipsum"))

function free(item) {
    return [...arr, item]
}

console.log(arr);// soft arr

// ============================================
// deterministik function => bir xil qiymat uchun bir xil javoblar qaytaradi
const joinWithComma = (names) => names.join(', ')

console.log(joinWithComma(["Shrek", "Donkey"])) // Prints Shrek, Donkey
console.log(joinWithComma(["Shrek", "Donkey"])) // Prints Shrek, Donkey again!

// no detisministc function har doim har xil qiymat qaytaradi
console.log(Math.random());
// bu kodni o'qish oson natijani tahmin qilish oson

// pure function
// detirministik function va side-effectga tasir qilmaydigan function hisoblanadi


// high-order function 
const simpleProfile = (longRunningTask) => {
    return () => {
        console.log(`Started running at: ${new Date().getMilliseconds()}`)
        longRunningTask()
        console.log(`Finished running at: ${new Date().getMilliseconds()}`)
    }
}

const calculateBigSum = () => {
    let total = 0
    for (let counter = 0; counter < 1000000000; counter += 1) {
        total += counter
    }
    return total
}


const runCalculationWithProfile = simpleProfile(calculateBigSum)

runCalculationWithProfile()

// curry functionlar
// bir vaqtning o'zida bir qancha argument qabul qiladigan function
// high-order function orqali hosil qilinadi ES6
const generateGreeting = (ocassion) => (relationship) => (name) => {
    return (`My dear ${relationship} ${name}. Hope you have a great ${ocassion}`)
}

// const greeter = generateGreeting('birthday')

// Specialized greeter for cousin birthday
// const greeterCousin = greeter('cousin')

// const threedFunction = greeterCousin("lorem");

// console.log(threedFunction);
// buni yana boshqacha chaqirishimiz ham mumkin

const fullFunction = generateGreeting("one ")('two')("three");
console.log(fullFunction);