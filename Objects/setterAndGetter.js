// objectlarni ustida amallar bajarishni cheklash
let obj1 = {
    name: "blablabla",
    age: 21,
}
Object.defineProperty(obj1, "name", {
    writable: false, // o'zgartirib bo'lmaydi,
    enumerable: false, // iteratsiyada ko'rinmaydi
    configurable: false // o'chirib bo'lmaydi
})
// endi bularni bitta qilib yozish mumkin
let obj2 = {
    name: "anvar",
    age: 21
}
Object.freeze(obj2) // hech bir propertyni o'zgartirib bo'lmaydi
obj2.name = "bobur"
console.log(obj2);

// endi getter va setterlarni ko'rib chiqamiz

// bizda object bor va shu objectga function yozib uni oddiy propertyga o'xshatib chaqirsak bo'ladi 
// buning uchun bizga getter va setter kerak bo'ladi
let obj3 = {
    firstname: "Anvar",
    lastname: "abdurashidov",
    get fullName(){
        return `${this.firstname} ${this.lastname}`
    },
    set fullName(value){
        // keladigan ma'lumotlarni olish
        [this.firstname, this.lastname] = value.split(' ');
    }
}
console.log(obj3.fullName);
obj3.fullName = "bobur hamdam"
console.log(obj3.fullName);
console.log(obj3.firstname); // bobur

// agar bizda get va setga beriladigan name bir xil bo'lib qolsa obj nomini _name bilan yozsak bo'ladi
let obj4 = {
    get name(){
        return `${this.name}`
    },
    set name(val){
        this._name = val
    }
}

obj4.name = "anvar";
console.log(obj4._name); // foydalanish mumkin