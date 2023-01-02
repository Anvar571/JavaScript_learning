// obyektlarni nusxalashda nusxalangan variablega obj reference beriladi ya'ni manzili
// primitive variablelarda esa qiymarining chunday o'zi copy qilinadi

let user = "anvar";
let user1 = user;
console.log(user, user1);
user = "samad";
console.log(user, user1);

let obj = {
    name: "anvar",
}
let obj2 = obj;
console.log(obj, obj2);
obj.name = "samad";
console.log(obj, obj2);

// buning sababi xuddi karobkaga o'xshatsak bo'ladi primitive data typelarda karobka bilan copy bo'lad
// non-primitiveda esa karobka ichidagi qiymat copy bo'ladi shuning uchun shunaqa bo'layabdi

// solishtirish
let bob = {};
let foo = bob
console.log(bob === foo);
console.log(bob == foo);

let bob1 = {}
let foo1 = {}
console.log(bob1 == foo1);
console.log(bob1 === foo1);// bular teng emas chunki bularning har biri uchun alohida manzili bor

const user4 = {
    name: "samad"
}

console.log(user4);
user4.name = "anvar"
console.log(user4);


// Clonlash
let obj5 = {
    name: "sardor",
    age: 12
}

let cloneObj = {}

for (let key in obj5) {
    cloneObj[key] = obj5[key]
}

console.log(cloneObj);

cloneObj.name = "anvar"
console.log(cloneObj);
console.log(obj5);

let user6 = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user6);

console.log(user6.sizes === clone.sizes); // true, same object

// user and clone share sizes
user6.sizes.width = 60;    // change a property from one place
console.log(clone.sizes.width); 

// ichma ich clonelash
let obj12 = {
    name: "anvar",
    star: 5,
    another: {
        blog:"https://nimadir.com",
        site: "https://www.com"
    }
}

let clone1 = structuredClone(obj12)
clone1.name = "bobur"
console.log(clone1);
console.log(obj12);
