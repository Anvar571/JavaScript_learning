// edigi muammo bizda bir xil xususiyatga ega obyektlarni qayta qayta create qilishdir 
// lekin jsda buning yechimi bor Constructor function orqali

// buni shablon desak ham bo'ladi
function User1(name, age) {
    this.name = name,
        this.age = age
}

let user1 = new User1("anvar", 21);
let user2 = new User1("bobur", 24);
let user3 = new User1("samad", 22);


// agar user new kalit so'zisiz chaqiradigan bo'lsa uni o'zimiz qo'yib ketsak bo'ladi

function User(name) {
    if (!new.target) { // if you run me without new
        return new User(name); // ...I will add new for you
    }

    this.name = name;
}

let john = User("John"); // redirects call to new User
console.log(john.name); // John