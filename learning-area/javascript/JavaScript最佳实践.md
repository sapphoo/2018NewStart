## 名称--简洁易读的变量和函数名称
 Good--isLegalDrinkingAge()

 Bad--isOverEighteen()
## 避免全局变量
 因为同一个html中引用的诸多js都运行在同一个scope中，全局变量可能会被覆盖
```
//需要将某些函数作为公共函数，写在return中
myNameSpace = function() {
	var current = null;
	function init() {
		…
	}
	function change() {
		…
	}
	function verify() {
		…
	}
	return{
		init:init,
		change:change
	}
}();

//没有公共调用需要的函数
(function() {
	var current = null;
	function init() {
		…
	}
	function change() {
		…
	}
	function verify() {
		…
	}
})();
```
## 坚持严格代码风格
> [JSLint — a JavaScript validation tool](http://www.jslint.com/)

## 适当地注释

## 避免和其他技术混用
尽量不要将css技术与js混用，应该使用聪明一点的方法。

## 有时使用简写更简洁
```
var cow = {
	colour:'brown',
	commonQuestion:'What now?',
	moo:function() {
		console.log('moo');
	},
	feet:4,
	accordingToLarson:'will take over the world'
};
var aweSomeBands = ['Bad Religion','Dropkick Murphys','Flogging Molly','Red Hot Chili Peppers','Pornophonique'];
var direction = (x > 100) ? 1 : -1;
var x = v || 10;
```

## 模块化——一个函数对应一个功能
尽量把函数做的可重用

## 渐进增强
> [渐进增强和优雅降级](https://stackoverflow.com/questions/2550431/what-is-the-difference-between-progressive-enhancement-and-graceful-degradation)

渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。区别：优雅降级是从复杂的现状开始，并试图减少用户体验的供给，而渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要。降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带。

## 可以新增一个配置文档用来后续维护

## 避免繁复嵌套 
因为这样会导致意义不明，应该将其拆成多个函数

## 优化循环
1、确保没有在每次循环中都读取数组长度
```
//wrong
var names = ['George', 'Ringo', 'Paul', 'John'];
for(var i = 0; i < names.length; i++) {
	doSomeThingWith(names[i]);
}

//right1
var names = ['George', 'Ringo', 'Paul', 'John'];
var all = names.length;
for(var i = 0; i < all; i++) {
	doSomeThingWith(names[i]);
}

//right2
var names = ['George', 'Ringo', 'Paul', 'John'];
for(var i = 0, j = names.length; i < j; i++) {
	doSomeThingWith(names[i]);
}

```
2、确保需要大量计算的代码在循环之外。eg：正则表达式、DOM操作。可以在循环中创建DOM节点，但是要避免在循环中将其插入到document中。

## 避免频繁DOM操作
访问浏览器的DOM代价很大。DOM是一个非常复杂的API且在浏览器中渲染需要大量时间。
避免频繁的创建或修改元素，应该在生成过程的末尾一次性操作DOM，打断一次浏览器的渲染就好。

## 不要专门为一种浏览器写代码
应该遵循一个普遍被接受的标准作为指导原则来编写代码。
其他的某种浏览器特殊功能可以写在其专用的脚本中。