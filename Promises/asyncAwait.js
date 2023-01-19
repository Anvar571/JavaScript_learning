// async and await
// async function promise qaytaradi shundga qarab ishlash kerak
// async function bu promiselar bilan ishlashni osonlashtiradi
// masalan 
async function promise() {
    return 1
}

promise().then(res => console.log(res))

// biz buning o'rniga Promise qaytarishimiz ham mumkin
async function promise1() {
    return Promise.resolve({
        name: "lorem",
        title: "yuri"
    })
}

promise1().then(res => console.log(res))

// endi ketma ket functionlar bo'lsa ularni navbat bilan ishlatish uchun await kalit so'zidan foydalanamiz

async function foo() {
    let promise = new Promise((res, rej) => {
        setTimeout(() => res("lorem"), 2000)
    })
    console.log("salom 1");
    let res = await promise
    console.log("salom 2");

    console.log(res);
}
foo()

async function foo() {
    let promise = new Promise((res, rej) => {
        // bu yerda faqatgina birinchi qiymat inobatga olinadi
        // setTimeout(() => res("lorem"), 2000)
        // setTimeout(() => res("salom 1"), 1000)
        setTimeout(() => res("salom 2"), 1000)

    }).then(() => console.log("salom 1"))
        .then(() => console.log("salom 2"))
        .then(() => console.log("salom 3"))
    // console.log("salom 1");

    // await faqatgina async bilan ishlatiladi
    let res = await promise
    // console.log("salom 2");

    console.log(res);
}
foo()

// github api bilan ishlash
async function apiWorking(userNameInGithub) {
    try {
        let githubData = await fetch(`https://api.github.com/users/${userNameInGithub}`, {
            method: "GET"
        })
        let res = await githubData.json()
        console.log(res +" res ");

        return res
    } catch (error) {
        console.log(error.message);
    }
}

apiWorking("anvar571").then(res => console.log(res))

// classlarda ham buni ishlatish mumkin bo'ladi
class Infrastructura {
    static async docer() {
        return "docer container"
    }
}

Infrastructura.docer().then(res => console.log(res))
