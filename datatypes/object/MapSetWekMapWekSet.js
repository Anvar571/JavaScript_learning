// bular nima uchun kerak kiyinroq bilib olamiz
// biz hozirgacha object arraylarni o'rgandik va bular bizga yetarli emas sababi

// Map dan foydalanish
// new Map() create qilish
// get(key) ichidan qiymat olish
// set(key, value) qiymat biriktirish
// has() borligini tekshirish, clear() hammasini o'chirib tashlash
// delete(key) delete key
// misol uchun
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get('1')); // 'str1'
console.log(map.get(true));

console.log(map.size); // 3

// mapga key sifatida object ham biriktirish mumkin
let john = { name: "John" };
let ben = { name: "Ben" };

let visitsCountObj = {}; // try to use an object

visitsCountObj[ben] = 234; // try to use ben object as the key
visitsCountObj[john] = 123; // try to use john object as the key, ben object will get replaced

// That's what got written!
console.log(visitsCountObj["[object Object]"]); // 123

// bit nechta qiymat birdan biriktirish
let map1 = new Map();
// set Map() functionni o'zini qaytaradi
map1.set("1", "salom").set("2", "salom 2")

// qiymatlar ustida iterable qilish
// buning uchun
// map.keys()– kalitlar uchun iteratsiyani qaytaradi,
// map.values()– qiymatlar uchun iteratsiyani qaytaradi,
// map.entries() - 
// misol uchun
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion', 50]
]);

// iterate over keys (vegetables)
for (let vegetable of recipeMap.keys()) {
    console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) { // the same as of recipeMap.entries()
    console.log(entry); // cucumber,500 (and so on)
}

// oddiy objectni Mapga aylantirish
let obj = {
    name: "John",
    age: 30
};

let map2 = new Map(Object.entries(obj));

console.log(map2.get('name')); // John


// Set bu faqatgina bitta qiymat oladi key olmaydi 
// bu ichida takrorlanmaydigan qiylatlarni saqlaydi
let set = new Set();

let john1 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john1);
set.add(pete);
set.add(mary);
set.add(john1);
set.add(mary);

// set keeps only unique values
alert(set.size); // 3

for (let user of set) {
    alert(user.name); // John (then Pete and Mary)
}


function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        // split the word by letters, sort them and join back
        let sorted = word.toLowerCase().split('').sort().join(''); // (*)
        map.set(sorted, word);
    }

    return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert(aclean(arr));

// map va wekMap o'rtasidagi farq wekMap keylar o'rniga objtlar oladi map esa hamma narsani
// misol 
let weakMap = new WeakMap();
let nobj = {
    name: "nimadir",
    title: "12345"
}
weakMap.set(nobj, "...")
console.log(weakMap.get(nobj));

// agar nobj bilan boshqa ulanishlar bo'lmasa u garbage collectiondan o'chiriladi ya'ni xotiradan
// weakMapda keys(), values(), entries() bular ishlamaydi faqatgina 
// set(), get(), has(), delete() shular ishlaydi

