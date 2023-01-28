// factory pattern
// Disign Pattern nima
// Disayn naqshlari - bu dasturiy ta'minotni ishlab chiqishda keng tarqalgan muammolarni hal qilish uchun shablon yoki yechim sxemalari.
// Disign Patternlar uch gruhga bo'linadi
// creational patterns, structural patterns, and behavioral patterns.

// biz oddiy obyekt yaratamiz
// const car4 = {
//     name: "BMW",
//     color: "white",
//     drive() {
//         return "lorem"
//     },
//     speed() {
//         return "ipsum"
//     }
// }

const car2 = {
    name: "BMW",
    color: "white",
    drive() {
        return "lorem"
    },
    speed() {
        return "ipsum"
    }
}
// bu code yozish yaxshi emas chunki bitta functionni qayta qayta yozish yomon
// buni bitta functionga olib qo'ysak bo'ladi
function cars(name, color){
    return {
        name,
        color,
        drive(){
            return "your code"
        },
        speed(){
            return "lorem"
        }
    }
}
// const car3 = cars("nexia", "black");
// console.log(car3);
// const car4 = cars("lassitte", "white");
// console.log(car4.drive);
// bularni ES6 va constructor function yordamida yozish mumkin

// bizda endi muammo bor turli turdagi mashinalarni ishlab chiqaradigan zavod bor shu zavodni avtomatlashtirish kerak
class Car {
    constructor(option){
        this.wheels = option.wheels || 4;
        this.doors = option.doors || 4;
        this.color = option.color || "white";
    }
}

class Truc {
    constructor (option){
        this.wheels = option.wheels || 6;
        this.doors = option.doors || 2;
        this.color = option.color || "blue";
    }
}

class Bus{
    constructor(option) {
        this.wheels = option.wheels || 6;
        this.doors = option.doors || 2;
        this.color = option.color || "blue";
    }
}

class MotoCar{
    constructor(option){
        this.wheels = option.wheels || 6;
        this.doors = option.doors || 2;
        this.color = option.color || "blue";
    }
}

class Factory {
    create = (option, vehicleType) => {
        if (!vehicleType) {
            return "unable to make vehicle. Please specify a vehicle type and tryagain!"
        }
        let vehicle;

        if (vehicleType == "car"){
            vehicle = new Car(option);
        }else if (vehicleType =="truc"){
            vehicle = new Truc(option)
        }else if (vehicleType == "bus"){
            vehicle = new Bus(option)
        }else if(vehicleType == 'motocar') {
            vehicle = new MotoCar(option)
        }

        vehicle.vehicleType = vehicleType;

        vehicle.startEngine = ()=> console.log(`Reving ${vehicleType} engine`);

        vehicle.driveVehicle = ()=> console.log(`Driving ${vehicleType}...`);

        vehicle.stopEngine = ()=> console.log(`Stop ${vehicleType} engine`);
        
        return vehicle;
    }
}

const vehicleFactory = new Factory();

// new car create
const car = vehicleFactory.create({
    wheels: 4,
    doors: 2,
    color: "red"
}, "car")

// console.log(car);

// new truc create
const truc = vehicleFactory.create({
    wheels: 5,
    doors: 4,
    color: "red" 
}, "truc");

// console.log(truc);

// yana boshqa turdagi avtomashinaarni yaratmoqchi bo'lsak 
// factory classga yana qo'shimcha qo'shamiz

// endi yana qo'shib ketaveramiz
const bus = vehicleFactory.create({
    wheels: 5,
    doors:1,
    color: "gren"
}, "bus")
console.log(bus);
console.log(bus.startEngine());

// constructor function and class two deffrind
