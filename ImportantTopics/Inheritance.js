// new topics ==================================
// inheritance => bu asosan kodlarni kamaytirsh uchun ishlatiladi
// bir biriga o'xshagan kodni qayta qayta yozishdan qochish
// class bu meros olishning juda oson yo'li 
// aslida buni oddiy objektlar bilan qilsa ham bo'ladi
// bitta functionni qayta qayta copy qilishning yomon tomonlari bor
// agar kod o'zgarsa yoki xatolik chiqsa hamma cope qilgan functionlarimizni
// o'zgartirib chiqishga to'g'ri keladi bu esa juda yomon

const me = {
    talk() {
        return "Talking"
    },
    sayHi(){
        return "sayHi bla bla"
    }
}
console.log(me.sayHi());

const you = {
    talk() {
        return "talking"
    }
}

// console.log(me.talk());
// console.log(you.talk());

const we = {}
Object.setPrototypeOf(we, me);
console.log(we.sayHi()); 

// classni sinab ko'ramiz
class Person {
    talk(){
        return "talk"
    }
}
const me1 = new Person();
const you1 = new Person();
// console.log(me1.talk());
// console.log(you1.talk());

// console.log(me1);
// me1.lorem = "lorem ipsum"
// console.log(me1);
// endi Person ichidagi functionni yangilamoqchi bo'lsak 
// prototype orqali yangilaymiz
// buni yaxshi tarafu biz xoxlagan joyimizda o'zgartirib ketaveramiz
Person.prototype.talk = function () {
    return "new talking function"
}
console.log(me1.talk());
console.log(you1.talk());


// ====================== constructor function inheritance
function Person1(){
    this.run1 = function(){
        return "run 1 lorem"
    }
}
Person1.prototype.run = function () {
    return "run coding"
}

const me2 = new Person1();
console.log(me2.run());
// bu ham ishlaydi lekin bu prototypeda bo'lmaydi faqat shu constructorning o'zida bo'ladi
// o'zgartirishda muammolar kelib chiqadi
console.log(me2.run1());

// new example
function Person2(){
    this.name = "albert"
}
const he = new Person2();
console.log(he.name);
// faqatgina meros olingan obyect uchun ishlaydi 
// yana yangi yaratilsa u uchun barcha property va methodlar
// yangidan bo'ladi va prototypeda bo'lmaydi 
console.log(Person2.prototype.name);

// ===============
class ChildPerson extends Person {
    fly(){
        return "fly"
    }
}
const your = new ChildPerson();
console.log(your.talk());
console.log(your.fly());
