## 用到的代码

Number('xxx')  // NAN or number

element.textContent = '';

element.value = '';

element.style.backgroundColor = '';

element.disabled = true;

element.focus();

document.createElement('button');

document.body.appendChild(resetButton);

document.querySelector('.guesses');

document.querySelectorAll('.resultParas p');

### 事件
是浏览器中发生的动作，例如点击按钮，加载页面或播放视频，我们可以调用代码来响应。 侦听事件发生的构造方法称为事件监听器，响应事件触发而运行的代码块被称为事件处理器。
当函数作为事件监听方法的参数时，函数名后不应带括号：
element.addEventListener('event', function);

### 等到元素加载完毕的 原生 vs. jquery方法

```
window.onload = function(){
    $("#blackBox").hide();
};
$(documemt).ready(function(){
    document.getElementById("blackBox").style.display = "none";
});
```
window.onload()方法是必须等到页面内包括图片的所有元素加载完毕后才能执行。$(document).ready()是DOM结构绘制完毕后就执行，不必等到加载完毕


