console.log('Ready?Go!');
new Promise( resolve => {
    setTimeout( () => {
        resolve('hello');
    }, 2000);
}).then( value => {
    console.log(value + ' world');
});