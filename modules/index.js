// void function(num) {
//     console.log(num * num)
// }(5)

// export an array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export a constant
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}

function foo1(){
    console.log("salom")
}

function foo2(){
    console.log("salom 2")
}

export {foo1} // {} shunday export qilgan bo'lsak {} shunday import qilamiz
export default foo2 // o'zini qilmoqchi bo'lsak default keyword bo'lishi kerak
