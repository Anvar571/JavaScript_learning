// recursion functionlar bu o'z-o'zini chaqiradigan functionlarga aytiladi
// misol uchun pow() functionni olaylik aslida bu ham recursion function hisoblanadi
function pow(x, n) {
    let res = 1;
    for (let i = 1; i <= n; i++) {
        res *= x
    }
    return res
}

console.log(pow(2, 3));
// endi buni recursion function bilan yozib ko'ramiz
function pow1(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow1(x, n - 1);
    }
}
console.log(pow1(2, 3));

// yana bir misol misol uchun ichma-ich obyektlarda biror ma'lumotlarni hisoblash kerak bo'ladigan bo'lsa
// aynan shu holatlarda recursion function yordam beradi
let company = { // the same object, compressed for brevity
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 1600 }],
    development: {
        sites: [
            { name: 'Peter', salary: 2000 },
            { name: 'Alex', salary: 1800 }
        ],
        internals: [
            { name: 'Jack', salary: 1300 }
        ]
    },
    fakultet: [
        {
            name: "nimadie",
            salary: 1000
        }
    ]
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, curr) => prev + curr.salary, 0)
    } else {
        let sum = 0;
        for (let val of Object.values(department)) {
            sum += sumSalaries(val)
        }
        return sum
    }
}

console.log(sumSalaries(company)); // 7700

let development = {
    sites: [
        { name: 'Peter', salary: 2000 },
        { name: 'Alex', salary: 1800 }
    ],
    internals: [
        { name: 'Jack', salary: 1300 }
    ]
}

let sum = 0;
for (let key of Object.values(development)) {
    for (let val in key) {
        sum += key[val].salary
    }
}
console.log(sum);

// ixtiory sonning 1 dan shu songacha sonlarni yigindisini topish with recursion function
function sumToAnyNumber(n) {
    if (n === 1){
        return 1
    }
    return n + sumToAnyNumber(n - 1) 
}

console.log(sumToAnyNumber(100));

function foo(a){
    let s=0;
    return s+= a+1
}
console.log(foo(5));