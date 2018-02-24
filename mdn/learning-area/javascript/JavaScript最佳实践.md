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