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
>
> JavaScript 常被描述为一种基于原型的语言 (prototype-based language)——每个对象拥有一个原型对象，对象以其原型为模板、从原型继承方法和属性。原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推。这种关系常被称为原型链 (prototype chain)
>
>准确地说，这些属性和方法定义在Object的构造器函数(constructor functions)之上的prototype属性上，而非对象实例本身。
>
> 在传统的 OOP 中，首先定义“类”，此后创建对象实例时，类中定义的所有属性和方法都被复制到实例中。在 JavaScript 中并不如此复制——而是在对象实例和它的构造器之间建立一个链接（它是__proto__属性，是从构造函数的prototype属性派生的），之后通过上溯原型链，在构造器中找到这些属性和方法。
>
>注意: 理解对象的原型（可以通过Object.getPrototypeOf(obj)或者已被弃用的__proto__属性获得）与构造函数的prototype属性之间的区别是很重要的。前者是每个实例上都有的属性，后者是构造函数的属性。也就是说，Object.getPrototypeOf(new Foobar())和Foobar.prototype指向着同一个对象。