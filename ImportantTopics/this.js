// this bu => yangi obyectga ishora qiladi
// this bu => xuddi ichama ich prototypega o'xshaydi 
// u ham obyet qaytaradi va biz thisga boshqa obyektni biriktirishimiz mumkin bo'ladi
// bu vaziyatga qarab bo'ladi 
// this browzerda hechnarsaga biriktirilmagan holatda windowga teng bo'ladi
// nodejsda esa global objectga teng bo'ladi
// call, bind, apply bularning hammasi function bilan obyektlarni bog'lash uchun ishaltiladi

// this scopelar bilan farqlanadi 
// masalan masalan obj scopeda usha objektga ishora qiladi
// functionda esa global object qaytaradi nodejsda ishora qiladi

function boo() {
    console.log(this.performance.nodeTiming.name); // return node 
}
boo()
// obyectalarda esa usha obyectning o'ziga ishora qiladi
const referenceObj = {
    name: "lorem",
    description: "bla bla",
    getData() {
        return `Full data ${this.name} ${this.description}`
    }
}
console.log(referenceObj.getData());
// console.log(this);// return {}

// bu vaziyatda function ichida this yo'qolib qoladi
// bu yuqoridagi qoida bu yerda ishlamaydi
// bu muammoning bir qancha usullari bor 
const Person = {
    firstName: "Lawrence",
    lastName: "Eagles",
    sayName: function () {
        setTimeout(function () {
            console.log("my fullname is " + this.firstName + " " + this.lastName)
        }, 100)
    }
}
Person.sayName()
console.log(Person.sayName())

// endi ularni ko'rib chiqamiz
// bu vaqtda xuddi function tashqarida e'lon qilinganga o'xshaydi
const Person1 = {
    firstName: "Lawrence",
    lastName: "Eagles",
    sayName: function () {
        let newThis = this
        console.log(newThis);
        setTimeout(function () {
            console.log("my fullname is " + newThis.firstName + " " + newThis.lastName)
        }, 100)
    }
}
Person1.sayName()
console.log(Person1.sayName())

// arrow functionlardan foydalanish
const Person2 = {
    firstName: "Lawrence",
    lastName: "Eagles",
    sayName: function () {
        setTimeout(() => {
            console.log("my fullname is " + this.firstName + " " +
                this.lastName), 100
        })
    },
    talk() {
        setTimeout(() => {
            console.log(`my fullname is ${this.firstName} ${this.lastName}`)
        })
    }
}

console.log(Person2.sayName())
console.log(Person2.talk())

// uchunchi usuli call, bind, apply
const Person3 = {
    name: "lorem",
    description: "lorem ipsum",
    referenceObj() {
        console.log(this.name);
        function oneMoreMethod() {
            return `Full Data nested obj method ${this.name} ${this.description}`
        }
        console.log(oneMoreMethod.call(this))
    }
}

// function referenceObj(){
//     return `Full Data ${this.name} ${this.description}`
// }

console.log(Person3.referenceObj());

const Person6 = {
    firstName: "Lawrence",
    lastName: "Eagles",
    sayName: function () {
        setTimeout(function () {
            console.log("my fullname is " + this.firstName + " " + this.lastName)
        }.bind(this), 100) // binds this here.
    }
}
console.log(Person6.sayName());

// sizga misol
const Person5 = {
    firstName: "Lawrence",
    lastName: "Eagles",
    sayName: function () {
        function nested() {
            function nested1() {
                function nested2() {
                    function nested3() {
                        return `my fullname is  ${this.firstName} ${this.lastName}`
                    }
                    return nested3.bind(this)
                }
                return nested2.bind(this)
            }
            return nested1.bind(this)
        }
        return nested.bind(this)
    }
}
let res = Person5.sayName()()()()()
console.log(res);

// constructor functionlarda va class larda this bilan ishlash
// bular new kalit so'zi bilan chaqiriladi new kalit so'zi esa this degan object yaratadi
function Preson(name, age){
    // let this = {};
    // lekin bu ichki xususiyat hisobanadi buni new kalit so'zi bajaradi
    this.name = name;
    this.age = age
    // return this
}

class Logger {
    // ichki functionlrani hammasini bind qilib chiqish kerak bo'ladi this bilan
    // ya'ni obyetga ishora qillib qo'yish kerak bo'ladi
    constructor(){
        this.printName = this.printName.bind(this)
    }

    printName(name = 'Lawrence Eagles') {
        this.print(`Hello ${name}`);
    }

    print(text) {
        console.log(text);
    }
}

const logger = new Logger();
const { printName } = logger;

printName(); 