

一旦代码解析或运行时发生错误，JavaScript引擎就会自动产生并抛出一个Error对象的实例，然后整个程序就中断在发生错误的地方。

Error对象的实例有三个最基本的属性：

name：错误名称
message：错误提示信息
stack：错误的堆栈（非标准属性，但是大多数平台支持）

```
const fun = () => {
    try {
        errFun();
    } catch(err) {
        console.log(err.message);
        console.log(err.stack); // 错误发生时的 运行栈的上下文
    }
}
 
const errFun = () => {
    throw Error('2222');
}

```