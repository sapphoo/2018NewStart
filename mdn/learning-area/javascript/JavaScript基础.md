# 语法
## 变量声明提升(Variable hoisting)
变量在声明之前也能够获取到，值为undefined
## 函数提升（Function hoisting）
函数生命会被提升到顶部，函数表达式不会

# Datatype

## primitive
六种原始数据类型
- Boolean
- Null  一个表明 null 值的特殊关键字
- Undefined  变量未定义时的属性
- Number
- String
- Symbol
> undefined代表一个意想不到没有的值。null代表预期没有的值。
>
> undefined 是全局对象的一个属性。null特指对象的值未设置
## Object
加上Object对象
- 点表示法
> 只能接受字面量的成员的名字，不接受变量作为名字(会自动把变量名作为成员名称)
- 数组表示法
- this
> this指向 代码运行时所在的对象，在使用构造器动态创建一个对象时非常有用

## 类型转换
- string to number
- - parseInt()和parseFloat()
- - 单目加法运算符
```
"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2
```

# 字面量
- 数组字面量(Array literals)
- 布尔字面量(Boolean literals)
- 浮点数字面量(Floating-point literals)
- 整数(Intergers)
- 对象字面量(Object literals)
- RegExp literals
- 字符串字面量(String literals)
## 对象字面量
```
var foo = {a: "alpha", "b": "beta", 2: "two"};
console.log(foo.a);    // alpha
console.log(foo.b);    // beta
console.log(foo[2]);   // two
//console.log(foo.2);  // Error: missing ) after argument list
//console.log(foo[a]); // Error: a is not defined
console.log(foo["a"]); // alpha
console.log(foo["b"]); // beta
console.log(foo["2"]); // two
```

# 流程控制
## false
下面这些值将被计算出false
- false
- undefined
- null
- 0
- NaN
- 空字符串（""）

请不要混淆原始的布尔值true和false 与 Boolean对象的真和假。例如：
```
var b = new Boolean(false);
if (b) // this condition evaluates to true
if (b == true) // this condition evaluates to false
```

## for...in & for...of
```
let arr = [3, 5, 7];
arr.foo = "hello";

for (let i in arr) {
   console.log(i); // logs "0", "1", "2", "foo"
}

for (let i of arr) {
   console.log(i); // logs "3", "5", "7" // 注意这里没有 hello
}
```
# 函数
## 作用域和函数堆栈
### 递归
```
var foo = function bar() {
   // statements go here
};

//在这个函数体内，以下的语句是等价的：
bar()
arguments.callee()
foo()
```
将递归算法转换为非递归算法是可能的，不过逻辑上通常会更加复杂，而且需要使用堆栈。事实上，递归函数就使用了堆栈：函数堆栈。

### 嵌套函数和闭包

你可以在一个函数里面嵌套另外一个函数。嵌套（内部）函数对其容器（外部）函数是私有的。它自身也形成了一个闭包。一个闭包是一个可以自己拥有独立的环境与变量的的表达式（通常是函数）。

既然嵌套函数是一个闭包，就意味着一个嵌套函数可以”继承“容器函数的参数和变量。换句话说，内部函数包含外部函数的作用域。

可以总结如下：

内部函数只可以在外部函数中访问。
内部函数形成了一个闭包：它可以访问外部函数的参数和变量，但是外部函数却不能使用它的参数和变量。

## 闭包

