var app = angular.module('l_view_app', []);

app.directive('lmap', function () {
    return {
        templateUrl: './html/lCanves.html',
        replace: true,
        restrict: 'E'
    };
});
app.directive('beauty', function () {
    return {
        restrict: 'A',
        link: function (scope, ele, attr) {
            $("head").append("<link type='text/css' rel='stylesheet' href='" + baseUrl() + "/html/lCanves.css'>");
        }
    };
});
documen

function baseUrl() {
    var scripts = document.getElementsByTagName('script');

    //获取script中src的路径
    var search = scripts[scripts.length - 1].src;
    search = search.split('lView')[0];
    return search; //获取绝对地址

}
