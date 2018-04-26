//分两次顺序执行
new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 2000)
}).then(value => {
    console.log(value + ' world');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('world');
        }, 2000)
    }).then(value => {
        console.log(value + ' world');
    })
})