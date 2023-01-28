// jsni o'zida modullardan faqatgina browserda ishlaydi 
// nodejs orqali terminalda ishlatishimiz mumkin bo'ladi
// import {foo1, User, months} from "./index.js"
// import foo2 from "./index.js"
// barchasi birdaniga olsak ham bo'ladi

import {months} from "./index.js";

// // 📁 main.js
// import {foo1 as f1, foo2 as f2} from './say.js';

console.log(months);
// console.log(months);
// console.log(foo1());