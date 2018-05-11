$(function(){
    //定时器，自动轮播
    var timer = setInterval(loop, 2000);
    var carousel_index = 0;
    var ul_len = $("li").length;
    function loop(){
        carousel_index++;
        if(carousel_index === ul_len) carousel_index = 0;
        $("#pic_div").animate({left:-1024*carousel_index}, 300);
        $("li").eq(carousel_index).css("background-color", "red")
                .siblings().css("background-color", "rgba(255,255,255,1)");
    }

    //鼠标移入停止轮播，移出继续
    $("#carousels_div").hover(function(){
        clearInterval(timer);
        $("#left_button").show();
        $("#right_button").show();
    },function(){
        timer = setInterval(loop, 2000);
        $("#left_button").hide();
        $("#right_button").hide();
    });

    //左右按钮控制轮播
    $("#left_button").click(function(){
        carousel_index--;
        if(carousel_index === -1) carousel_index = ul_len - 1;
        $("#pic_div").animate({left: -1024*carousel_index},300);
        $("li").eq(carousel_index).css("background-color", "red")
                .siblings().css("background-color", "rgba(255,255,255,1)");
    })

    $("#right_button").click(function(){
        carousel_index++;
        if(carousel_index === ul_len) carousel_index = 0;        
        $("#pic_div").animate({left: -1024*carousel_index},300);
        $("li").eq(carousel_index).css("background-color", "red")
                .siblings().css("background-color", "rgba(255,255,255,1)");
    })

    //小圆点控制轮播
    $("li").mouseover(function(){
        carousel_index = $(this).index();
        $("#pic_div").animate({left: -1024*carousel_index},300);
        $(this).css("background-color", "red")
                .siblings().css("background-color", "rgba(255,255,255,1)");
    })
})