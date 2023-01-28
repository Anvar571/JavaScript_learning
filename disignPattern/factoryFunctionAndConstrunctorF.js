// ========================================= factory function ===============================================
// factory function bu faqat object qaytaradigan function va uni ishlatishda new kalit so'zidan foydalanilmaydi
// bu nima uchun kerak bo'ladi bizga 
// biz bir birida o'xshagan mahsulatlarni yaratmoqchi bo'lsak va bir narsani qayta qayta yozishga to'g'ri keralad
// shu vaqtda fuctory functiondan foydalanish mimkin bo'ladi
// qisqacha qilib aytadigan bo'lsak bitta shabon tayyorlab olib undan hohlagan vaqtda chaqirib nusxa olib ishlatishimiz mumkin bo'ladi
// misollar ko'rib chiqamiz

// shablon function
function createRobot(name) {
    return {
        name,
        talk: function () {
            return ('My name is '
                + name + ', the robot.');
        }
    };
}

const robot1 = createRobot("kelvin")
console.log(robot1.name);
console.log(robot1.talk());
const robot2 = createRobot("marvel");
console.log(robot2);
console.log(robot2.talk());

// bitta oila yaratamiz 
// oilada hammada bo'ladigan xususiyatlarni umumiy shularni bitta object qilib qo'yamiz
const Family = function (name, age, height) {
    let preson = {};
    preson.name = name;
    preson.age = age;
    preson.height = height;

    preson.sahHi = function () {
        return `Hello ${preson.name}`
    }

    return preson;
}
// const child = Family("anvar", 21, 170);

Object.prototype.Family = function (name, age, height) {
    let preson = {};
    preson.name = name;
    preson.age = age;
    preson.height = height;

    preson.sahHi = function () {
        return `Hello ${preson.name}`
    }

    return preson;
};

const obj = {
}

console.log(obj.Family());


// factory function and constructor function difference
// class ES6
class Car {
    drive() {
        return "lorem"
    }
}
const car1 = new Car();
console.log(car1.drive());

// constructor function
function CarCon() {
    this.drive1 = function () {
        return "lorem drive1 constructor"
    }
    // speed() {
    //     return "1000mh/s"
    // }
}
CarCon.prototype.drive = function () {
    return "lorem constructor"
}
const newCar = new CarCon();
console.log(newCar.drive());
console.log(newCar.drive1());

// factory function
const proto = {
    drive() {
        return 'Vroom!'
    },
    drive1() {
        return 'Vroom 1!'
    }
};

const factoryCar = () => Object.create(proto);

// const car3 = factoryCar();
// console.log(car3.drive());
console.log(proto.drive1());

// bularning barchasi methodlarni prototypeda saqalaydi

// shundaqa object yaratish kerak undan istalgan joyda obj methodlarni 
// ishlatish mumkin bo'lsin

// Object.prototype.globalObj = function() {
//     return {
//         drive() {
//             return "lorem ipsum"
//         }
//     }
// }

// let newFunction = {
//     name: "lorem"
// }
// console.log(newFunction.drive());


