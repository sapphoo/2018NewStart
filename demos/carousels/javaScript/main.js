window.onload = function() {
    var carousels = document.getElementById("carousels_div");

    var opt_btns = document.getElementsByClassName("operate_button");
    var left_btn = document.getElementById('left_button');
    var right_btn = document.getElementById('right_button');

    var dot_ul = document.getElementById('dot_list');
    var dot_li = document.getElementsByTagName('li');

    dot_li[0].style.backgroundColor = "red";

    var current_index = 0;
    var ul_len = dot_li.length;

    var timer = setInterval(loop, 2000);

    function loop() {
        current_index++;
        changeCarousel();
    }

    function changeCarousel() {
        if (current_index >= ul_len) {
            current_index = 0;
        }

        for (var i = 0; i < ul_len; i++) {
            dot_li[i].style.backgroundColor = "#fff";
        }

        carousels.style.backgroundImage = "url(C:/Users/Wu/Pictures/img/" + current_index + ".jpg)";
        dot_li[current_index].style.backgroundColor = "red";
    }

    carousels.addEventListener("mouseover", stopInterval, false);

    function stopInterval() {
        clearInterval(timer);
        left_btn.style.display = "block";
        right_btn.style.display = "block";
    }

    carousels.addEventListener("mouseout", startInterval, false);

    function startInterval() {
        timer = setInterval(loop, 2000);
        left_btn.style.display = "none";
        right_btn.style.display = "none";
    }

    left_btn.addEventListener("click", carouselLeft, false);

    function carouselLeft() {
        current_index--;
        changeCarousel();
    }

    right_btn.addEventListener("click", carouselRight, false);

    function carouselRight() {
        current_index++;
        changeCarousel();
    }

    for (var j = 0; j < ul_len; j++) {
        (function() {
            var k = j;
            dot_li[k].onmouseover = function() {
                current_index = k;
                console.log(k);
                changeCarousel();
            }
        })();
        // dot_li[i].onmouseover = function() {
        //     current_index = parseInt(this.innerHTML) - 1;
        //     changeCarousel();
        // };
    }

};