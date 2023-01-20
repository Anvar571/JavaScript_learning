class Glass {
    constructor(glassId, level) {
        this.GlassId = glassId;
        this.fillLevel = level;
    }
}

function fillGlass(pourtime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let level = Math.random();
            if (level >= 0.7) {
                resolve(Math.round(level * 100));
            } else {
                reject('failed!');
            }
        }, pourtime);
    });
}

function serveGlass(curGlass, result) {
    console.log(`That's a good pour! Glass ${curGlass.GlassId} is ${result}% full. Drink up.`);
}

function returnGlass(curGlass, errorMsg) {
    console.log(`That's a bad pour. Glass ${curGlass.GlassId} ${errorMsg} Try again.`);
}

function pour(ordered, pourtime) {
    let attempted = 1;
    while (attempted <= ordered) {
        let curGlass = new Glass(attempted);
        fillGlass(pourtime).then(result => serveGlass(curGlass, result), errorMsg => returnGlass(curGlass, errorMsg));
        attempted++;
    }
}

pour(10, 500);

// ==============================================
const promise1a = new Promise(resolve => {
    console.log('Inside the promise1a executor code');
    setTimeout(() => resolve('Value from promise1a resolve method'), 2000);
});

console.log('After the promise1a constructor');
console.log(promise1a);
promise1a.then(resolveValue => console.log(resolveValue));
console.log('After promise1a.then is called');
console.log(promise1a);


// ===================================
function wait(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
        now = Date.now();
    }
}
const promise1 = new Promise(resolve => {
    console.log('Inside the promise1 executor code');
    wait(2000);
    resolve('Value from the promise1 resolve method');

});
console.log(promise1);
console.log('After the promise1 constructor');
promise1.then(resolveValue => console.log(resolveValue));
console.log('After promise1.then is called and fulfilled');