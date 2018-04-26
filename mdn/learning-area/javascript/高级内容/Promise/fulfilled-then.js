// 假如一个Promise已经完成了，再.then()会怎样？
console.log('fufilled then');

let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('the promise is fulfilled');
        resolve('hello world');
    }, 1000)
});

setTimeout(() => {
    promise.then(value => {
        console.log(value);
    })
}, 3000);

//promise队列会按照固定顺序执行，而不去管promise的状态