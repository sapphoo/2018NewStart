for(var i = 0; i < 5; i++){
    console.log(i);
}

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000 * i);
}

for (var i = 0; i < 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 1000 * i);
    })(i);
}

for (var i = 0; i < 5; i++) {
    (function () {
        setTimeout(function () {
            console.log(i);
        }, 1000 * i);
    })(i);
}


for (var i = 0; i < 5; i++) {
    setTimeout((function (i) {
        console.log(i);
    })(i), 1000 * i);
}