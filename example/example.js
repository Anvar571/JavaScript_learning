// foydalanuvchi prompt orqali ma'lumot kiriradi shu malumotlarni obyektga yozish
function myAlertFunc() {
    let fruit = {};
    for (let i=0; i<4; i++){
        let key = prompt("meva nomi", "olma");
        let value = prompt("meva narxi", 0);
        fruit[key] = value
    }
    console.log(fruit);
}

myAlertFunc();

// ichma ich obyetlarning ichidan ma'lumot o'qish
// eng oxirgisini yoki oxirgisidan bitta oldingisini o'qish 
let obj1 = {
    name: "anvar",
    age: 22,
    child: {
        name: "asad",
        age: 22,
        child: {
            car: "neva",
            color: "red",
            child: {
                name: "sariq",
                age: 34
            }
        }
    }
}

for (let key in obj1) {
    if (key === 'child'){
        for (let key1 in key) {
            console.log(key1);
        }
    }else{
        console.log(key);
    }
}

