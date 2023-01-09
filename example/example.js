// foydalanuvchi prompt orqali ma'lumot kiriradi shu malumotlarni obyektga yozish
function myAlertFunc() {
    let fruit = {};
    for (let i = 0; i < 4; i++) {
        let key = prompt("meva nomi", "olma");
        let value = prompt("meva narxi", 0);
        fruit[key] = value
    }
    console.log(fruit);
}

// myAlertFunc();

// ichma ich obyetlarning ichidan ma'lumot o'qish
// eng oxirgisini yoki oxirgisidan bitta oldingisini o'qish 
// obj1 ichidagi  agelarning yig'indisini topish
let obj1 = {
    name: "anvar",
    age: 22,
    child: {
        name: "asad",
        age: 22,
        child: {
            car: "neva",
            age: 12,
            child: {
                name: "sariq",
                age: 34
            }
        }
    }
}
let sum = 0;
while (obj1) {
    sum += obj1.age
    obj1 = obj1.child
}
console.log(sum);

