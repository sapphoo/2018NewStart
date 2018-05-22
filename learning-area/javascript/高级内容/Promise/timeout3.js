// 假如在.then()的函数里面不返回新的Promise，会怎样？
new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 2000)
})
    .then(value => {
        console.log(value + ' world');
        (function(){
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('world');
                }, 2000)
            });
        }());
        return false;
    })
        .then(value => {
            console.log(value + ' world');
        })