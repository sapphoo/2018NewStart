window.onload = function(){
    var randomizeButton = document.querySelector('.randomize');
    var customName = document.getElementById('customname');
    var story = document.querySelector('.story');
    randomizeButton.addEventListener('click', randomize);

    function randomize(){
        var name = Number(customName.value);

    }
}