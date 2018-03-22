var verseChoose = document.querySelector('select');
var poemDisplay = document.querySelector('pre');

verseChoose.onchange = function(){
    var verse = verseChoose.value;
    updateDisplay(verse);

};

function updateDisplay(verse){
    verse = verse.replace(" ", "").toLowerCase();
    var url = "http://localhost:8000/2018NewStart\\mdn\\learning-area\\javascript\\client API\\Fetching Data\\Ajax\\text\\" + verse + ".txt";
    // var request = new XMLHttpRequest();
    // request.open("GET", url);
    // request.responseType = "text";
    // request.onload = function(){
    //     poemDisplay.textContent = request.response;
    // }

    // request.send();
    fetch(url).then(function(response){
        response.text().then(function(text){
            poemDisplay.textContent = text;
        });
    });
}

updateDisplay("Verse 1");
verseChoose.value = "Verse 1";

