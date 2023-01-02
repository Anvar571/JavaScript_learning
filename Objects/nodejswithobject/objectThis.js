process.stdin.resume();
process.stdin.setEncoding('utf8');

let lingeringLine = "";
let lines = "";

process.stdin.on('data', function(chunk) {
    lines = chunk.split("\n");

    lines[0] = lingeringLine + lines[0];
    lingeringLine = lines.pop();

});

console.log(lingeringLine, lines);

// =========================================
// nodejsda promt-sync library orqali
// const promptNode = require("prompt-sync")();

// const input = promptNode("Ismingizni kiriting: ");

// console.log(`Assalomu alaykum ${input}`);

// ===========================================
// endi esa vanilla nodejs orqali
// bu kutubxona user bilan aloqa qolish uchun yordam beradi yani qatorlarni o'zishga yordam beradi
const readline = require("readline");
// user bilan aloqa uchun kanal
const user = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
// bu esa user.question ikkita parametr qabul qiladi
// birinchisi savol berish uchun ishlatiladi ikkinchisi kiritilgan qiymat ustida amal bajarish uchun ishlatiladi


// user.question("What is your name? ", function (answer) {
//     console.log(`Oh, so your name is ${answer}`);
//     user.close()
// });

// yuqoridagini boshqacha usuli
// user.setPrompt("What is your name ?")
// user.prompt()
// // bu oziri ishlaydi
// user.on("pause", () => {
//     console.log(("process poused"));
// })
// user.on('line', (value) => {
//     console.log(`Assalomu Alaykum ${value}`);
//     user.close()
// })

// user.on("resume", () => {
//     console.log("nimadir");
// })