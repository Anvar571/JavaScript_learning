// har bir object create bo'lganda avtomatik constructor function yaratiladi sababi shunda prototypelar saqlanadi
// misol uchun

let animal = {
    eat: true,
    jump(){
        return 3
    }
}

// bunda doimiy xususiyatlarni yozish mumkin
function Rabbit(name){
    this.name = name,
    this.length = function() {
        return Rabbit.length
    }
}

Rabbit.prototype = animal

// bu esa meros
let rabbit = new Rabbit("white rabbit")
rabbit.lorem = "lorem ipsum"
console.log(rabbit.eat);
console.log(rabbit.jump());
console.log(rabbit.lorem);
console.log(rabbit.length());

function Rabbit() {}
console.log(Rabbit.prototype.constructor == Rabbit);


function Carrot(name) {
    this.name = name
}
// new prototype owerwrite eskisini ustudan yozib yuboradi
Carrot.prototype = {
    eat: "nimadir"
}
let carrot = new Carrot("nimadir");

Carrot.prototype.eat = false

console.log(carrot.eat);

// 
let obj2 = new Object.constructor()