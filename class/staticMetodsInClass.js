// static methodlar faqatgina shu classning o'zida ishlaydi meros olingan obyektlarda ishlamaydi
class Birds {
    constructor(name){
        this.name = name
    }

    static fly(){
        return "true "+this.name
    }
    // fly(){
    //     return "true"+this.name
    // }
}

// let qarga = new Birds("qarga")
// console.log(Birds.fly()); 
// console.log(qarga.fly()); 


class newBird extends Birds {
    static feil(){
        return "feil project"
    }
}
// demak static methodlar faqatgina classlarning o'zidagina ishlaydi 
console.log(newBird.feil());
console.log(newBird.fly());

