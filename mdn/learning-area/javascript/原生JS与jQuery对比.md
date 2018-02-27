
## Query Selector
>注意：document.querySelector 和 document.querySelectorAll 性能很差。
>
>如果想提高性能，尽量使用document.getElementById、document.getElementsByClassName 或 document.getElementsByTagName。
### 1.0 选择器查询
```
// jQuery
$('.query');
// native 
document.querySelectorAll('.query');
```
### 1.1 class查询
```
// jQuery
$('.class');
// native
document.getElementByClassName('class');
```

### 1.2 id查询
```
// jQuery
$('#id');
// native
document.getElementById('id');
```

### 1.3 属性查询
```
// jQuery
$('a[target=_blank]');
// native
document.querySelectorAll('a[target=_blank]');
```

### 1.4 后代查询
```
// jQuery
e.find('li');
// native
e.querySelectorAll('li');
```

### 1.5 兄弟及上下元素


### 获取最近的特定祖先元素
```
// jQuery
e.closest(".ancestor");
e.closest(".ancestor", context);//

// native - not ie
e.closest(".ancestor");

// native - IE10+
function closest(el, selector) {
  const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

while (el) {
    if (matchesSelector.call(el, selector)) {
     return el;
    } else {
      el = el.parentElement;
    }
}
  return null;
}
```
## Css
### Get style
获取样式
```
//jQuery
e.css("color");

//Native
const win = e.ownerDocument.defaultView;
win.getComputedStyle(e, null).color;
```
