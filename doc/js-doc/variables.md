
### 块作用域

try catch 找那个的catch分支具有块作用域

### 声明提升
- 变量、函数声明会提升
- 函数表达式不会提升

```


```


函数声明提升优先于变量提升，重复声明会被忽略

```
foo();
var foo = '1';
function foo() { console.log('2'); }
foo = function(){ console.log('3'); }
foo();
```

会被引擎理解为：

```
function foo() { console.log('2'); }
foo();
foo = function() { console.log('3'); }
foo();
```

因此最终输出为：
2
3



### 赋值

[Object.defineProperty和Proxy区别](https://blog.csdn.net/qwe435541908/article/details/107360849)