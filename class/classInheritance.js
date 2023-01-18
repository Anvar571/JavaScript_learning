// class inheritance meros olish "nusxa olish"
// bu bizga qanday yordam beradi ?
class Animal {
    constructor(name){
        this.name = name,
        this.speed = this.speed
    }

    run(speed) {
        this.speed = speed
        return `${this.name} runs with speed ${this.speed}`
    }

    stop() {
        this.stop = 0
        console.log(`${this.name} stopped`)
    }
}

// let animalName = new Animal('horse')

// endi biz boshqa hayvon yaratmoqchimiz umumiy hamma hayvonda bor methodlari bor class bor 
// qaytdan yozamizmi yuq shundan nusxa olib kattalashtirib ketaveramiz

// bu yerdagi extends so'zi prototypega ishora qiladi birinchi o'zidan qidiradi topilmasa prototypedan
// class Rabbit extends Animal {
//     hide(){
//         return `${this.name}`
//     }
// }
// let rabbit = new Rabbit("White Rabbit")
// console.log(rabbit.hide());

// endi biz meros olgan class ichidagi methodlarni ishlatishimiz kerak
// buning uchun bizga super kalit so'zi yordam beradi
// lekin meros olingan classga xlal bermagan holatda

class Rabbit extends Animal {
    hide(){
        return `${this.name}`
    }
    stop() {
        super.stop()
    }
}

let rabbit = new Rabbit("White Rabbit")
// console.log(rabbit.hide());
console.log(rabbit.run(4));
console.log(rabbit.stop());