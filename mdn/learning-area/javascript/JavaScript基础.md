# Datatype

## primitive

- Boolean
- Null
- Undefined
- Number
- String
- Symbol

## Object
- 点表示法
> 只能接受字面量的成员的名字，不接受变量作为名字(会自动把变量名作为成员名称)
- 数组表示法
- this
> this指向 代码运行时所在的对象，在使用构造器动态创建一个对象时非常有用

## OOJS
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

### Prototype
> 通过原型这种机制，JavaScript 中的对象从其他对象继承功能特性；这种继承机制与经典的面向对象编程语言的继承机制不同
#### 基于原型的语言
 JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)

准确地说，这些属性和方法定义在Object的构造器函数(constructor functions)之上的prototype属性上，而非对象实例本身。

 在传统的 OOP 中，首先定义“类”，此后创建对象实例时，类中定义的所有属性和方法都被复制到实例中。在 JavaScript 中并不如此复制——而是在对象实例和它的构造器之间建立一个链接（它是__proto__属性，是从构造函数的prototype属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法。

>注意1: 理解对象的原型（可以通过Object.getPrototypeOf(obj)或者已被弃用的__proto__属性获得）与构造函数的prototype属性之间的区别是很重要的。前者是每个实例上都有的属性，后者是构造函数的属性。也就是说，Object.getPrototypeOf(new Foobar())和Foobar.prototype指向着同一个对象。
#### 理解原型对象
>注意2:原型链中的方法和属性没有被复制到其他对象——它们被访问需要通过“原型链”的方式
>
>注意3:没有官方的方法用于直接访问一个对象的原型对象——原型链中的“连接”被定义在一个内部属性中，在 JavaScript 语言标准中用 [[prototype]] 表示（参见 ECMAScript）。然而，大多数现代浏览器还是提供了一个名为 __proto__ （前后各有2个下划线）的属性，其包含了对象的原型
#### prototype属性：继承成员被定义的地方
继承的属性和方法是定义在 prototype 属性之上的（你可以称之为子命名空间 (sub namespace) ）——那些以 Object.prototype. 开头的属性，而非仅仅以 Object. 开头的属性。prototype 属性的值是一个对象，我们希望被原型链下游的对象继承的属性和方法，都被储存在其中。

>!重要!：prototype 属性大概是 JavaScript 中最容易混淆的名称之一。你可能会认为，这个属性指向当前对象的原型对象，其实不是（还记得么？原型对象是一个内部对象，应当使用 __proto__ 访问）。prototype 属性包含（指向）一个对象，你在这个对象中定义需要被继承的成员。

#### Object.create()
通过此方法创建新的对象实例。

`var person2 = Object.create(person1);`

这里以person1为原型对象创建了person2

`person2.__proto__`
#### constructor 属性
每个对象实例都具有 constructor 属性，它指向创建该实例的构造器函数。

#### 修改原型
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