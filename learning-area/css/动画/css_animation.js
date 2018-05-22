window.onload = function() {
    var ball_div = $("#moving_ball");
    document.addEventListener("click", function(e) {
        ball_div.css({ left: (e.clientX - 20) + "px" });
        ball_div.css({ top: (e.clientY - 20) + "px" });
    }, false);
}