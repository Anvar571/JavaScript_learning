// bu asosan takrorlanmaydigan keylar uchun ishlatiladi
// obyeklar uchun takrorlanmaydigan key kerak bo'ladigan bo'lsa Symboldan foydalansak bo'ladi


let id = Symbol("id");
let id1 = Symbol("id")
// console.log(id.toString());
// console.log(id1.toString());

let obj = {
    [id]: "Qanaqadir ma'luot",
    id: "nimadir1",
    // ["id"]: "nimadir2"
}

// jsda ko'plab datatypelar avtomatik ravishda convertatsiya bo'ladi
// masalan alert() ning ichiga yozildan ma'lumotlar

// takrorlanmaydigan key  faqat buni qiymatini olish va foydalanish mumkin bo'ladi
// va Symbol.keyFor bilan uni o'qish mumkin bo'ladi

let id2 = Symbol.for("name");
let id3 = Symbol.for("name")

console.log(id2 == id3);
console.log(Symbol.keyFor(id2));

console.log(obj['id']);

// object to primitive 
// ya'ni objectni primitive typega o'tkazish buning sababi 
// jsda hamma narsalar objrctdan tashkel topganini bilish va 
// objectlarni oddiy primitive data typelarga o'xshab ishlatish

//  bu yerda kodga qiymatni tanlab oladi

let user = {
    name: "John",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// conversions demo:
// console.log(user); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500

// yana boshqacharoq usulari ham bor
let user4 = {
    name: "John",
    money: 1000,

    // for hint="string"
    toString() {
        return `{name: "${this.name}"}`;
    },

    // // for hint="number" or "default"
    valueOf() {
        return this.money;
    }

};

console.log(user4); // toString -> {name: "John"}
console.log(+user4); // valueOf -> 1000
console.log(typeof(+user4 + 500)); // valueOf -> 1500