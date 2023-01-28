// factory function bu har doim object qaytaradigan function hisoblanadi
// bu juda jodda bo'lgan chalkashliklarga ega bo'lmagan obyect qaytaradigan function hisoblanadi

// masalan bizga topshiriq berildi
// html uchun tag create qiladigan function yozish kerak 
// tagning asosiy xosalari nomi text ...
// bu hammasida takrorlanadi

function createElement(tagName, text, color) {
    const tag = document.createElement(tagName);
    tag.style.color = color;
    tag.innterText = text;
    document.body.append(tag);
    return {
        tag,
        setText(text) {
            tag.innterText = text
        },
        setColor(color) {
            tag.style.color = color
        }
    }
}

const h1 = createElement("h1", "Site Logo", "black");
console.log(h1);


function factory(name) {
    return {
        name,
        getFullData() {
            return `Hello ${name}`
        },
        fly() {
            return "lorem"
        }
    }
}

const fac1 = factory("proba 1");
const fac2 = factory("proba 2");
console.log(fac1.fly());
console.log(fac2.fly());
fac1.fly = function () {
    return "update this method"
}
console.log(fac1.fly());
console.log(fac2.fly());

// factory functiondan foydalanish xato sababi bu xotiradan ko'p joy oladi
// va buning ichidagi methodlar qayta qayta takrorlanadi shuning natijasida 
// har bir nusxa olingan object uchun alohida function hosil bo'ladi
// va biz biridan o'sha methodni o'zgartirsak faqatgina shu objectda o'zgaradi qolganlarida 
// o'zgarmaydi 
// lekin buning ilojini qilsa bo'ladi lekin yaxshi emas

Object.prototype.anyMethod = function () {
    // your code
}
// buning yomon tomoni shundan iboratki anyMethod hamma obyetlarda bo'ladi window.anyMethod()
// bu esa juda yomon

// buni oldini olish uchun Object.create() dan foydalanamiz

// bu prototype hisoblanadi
const myObj = {
    talk() {
        return `Talking`
    }
}

// biz qurgan prototype jsning eng ustki qismiga qo'shiladi
// va izlab izlab ketaveradi
function conversionObjToPrototype(name){
    return Object.create(myObj, {
        name: {
            value: name
        }
    })
}

const one = conversionObjToPrototype("anvar");
console.log(one);

// ====================================================================================
// endi huddi shu ma'lumorlarni constructor function bilan qilib ko'ramiz
function Humans(name){
    this.name = name
}

Humans.prototype.sayHi = function () {
    return `Hello ${this.name}`
}

const hum1 = new Humans("lorem 1")
const hum2 = new Humans("lorem 2")

console.log(hum1.sayHi());
console.log(hum2.sayHi());

Humans.prototype.sayHi = function () {
    return `new Hello ${this.name}`
}
console.log(hum1.sayHi());
console.log(hum2.sayHi());
