# new 


# this
this 是你 call 一个函数时传的 context
```js
var obj = {
  foo: function(){
    console.log(this)
  }
}

var bar = obj.foo
obj.foo() // 转换为 obj.foo.call(obj)，this 就是 obj
bar() 
// 转换为 bar.call()
// 由于没有传 context
// 所以 this 就是 undefined
// 最后浏览器给你一个默认的 this —— window 对象
```

# [闭包 closure](https://zh.wikipedia.org/wiki/%E9%97%AD%E5%8C%85_(%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%A7%91%E5%AD%A6))
## 定义
- 又称**词法闭包**（Lexical Closure）或**函数闭包**（function closures）
- 是引用了自由变量的函数
- 这个被引用的自由变量将和这个函数一同存在，即使已经离开了创造它的环境也不例外。
- 说法2： 闭包是有函数和与其相关的引用环境组合而成的实体。
- 闭包在运行时可有多个实例。

## 产生
- 在函数中可以（嵌套）定义另一个函数时，如果内部的函数引用了外部函数的变量，则可能产生闭包。
- 运行时，一旦外部的函数被执行，一个闭包就形成了，闭包中包含了内部函数的代码，以及所需外部函数中的变量的引用。

## 用途
**间接访问一个变量/隐藏一个变量**
```js
!function(){

  var lives = 50

  window.奖励一条命 = function(){
    lives += 1
  }

  window.死一条命 = function(){
    lives -= 1
  }

}()
//防止随意篡改lives数量
```

# IIFE
## IIFE 立即调用执行函数
- 理解：ECMAScript 6 之前的JavaScript拥有函数作用域，没有块作用域，且通过指针（而非复制）将变量传入一个函数闭包；
- 作用：
  1. 令函数中声明的变量绕过JavaScript的变量置顶声明规则。
  1. 避免新的变量被解释成全局变量或函数名占用全局变量名。
  1. 能够在禁止访问函数内声明变量的情况下允许外部对函数的调用。
  ```js
  //1
  var v, getValue;
  v = 1;
  getValue = function(){return v;}
  v = 2;
  getValue();//2

  var v, getValue;
  v = 1;
  getValue = (function(x){
    return function(){return x;};
    })(v);
  //这里函数将v作为参数传递，之后立即执行，就保存了内部函数的执行上下文。
  v = 2;
  getValue();//1

  //2
  (function(){
    // all your code here
    var foo = function() {};
    window.onload = foo;
    // ...
  })();
  // foo is unreachable here (it’s undefined)

  //3
  var counter = (function(){
    var i = 0;
    return {
      get: function(){
        return i;
      },
      set: function(x){
        i = x;
      },
      increment: function(){
        return i++;
      }
    }
  })();
  counter.get(); // 0
  counter.set( 3 );
  counter.increment(); // 4
  counter.increment(); // 5
  ```

