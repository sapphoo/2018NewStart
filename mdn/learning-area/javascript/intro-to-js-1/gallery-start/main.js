var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* Looping through images */
var i;
for (i = 1; i <= 5; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + i + ".jpg");
    thumbBar.appendChild(newImage);
}

document.getElementsByClassName("thumb-bar")[0].addEventListener("click", function(e) {
    if (e.target) {
        displayedImage.setAttribute("src", e.target.getAttribute("src"));
    }
});


/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", function(e) {
    if (e.target) {
        if (overlay.style.backgroundColor === "rgba(1, 1, 1, 0.2)") {
            overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
            btn.textContent = "Darken";
        } else {
            overlay.style.backgroundColor = "rgba(1, 1, 1, 0.2)";
            btn.textContent = "Light";
        }
    }
});