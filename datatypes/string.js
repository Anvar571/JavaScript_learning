// string ustida qanaqadir amallarni bajarish uchun jsda string uchun tayyor methodlar bor

let str1 = `Guests:
 * John
 * Pete
 * Mary
`;

console.log(str1);

// string methods ===========
let str2 = "Bugun yangilik bo'ldi o'qish \t uzayririldi";
// bular ham hisoblanadi \t \n ...

// console.log(str2.length);

// console.log(str2.charAt(1));
// console.log(str2[1]);

// last charachter
// console.log(str2[str2.length - 1]);
// console.log(str2.at(-1));

// endi bularning farqi 
// str[-2] biror son uchun undefined qaytaradi
// str.at(-2) o'sha harfni chiqaradi

// for of dan ham foydalansak bo'ladi stringni har bir harfi ustida amal bajarish uchun
for (let char of "Hello") {
    console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}

// jsda stringni o'zgartirib bo'lmaydi
let str3 = "Salom";
str3[2] = "m"
console.log(str3);
// lekin buning ilojini qilsak bo'ladi
// for (let char of str3){
//     console.log(char);
// }
// console.log(); 
// result Salom => Snlom

let str4 = 'salom hammaga'

console.log(str4[str4.indexOf("lom")]);

let str5 = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
    let foundPos = str5.indexOf(target, pos);
    if (foundPos == -1) break;

    console.log(`Found at ${foundPos}`);
    pos = foundPos + 1; // continue the search from the next position
}
// qisqaroq ko'rinishi
let str6 = "As sly as a fox, as strong as an ox";
let target1 = "as";

let pos1 = -1;
while ((pos1 = str6.indexOf(target1, pos1 + 1)) != -1) {
  console.log( pos1 );
}

// yana boshqacha yo'li ham bor includes()
console.log( "Widget with id".includes("Widget") ); // true

// localCompare stringlarni taqqoslash
let taq1 = "anvar"
let taq2 = new String("anvare");
console.log(taq1.localeCompare(taq2)); // bu uchta qiymat qaytaradi -1, 0, 1
// 0 bir biriga teng, 1 ichida bor, -1 o'zidan uzun so'zlar uchun