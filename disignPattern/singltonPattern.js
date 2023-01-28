// faqatgina bir marta chaqirib ishlatsa bo'ladigan disign pattern hisoblanadi
// agar buni qayta qayta chaqiraversak yagonaligi yo'qoladi va har bir chaqirilgan instance boshqa boshqa bo'ladi
let counter = 0;

// class Counter {
//     getInstance() {
//         return this
//     }

//     getCounter() {
//         return counter;
//     }

//     increment() {
//         return ++counter
//     }

//     decrement() {
//         return --counter;
//     }
// }
// hozir bunda hohlagancha nusxaolish mumkin bo'ladi biz buni cheklashimiz kerak bo'ladi
let instance;
class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can only create one instance!")
        }
        instance = this
    }
    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}

const counter1 = new Counter();
// const counter2 = new Counter();
// console.log(counter1, counter2);
console.log(counter1);
