### this 指向
- 调用位置决定this指向
- this绑定
    - 默认绑定（独立函数调用）：严格模式下 this会指向undefined，非严格模式下，this会指向全局对象
    - 隐式绑定：与调用方绑定（回调函数会丢失this绑定）
    - 显示绑定：call、apply、bind
    - new 绑定：指向new构造出的新对象
- 箭头函数会继承外层函数调用的this绑定


```
function foo() { console.log(this.a); };
var obj = { a: 1 };
foo.call(obj); // 1 把this绑定到obj上并执行foo函数
foo.bind(obj); // ƒ... 把this绑定到obj上，并返回原函数 foo 
foo.bind(obj)(); // 1 执行函数
```


函数调用会丢失 this

```

var value = 1;
var obj = {
    value: 2,
    getValue: function() {
        function helper() {
            console.log('22', this);
            return this.value;
        }
        return helper();
    }
}

obj.getValue(); // 1  helper 丢失了this，会绑定到全局

```


箭头函数绑定上级this

```

var value = 1;
var obj = {
    value: 2,
    getValue: function() {
        const helper = () => {
            return this.value;
        }
        return helper();
    }
}

obj.getValue(); // 2  箭头函数绑定上级this

```