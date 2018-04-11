
# 模块

## url
### url.parse()
将url解析成对象
### url.format()
将对象解析成url
### url.resolve()
将两个部分解析成一个url

## Query String
### querystring.escape() querystring.unescape()
一般字符串与url字符串相互转换
### querystring.parse()  querystring.stringify()
将字符串和对象相互转换

# HTTP
## 页面从请求到渲染的过程
- 域名解析
    1. 浏览器搜索自身的DNS缓存（chrome://net-internals/#dns）
    2. 搜索操作系统自身的DNS缓存（浏览器没有找到缓存或缓存已经失效）
    3. 读取本地的HOST文件
    4. 浏览器发起一个DNS的一个系统调用
        - 宽带运营商服务器查看本身缓存
        - 运营商服务器发起一个迭代DNS解析请求
- 通信
    
    5. 浏览器获得域名对应的ip地址后，发起三次握手
    6. TCP/IP连接建立起来后，浏览器就可以向服务器发送HTTP请求了。eg：使用HTTP的GET方法请求一个根域里的域名，采用HTTP1.0协议。
    7. 服务器端接收到了请求，根据路径参数，经过后端处理之后，把结果数据返回给浏览器。
- 浏览器解析渲染
    
    8. 浏览器拿到了完整的HTML页面代码，在解析和渲染这个页面的过程中，里面的JS、css、图片静态资源同样也是一个个HTTP请求，都需要经过上述7个步骤
    9. 浏览器渲染页面，呈现给用户

## 


