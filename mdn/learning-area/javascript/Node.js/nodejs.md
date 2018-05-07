
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

## 状态码
### 1XX 指示信息，表示请求已经接收成功，正在处理
### 2XX 成功
200 OK  
### 3XX 重定向
### 4XX 客户端错误
<table>
    <tr>
        <td>错误码</td>
        <td>描述</td>
        <td>原因</td>
    </tr>
    <tr>
        <td>400</td>
        <td>请求语法错误</td>
        <td></td>
    </tr>
    <tr>
        <td>401</td>
        <td>没有经过授权</td>
        <td></td>
    </tr>
    <tr>
        <td>403</td>
        <td>拒绝提供服务，没有权限</td>
        <td>文件或者父文件夹没有访问权限</td>
    </tr>
    <tr>
        <td>404</td>
        <td>没有找到</td>
        <td></td>
    </tr>
</table>

### 5XX
服务器端错误
500 服务器端发生一个不可预期的错误
503 服务器端暂时不能提供服务，过阵子才会恢复正常
<table>
    <tr>
        <td>错误码</td>
        <td>描述</td>
        <td>原因</td>
    </tr>
    <tr>
        <td>500</td>
        <td>服务器端发生一个不可预期的错误</td>
        <td></td>
    </tr>
    <tr>
        <td>502</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>503</td>
        <td>服务器端暂时不能提供服务，过阵子才会恢复正常</td>
        <td>暂时处于超负载或者正在停机维护</td>
    </tr>
    
</table>

## 高级概念
### 回调
```js
function print(something){
    console.log(something);
}
function we(callback, something){
    something += " is cool";
    callback(something);
}
we(print, "Nodejs");
we(function(something){
    console.log(something);
}, "jade");
```
### 同步/异步  sync/async
js是单线程的，代码是顺序执行的
同步：代码的顺序和执行的顺序一致
异步：代码的顺序和执行的顺序不一定一致

### I/O
向文件系统、数据库之类的资源提供接口。

### 单线程/多线程 
单线程：一次只能谈一个女友。但是可能被一个任务堵死。
多线程：一次可以谈多个女友。但是资源的调度可能出现问题。

### 阻塞/非阻塞 Block/Unblock
阻塞：定座位时把自己挂起
非阻塞：定座位之后挂电话，想干嘛干嘛

### 事件 Event
EventEmitter

### 事件驱动
函数执行的一种方式

### 基于事件驱动的回调
注册回调

### 事件循环 Event Loop
如果大量的异步操作来在完成密集任务的同时不会阻塞程序执行，需要有一个机制管理--时间循环。

FIFO的任务队列。

### 作用域
调用函数、访问变量的能力有关
### 上下文
代表this的指向。this指向函数的拥有者，只能在函数内部使用，在函数执行时被赋值。

全局上下文中，this指向全局对象，无论是严格与非严格模式。（浏览器中是window，nodejs中是global）

函数上下文中，this的值取决于函数被调用的方式。

#### call() & apply()
能够改变函数的上下文执行对象
```js
var pet = {
    words: '...',
    speaks: function(){
        console.log(this.words);
    }
};

pet.speaks();

var dog = {
    words: 'wang'
};

pet.speaks.call(dog);

```
```js
function pet(words){
    this.words = words;
    this.speaks = function(){
        console.log(this.words);
    }
};

function dog(words){
    pet.call(this, words);
}

var dog1 = new dog('wang');

dog1.speaks();
```

# 常用命令

## npm安装
```
npm install --save-dev webpack
```

## npm查看和设置代理
```
npm config get http-proxy
npm config set http-proxy http://user:password@proxy.yourname.com:8080
```








