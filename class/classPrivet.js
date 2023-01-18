// biz shunday qilishimiz kerak class ichidagi propetylar va methodlar usitida turli xil amallarni cheklash kerak
class CoffeeMachine {
    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

console.log(`Power is: ${coffeeMachine.power}W`);

coffeeMachine.power = 25;

console.log(coffeeMachine.power);

class Foo {
    // faqat shu class ichida ishlaydi
    #name = "nimadir"
}

// buni kiyinroq o'qib o'rganamiz
// nega bu kerak 
// js da objektlar uchun internal Enterface, external enterface yani ichki va tashqi
// bular obyektdagi method va xususiyatlarni ustida amal bajarishda ishlatiladi
// external Enterfacelarni o'zgartirib bo'lmaydi bular cheklangan chunki bu xatoliklarga olib keladi
