// constructor function bizga nimaga kerak biz biror obyect qursak va ma'lum darajaga erishgandan kiyin uni
// yani versiyasini ishlab chiqarish kerak shu vaqtda biz uni qaytadan yozmaymiz shuning uchun undan 
// nusxa olib o'zgartirishlar kiritib ishlatib ketaveramiz 
// ekisi esa o'z holicha qolaveradi


// biz bilamizki js obyektlar yashirin prototypega ega shuning uchun u methodlarni shundan oladi
// biz obyet yoki biror data type methodidan foydalanayotganimizda u birinchi shu objning o'zidan qidiradi
// bo'lmasa prototypedan qidiradi 
// endi biz o'zimiz ham protopty qo'shishimiz mumkin _proto_ orqali

// misol uchun
let foo = {
    name: "lorem"
}

let boo = {
    isTrue: "true false"
}

foo.__proto__ = boo;
console.log(foo.isTrue); // agar fooda bo'lmasa boodan oladi avtomatik

// obyektlarning ichida ham ishlatishimiz mumkin bo'ladi
let foo1 = {
    title: "lorem ipsum",
    speed: function () {
        return "salom hello world"
    }
}

let boo1 = {
    description: "lorem ipsum nimadir nimadir",
    __proto__: foo1
}

console.log(boo1.title);
console.log(boo1.speed());

let animal = {
    eats: true,
    walk() {
        console.log("Animal object");
    }
};

let rabbit = {
    __proto__: animal
};

// bu holatda xuddi yani method qo'shganga o'xshaydi shuning uchun prototypedan olmaydi 
rabbit.walk = function () {
    console.log("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!

// prototype bilan setter va getter ishashi
let user = {
    name: "Anvar",
    surename: "Abdurashidiv",

    get fullName() {
        return `${this.name} ${this.surename}`
    },
    set fullName(val) {
        [this.name, this.surename] = val.split(' ');
    }
}

let admin = {
    __proto__: user,
    isAdmin: true
}

console.log(admin.fullName);
// this ning prototypelarga umuman tasiri yuq ishlayveradi
admin.fullName = "bobur boburov";

console.log(user.fullName);
console.log(admin.fullName);

// animal has methods
let animal1 = {
    walk() {
        if (!this.isSleeping) {
            console.log(`I walk`);
        }
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit1 = {
    name: "White Rabbit",
    __proto__: animal1
};

// modifies rabbit.isSleeping
rabbit1.sleep();

console.log(rabbit1.isSleeping); // true
console.log(animal1.isSleeping); // undefined

// xulosa 
// prototype hamma objectlarda bor u object yoki null ga teng
// yashirin objectga jsning murojat qilishi prototype deyiladi
// prototypelar yoqoriga qarab yuradi

// misollar 
// objectlar ichidan oson yo'l bilan qidirish prototypelarini yozish
let head = {
    glasses: 1,
    __proto__: null
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

console.log(pockets.pen);
console.log(bed.money);

// qaysi objectga yozadi
let banana = {
    eat() {
        this.full = true
    }
}

let garella = {
    __proto__: banana
}
garella.eat()
banana.eat()
console.log(banana.full);
console.log(garella.full);


let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
        // this.stomach = [food] // bu ham bir yo'li
    }
};

let speedy = {
    __proto__: hamster,
    stomach: []
};

let lazy = {
    __proto__: hamster,
    stomach: []
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

console.log(lazy.stomach); // apple
// bu muammo buni yechish uchun har bir nusxa olingan objectga arrayni o'zini bersh kerak


// js ichki tuzilishi juda optemalashtirilgan u bir topgan qiymatini eslab qolib kiyingi safar shundan qidiradi
// cashelash natijasida va boshqa yo'larda