闭包是 JavaScript 中最强大的特性之一。JavaScript 允许函数嵌套，并且内部函数可以访问定义在外部函数中的所有变量和函数，以及外部函数能访问的所有变量和函数。但是，外部函数却不能够访问定义在内部函数中的变量和函数。这给内部函数的变量提供了一定的安全性。此外，由于内部函数可以访问外部函数的作用域，因此当内部函数生存周期大于外部函数时，外部函数中定义的变量和函数将的生存周期比内部函数执行时间长。当内部函数以某一种方式被任何一个外部函数作用域访问时，一个闭包就产生了。
```
var createPet = function(name) {
  var sex;
  
  return {
    setName: function(newName) {
      name = newName;
    },
    
    getName: function() {
      return name;
    },
    
    getSex: function() {
      return sex;
    },
    
    setSex: function(newSex) {
      if(typeof newSex == "string" 
        && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
        sex = newSex;
      }
    }
  }
}

var pet = createPet("Vivie");
pet.getName();                  // Vivie

pet.setName("Oliver");
pet.setSex("male");
pet.getSex();                   // male
pet.getName();                  // Oliver
```
在上面的代码中，外部函数的name变量对内嵌函数来说是可取得的，而除了通过内嵌函数本身，没有其它任何方法可以取得内嵌的变量。内嵌函数的内嵌变量就像内嵌函数的保险柜。它们会为内嵌函数保留“稳定”——而又安全——的数据参与运行。而这些内嵌函数甚至不会被分配给一个变量，或者不必一定要有名字。
```
var getCode = (function(){
  var secureCode = "0]Eal(eh&2";    // A code we do not want outsiders to be able to modify...
  
  return function () {
    return secureCode;
  };
})();

getCode();    // Returns the secret code
```
尽管有上述优点，使用闭包时仍然要小心避免一些陷阱。如果一个闭包的函数用外部函数的变量名定义了同样的变量，那在外部函数域将再也无法指向该变量。

(作用域链：当同一个闭包作用域下两个参数或者变量同名时，就会产生命名冲突。更近的作用域有更高的优先权，所以最近的优先级最高，最远的优先级最低。这就是作用域链。链的第一个元素就是最里面的作用域，最后一个元素便是最外层的作用域。)
```
var createPet = function(name) {  // Outer function defines a variable called "name"
  return {
    setName: function(name) {    // Enclosed function also defines a variable called "name"
      name = name;// ??? How do we access the "name" defined by the outer function ???
    }
  }
}
```
## 使用 arguments 对象
函数的实际参数会被保存在一个类似数组的arguments对象中。

使用arguments对象，你可以处理比声明的更多的参数来调用函数。这在你事先不知道会需要将多少参数传递给函数时十分有用。你可以用arguments.length来获得实际传递给函数的参数的数量，然后用arguments对象来取得每个参数。

## 函数参数
从ECMAScript 6开始，有两个新的类型的参数：默认参数，剩余参数。
### 默认参数
在JavaScript中，函数参数的默认值是undefined。然而，在某些情况下设置不同的默认值是有用的。
```js
function multiply(a, b = 1) {
  return a * b;
}

multiply(5, 1); // 5
multiply(5);    // 5
```
### 剩余参数
剩余参数语法允许将不确定数量的参数表示为数组。
```js
function sortRestArgs(arg1,...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}
```

## 箭头函数表达式
箭头函数表达式（也称胖箭头函数）相比函数表达式具有较短的语法并以词法的方式绑定 this。箭头函数总是匿名的。
### 更简洁
```
var a = ["Hydrogen","Helium","Lithium","Beryllium"];

var a2 = a.map(function(s){ return s.length });

console.log(a2); // logs [ 8, 6, 7, 9 ]

var a3 = a.map( s => s.length );

console.log(a3); // logs [ 8, 6, 7, 9 ]
```
### this
在箭头函数出现之前，每一个新函数都重新定义了自己的 this 值.
```
function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();
```

## 预定义函数

# OOJS
- 构建函数
> 一个用来 定义对象和他们的特征 的特殊函数。
>
> 从构建函数创建的新实例的特征并非全盘复制，而是通过一个叫做原型链的参考链链接过去的。
>
> 一个构建函数通常是大写字母开头，这样便于区分构建函数和普通函数。
>
> JavaScript有个内嵌的方法create(), 它允许您基于现有对象创建新的对象实例。
- 多态
> 多个对象拥有实现共同方法的能力

## Prototype
> 通过原型这种机制，JavaScript 中的对象从其他对象继承功能特性；这种继承机制与经典的面向对象编程语言的继承机制不同
### 基于原型的语言
 JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)

