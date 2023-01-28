// bu yerdagi kodlarni
// lexicalEnvaronmnetga o'girish kerak bo'aladi 
// misollar
// shunqa compiler yasash kerak js codini lexicalEnvga o'girib beradigan
var a = 10;

function foo() {
    console.log(a);
};
function bar() {
    var a = 20;
    foo();
};
bar(); // will print "10"


function outer() {
    let id = 1;
    return function inner() {
        console.log(id);
    }
};
const innerFunc = outer();
innerFunc(); // prints 1; 