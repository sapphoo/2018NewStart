# 挂载点、模板与实例 之间的关系
```html
<div id="root">{{message}}</div>
    <script>
        new Vue({
            el: "#root",
            data: {
                message: 'hello world'
            }
        })

    </script>
```

## 挂载点 
el属性对应的dom节点，vuejs只会处理挂载点内部的部分

## 模板
挂载点内部的内容，可以写在html中，也可以写在vue实例的template属性里
```html
    <div id="root">
         <div>{{message}}</div> 
    </div>
    <script>
        new Vue({
            el: "#root",
            data: {
                message: 'hello world'
            }
        })
    </script>

    <div id="root">
          
    </div>
    <script>
        new Vue({
            el: "#root",
            template: '<div>{{message}}</div>',
            data: {
                message: 'hello world'
            }
        })
    </script>
```

# vue实例中的数据、事件和方法

## 数据
### 插值表达式
{{}}
### v-text
转义输出成文本
### v-html
直接插入到html中
```html
    <div id="root">
         <div v-html='content'></div> 
    </div>
```

## 事件
### v-on:event / @event

# vue中的属性绑定和双向数据绑定语法

## 属性绑定
### v-bind:attr='message' / :attr='message'
```html
    <div id="root">
         <div v-bind:title='123 + title'>{{message}}</div> 
    </div>
    <script>
        new Vue({
            el: "#root",
            data: {
                message: 'hello world',
                title: 'this is vue title'
            }
        })

    </script>
```

## 双向数据绑定
### v-model

# vue的计算属性和侦听器

