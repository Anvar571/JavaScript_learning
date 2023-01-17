// arrow function functionning qisqa yozilishi va ko'plab qulayliklari bor 
// arrow functionda this yuq 

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],

    showList() {
        this.students.forEach(
            student => {
                console.log(this.title + ': ' + student)
            }
        );
    }
};

group.showList();


function defer(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}

function sayHi(who) {
    console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // Hello, John after 2 seconds