准确地说，这些属性和方法定义在Object的构造器函数(constructor functions)之上的prototype属性上，而非对象实例本身。

 在传统的 OOP 中，首先定义“类”，此后创建对象实例时，类中定义的所有属性和方法都被复制到实例中。在 JavaScript 中并不如此复制——而是在对象实例和它的构造器之间建立一个链接（它是__proto__属性，是从构造函数的prototype属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法。

>注意1: 理解对象的原型（可以通过Object.getPrototypeOf(obj)或者已被弃用的__proto__属性获得）与构造函数的prototype属性之间的区别是很重要的。前者是每个实例上都有的属性，后者是构造函数的属性。也就是说，Object.getPrototypeOf(new Foobar())和Foobar.prototype指向着同一个对象。
### 理解原型对象
>注意2:原型链中的方法和属性没有被复制到其他对象——它们被访问需要通过“原型链”的方式
>
>注意3:没有官方的方法用于直接访问一个对象的原型对象——原型链中的“连接”被定义在一个内部属性中，在 JavaScript 语言标准中用 [[prototype]] 表示（参见 ECMAScript）。然而，大多数现代浏览器还是提供了一个名为 __proto__ （前后各有2个下划线）的属性，其包含了对象的原型
### prototype属性：继承成员被定义的地方
继承的属性和方法是定义在 prototype 属性之上的（你可以称之为子命名空间 (sub namespace) ）——那些以 Object.prototype. 开头的属性，而非仅仅以 Object. 开头的属性。prototype 属性的值是一个对象，我们希望被原型链下游的对象继承的属性和方法，都被储存在其中。

> **!重要!：prototype 属性大概是 JavaScript 中最容易混淆的名称之一。你可能会认为，这个属性指向当前对象的原型对象，其实不是（还记得么？原型对象是一个内部对象，应当使用 __proto__ 访问）。prototype 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员。**

### Object.create()
通过此方法创建新的对象实例。

`var person2 = Object.create(person1);`

这里以person1为原型对象创建了person2

`person2.__proto__`
### constructor 属性
每个对象实例都具有 constructor 属性，它指向创建该实例的构造器函数。

### 修改原型
向构造器的prototype中添加一个新的方法，能够动态的更新继承链。在这之前创建的对象实例也能够获得这个方法（其实也就是原型链的原理，下游的方法和属性不是通过复制而是通过上溯得到的）。
`Person.prototype.farewell = funtion(){xxx}`

