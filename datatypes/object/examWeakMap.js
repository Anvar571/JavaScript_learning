// text o'qilgan yoki o'qilmaganini aniqlash
let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];

// let readMessage = new WeakSet();
// readMessage.add(messages[0])
// readMessage.add(messages[1])

// // tekshiramiz qaysi message read bo'lganini
// console.log(`Read message ${readMessage.has(messages[1])}`);
// messages.shift() 

// endi manashu xabarning qachon o'qilganini aniqlash kerak
let readMap = new WeakMap();
readMap.set(messages[0], new Date(2023, 01, 11))
console.log(readMap.get(messages[0]));