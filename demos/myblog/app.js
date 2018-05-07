var express = require('express'),
    http = require('http'),
    path = require('path');

var app = express()

app.set('port', process.env.PORT || 3000);
app.set('views', './blog_views/pages')
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public'))); /*设置静态资源文件路径*/
//app.listen(port)

http.createServer(app).listen(app.get('port'), function() {
    console.log("Express server listening on port " + app.get('port'));
});

//index page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'myblog index'
    })
})

//detail page
app.get('/detail/:id', function(req, res) {
    res.render('detail', {
        title: 'myblog detail'
    })
})

//admin page
app.get('/admin/blog', function(req, res) {
    res.render('admin', {
        title: 'myblog admin page'
    })
})

//list page
app.get('/list', function(req, res) {
    res.render('list', {
        title: 'myblog list'
    })
})