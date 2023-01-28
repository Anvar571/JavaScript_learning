// __proto__ and prototype
const dude = {
    kind: "Human",
    splice1(){
        return "splice"
    }
}

const boo = Object.create(dude);

console.log(boo.splice1());
console.log(boo.kind);

// prototype chainning
const foo = Object.create(boo);
console.log(foo.kind);
console.log(foo.splice1());
foo.kind = "new kind";
console.log(foo.kind);
// birinchi o'zinikidan qidiradi kiyin prototypedan qidiradi
console.log(boo.kind);
console.log(foo);

// __proto__ bu meros qilib olinga Objectga ishora qiladi
// prototype esa har bir constructor functionning methodlari