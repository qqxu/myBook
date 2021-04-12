### 转型函数

- what
- when
- how
- 优缺点

#### Number()

** string **

```
Number('22') // 22
Number('22 33') // 有空格，NaN
```


** boolean **

```
Number(true) // 1
Number() // 0
Number(false) // 0
```


** object **

```
Number({}) // NaN

```


** undefined **

```
Number(undefined) // NaN

```


** null **

```
Number(null) // 0

```

#### Boolean()

** boolean **


```
Boolean(true) // true
Boolean(false) // false
```


** string **


```

Boolean("hehhe") // 非空字符，true
Boolean("") // 空字符，false

```


** number **


```

Boolean(2) // 非0数值, true
Boolean(0)  // 0，false

```



** undefined **


```

Boolean(undefined) // false

```


** null **


```

Boolean(null) // false

```

** object **


```
Boolean({}) // 任何对象, true  
```


### 问题

使用new调用 构造函数与直接调用转型函数区别

```
var a = 2;typeof(a)  // number
var a = Number(2); typeof(a) // number
var a = new Number(2); typeof(a) // object
```

