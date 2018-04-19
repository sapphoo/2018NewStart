# float的初衷
实现文字环绕效果

# float特性-包裹与破坏

## 包裹的三个特性（BFC）
1. 收缩
2. 坚挺
3. 隔绝

## 具有包裹性的其他小伙伴
- display:inline-block/table-cell/...
- position:absolute(近亲)/fixed/sticky
- overflow:hidden/scroll

## 破坏
1. 父元素高度塌陷
2. 偏移

## 具有破坏性的其他小伙伴
- display:none
- position:absolute(近亲)/fixed/sticky

# 被误解的float
浮动的破坏性只是为了实现文字环绕效果

# 清除浮动（带来的影响）

##  方法一：脚底插入clear：both
1. HTML block 水平元素底部走起 <div...></div>
2. CSS after伪元素底部生成  .clearfix:after{}
```css
- .clearfix:after{content:''; display:block; width:0; height:0; clear:both;}
- .clearfix:after{content:''; display:table; clear:both;}
```
##  方法二：父元素BFC（IE8+）/haslayout（IE6\7）
- float:left/right
- position:absolute/fixed
- overflow:hidden/scroll(IE7+)
- display:inline-block/table-cell(IE8+)

# 浮动的滥用
## 砌砖墙
1. 元素block块状化（砖头化）
2. 破坏性造成的紧密排列特性（去空格化）

## 砌砖布局的问题
1. 妙脆角-嘎吱脆; --容错性比较糟糕，容易出问题
2. 吝啬鬼-重用废；--这种布局需要元素固定尺寸，很难重复使用

# float与流体布局
## 文字环绕变身
### 左青龙 中间是标题 右白虎
```css
float:left; //左
float:right; //右
text-align:center; //父
```
