
### 生成数组序列

** Array.prototype.keys() **
>  keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。


```
[...new Array(10).keys()] // [0, 1, 2, 3]

```

** Array.from() **
方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

Array.from() 可以通过以下方式来创建数组对象：
 - 伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
 - 可迭代对象（可以获取对象中的元素,如 Map和 Set 等）

 语法：Array.from(arrayLike[, mapFn[, thisArg]])

```
Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]

```