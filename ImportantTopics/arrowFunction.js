// arrow function 
// high order function 
// closure

const obj = {
    name: "lorem",
    talk: function () {
        return this
    },
    arrowTalk: () => {
        return () => {
            return this
        }
    }
}

console.log(obj.arrowTalk()());
console.log(obj.talk());

const obj2 = {
    name: "lorem",
    talk() {
        // return () => { => objectning o'ziga teng bo'lado
        //     return this
        // }
        return function () {
            return this // => global objectga teng 
            // xuddi bu function tashqarida yozilgani bilan bir xil
        }
    }
}

console.log(obj2.talk()());


// closure
// function o'zidan yuqoridagi variablelarga kirishiga aytiladi

var a = 10;

function foo() {
    console.log(a);
};

function bar() {
    var a = 20;
    foo();
};
bar();

function outer() {
    let id = 1;
    return function inner() {
        console.log(id++);
    }
};
const innerFunc = outer();
innerFunc();

const a = 10;
const arr = [12,32]

inctance(a)

function inctance(a) {
    a = 12
    arr.push(a)
}

console.log(a);
console.log(arr);


