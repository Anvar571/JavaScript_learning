const compiler = require('./compiler');
let input = '(add 2 (sub 4 3))';

// input =  `
//     function too(a, b) {
//         qaytar a + b
//     }

//     chiqar(too(3, 5))

// `

const output = compiler(input);
console.log(output);