> 一种极其常见的对象定义模式是，在构造器（函数体）中定义属性、在 prototype 属性上定义方法。如此，构造器只包含属性定义，而方法则分装在不同的代码块，代码更具可读性。
```
// 构造器及其属性定义

function Test(a,b,c,d) {
  // 属性定义
};

// 定义第一个方法

Test.prototype.x = function () { ... }

// 定义第二个方法

Test.prototype.y = function () { ... }

// 等等……`
```

# 表达式和运算符
## 赋值运算符
解构
## 一元操作符
### delete
### typeof
### void
## 关系操作符
### in
属性名或者数组索引是否在对象中存在。
### instanceof
## 表达式
### 基本表达式
- this
this关键字被用于指代当前的对象，通常，this指代的是方法中正在被调用的对象。

# 索引集合类
## API
### Array.forEach()
在数组定义时省略的元素不会在forEach遍历时被列出，但是手动赋值为undefined的元素是会被列出的
### Array.concat() 
连接两个数组并返回一个新的数组。
### Array.join(deliminator)
将数组的所有元素连接成一个字符串。
### Array.shift() 
从数组移出第一个元素，并返回该元素。
### Array.slice(start_index, upto_index)
从数组提取一个片段，并作为一个新数组返回。
### Array.splice(index, count_to_remove, addElement1, addElement2, ...)
从数组移出一些元素，（可选）并替换它们。
### Array.reverse() 
颠倒数组元素的顺序
### Array.sort() 
给数组元素排序

sort() 也可以带一个回调函数来决定怎么比较数组元素。这个回调函数比较两个值，并返回3个值中的一个。-1,1,0.

-1代表靠前，1代表靠后，0代表相等。
### Array.indexOf(searchElement[, fromIndex]) 
在数组中搜索searchElement 并返回第一个匹配的索引。
### Array.lastIndexOf(searchElement[, fromIndex])
和 indexOf 差不多，但这是从结尾开始，并且是反向搜索。
### Array.forEach(callback[, thisObject]) 
在数组每个元素项上执行callback。
### Array.map(callback[, thisObject]) 
遍历数组，并通过callback对数组元素进行操作，并将所有操作结果放入数组中并返回该数组
### Array.filter(callback[, thisObject]) 
返回一个包含所有在回调函数上返回为true的元素的新数组
### Array.every(callback[, thisObject]) 
当数组中每一个元素在callback上被返回true时就返回true
### Array.some(callback[, thisObject]) 
只要数组中有一项在callback上被返回true，就返回true
### Array.reduce(callback[, initialValue]) 
使用回调函数 callback(firstValue, secondValue) 把数组列表计算成一个单一值
### Array.reduceRight(callback[, initalvalue]) 
和 reduce()相似，但这从最后一个元素开始的。

## Array-like objects 类数组对象
eg:document.getElementsByTagName() 返回的 NodeList ;函数内部可用的 arguments 对象

Array的原生(prototype)方法可以用来处理类似数组行为的对象，例如：
```js
function printArguments() {
  Array.forEach(arguments, function(item) {
    console.log(item);
  });
}
```
在旧版本的Javascript中，使用call来进行常规方法调用可以模拟很多特性:
```js
Array.prototype.forEach.call(arguments, function(item) {
  console.log(item);
});
```

## 数组推导式
在JavaScript 1.7 被介绍并计划在 ECMAScript 7, array comprehensions 被规范化并提供一个有用的快捷方式，用来实现如何在另一个数组的基础上构造一个新的数组。推导式可以经常被用在那些需要调用 map() 和 filter()函数的地方，或作为一种结合这两种方式。
```js
var numbers = [1, 2, 3, 21, 22, 30];
var doubledEvens = [i * 2 for (i of numbers) if (i % 2 === 0)];
console.log(doubledEvens); // logs 4,44,60
```
可以用于字符串
```js
var str = 'abcdef';
var consonantsOnlyStr = [c for (c of str) if (!(/[aeiouAEIOU]/).test(c))  ].join(''); // 'bcdf'
var interpolatedZeros = [c+'0' for (c of str) ].join(''); // 'a0b0c0d0e0f0'
```

## Typed Arrays 类型化数组
JavaScript typed arrays 是类数组对象（array-like object），其提供访问原始二进制数据的机制。

# 带键的集合
## 映射
### Map
一个Map对象就是一个简单的键值对映射集合，可以按照数据插入时的顺序遍历所有的元素。
```js
var sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.size; // 2
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (var [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0
```
### Object vs. Map
一般地，objects会被用于将字符串类型映射到数值。Object允许设置键值对、根据键获取值、删除键、检测某个键是否存在。而Map具有更多的优势。

- Object的键均为Strings类型，在Map里键可以是任意类型。
- 必须手动计算Object的尺寸，但是可以很容易地获取使用Map的尺寸。
- Map的遍历遵循元素的插入顺序。
- Object有原型，所以映射中有一些缺省的键。（可以理解为map = Object.create(null)）。

## 集合
### Set对象
Set对象是一组值的集合，这些值是不重复的，可以按照添加顺序来遍历。
```js
var mySet = new Set();
mySet.add(1);
mySet.add("some text");
mySet.add("foo");

mySet.has(1); // true
mySet.delete("foo");
mySet.size; // 2

for (let item of mySet) console.log(item);
// 1
// "some text"
```
### Array vs. Set
```js
Array.from(mySet);
[...mySet2];

mySet2 = new Set([1,1,2,3,4]);
```
- 数组中用于判断元素是否存在的indexOf 函数效率低下。
- Set对象允许根据值删除元素，而数组中必须使用基于下标的 splice 方法。
- 数组的indexOf方法无法找到NaN值。
- Set对象存储不重复的值，所以不需要手动处理包含重复值的情况。
