var btn = document.querySelector('button');
var videoBox = document.querySelector('div');
var video = document.querySelector('video');

btn.onclick = function () {
    videoBox.setAttribute('class', 'showing');
}

videoBox.onclick = function () {
    videoBox.setAttribute('class', 'hidden');
};

video.onclick = function (e) {
    e.stopPropagation();
    video.play();
};

document.getElementById("parent-list").addEventListener("click", function(e){
    if(e.target && e.target.nodeName === "LI"){
        console.log('test');
    }
});

document.getElementById("test").addEventListener("click", function(e){
    if(e.target && e.target.matches("a")){
        console.log('test');
    }
});