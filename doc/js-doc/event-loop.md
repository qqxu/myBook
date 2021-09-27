### 单线程
js是单线程执行

**为什么是单线程**
js作为浏览器脚本语言，用于用户交互，及操作dom，如果有多个线程，无法确认以哪个线程为准

**宿主**

- 浏览器环境：有js 引擎线程和渲染线程， 两个线程互斥
- Node环境：只有js线程


### js异步编程

程序的一部分*现在*运行，一部分在*将来*运行。

**分块的程序**
js 程序写在单个js 文件中，程序由多个块构成。这些块中只有一个是现在执行，其余的则会在将来执行，最常见的块单位是函数。
程序中将来执行的部分不一定在*现在*运行的部分执行完后就立即执行。即 *现在*无法完成的任务将会异步完成。

js 引擎 需要运行在**宿主**环境中。宿主环境提供一种事件循环机制来处理程序中多个块的执行，且执行每块时调用js引擎。”事件“（js代码执行）调度是由宿主环境进行的。

例子：
js程序发出一个ajax请求，从服务器获取数据。在回调函数中设置好响应代码。js引擎会通知宿主环境：完成网络请求，就调用回调函数。浏览器就会设置侦听来自网络的响应，拿到数据后，把回调函数插入事件循环，以此实现对回调的调度执行。

**事件循环**
伪代码如下：
```
var eventLoop = [];
var event;

while(true) {
    // 一次tick
    if (eventLoop.length > 0) {
        event = eventLoop.shift();
        try {
            event();
        } catch(err) {
            responseErr(err);
        }
    }
}

```
利用 while 循环实现持续运行的循环，循环的每一轮称为一个tick。对每个tick而言，如果在队列中有等待事件，就会从队列中取下一个事件并执行。这些事件就是回调函数。

setTimeout 就是设定一个定时器。定时器到时后，环境会把回调函数放在事件循环中。如果循环队列中已经有事件时，就会等待。因此， setTimeout 的精度不高。 

**任务队列**
任务队列挂在事件循环队列的每个tick之后的一个队列

#### 回调函数

回调函数的问题：

- 回调异步流是非线性、非顺序的表达，不符合人脑处理事情的线性直觉，理解难度加大
- 多重嵌套的回调函数严重阻碍代码理解
- 回调函数控制权转移引起的信任问题： 比如调用次数过多、调用某个不存在的方法


#### promise
含义
- promise 对值的封装使值本身与时间无关，给出了一个关于返回值的承诺（promise），其状态一旦确定，就不会在发生改变
- 链式顺序调用
- 通过promise 将第三方获取的数据控制权交由回调函数

实现解析
- 三种状态:fulfilled、pending、 rejected
- then 方法： 返回一个新的Promise对象
- promise 构造函数是同步执行的，prxminomise.then 中的函数是异步执行的


** 协程coroutine**
多个线程相互协作，完成异步任务
运行流程： 协程A执行到一半，执行权交给协程B ，一段时间后B交还执行权，A继续执行

Generator 是协程在 Es6 的实现，最大的特点就是交出函数的执行权
- Generator 函数执行返回一个迭代器
- 调用迭代器上的next方法，Generator函数内部执行到 yield 的位置停止。当再次调用next 方法时，继续向后执行。通过throw 方法向Generator内抛入错误，或者return方法提前终止


**async/await** 
- async 会同步阻塞调用代码中await 标记的异步 promise函数，实现异步流程的同步顺序执行
- async 函数返回的是一个promise 

写法：
- 同步阻塞
```
async function test() {}

await test();
// 其他代码，会被阻塞，等待上面代码执行

```


- 异步不阻塞
```
async function test() {}

test().then(res=>{
    // 等promise resolve了之后需要做的事情
})
// 其他代码，不会被上面代码阻塞

```

#### 事件监听

#### 发布订阅


### Event-loop运行机制

运行：
- 1、先执行同步任务，遇到异步宏任务就放在宏任务队列中，遇到异步微任务就放在微任务队列中
- 2、所有同步任务执行完毕后，再将异步微任务从队列中调入主线程执行
- 3、微任务执行完成后，就将异步宏任务调入主线程执行
- 一直循环至所有任务执行完毕

** 宏任务、微任务**
- 宏任务：script、settimeout、setinterval、setimmediate，I/O，UI rendering
- 微任务：Promises、Object.observe, MutationObserver


例子

```
function testEvent() {
    for (var i = 0; i < 3; i++) {
      setTimeout(() =>{
        console.log('timer inner', i);  
      }, 100);
      new Promise(resolve => resolve()).then(() => console.log('promise inner', i));
      console.log('for inner', i);    
    }  
}
 
testEvent();
// 由于 var 变量声明提升，使得 var 相当于函数 testEvent 内的全局变量
// 先执行同步任务
// 遇到 异步宏任务setTimeout 塞入 宏任务队列
// 遇到 异步微任务 promise 塞入 微任务队列

// for inner 0  
// for inner 1
// for inner 2

// 执行同步任务 for inner，当i变成3时，不满足 循环条件 i<3 ，循环中止
// 由于 i 是var 声明，相当于 是函数内的全局变量，已经变成 3 
// 开始执行异步微任务, 直至微任务队列执行完毕
// 微任务队列 promise 会执行 3遍打印

// promise inner 3
// promise inner 3
// promise inner 3

// 开始执行异步宏任务,直至宏任务队列执行完毕

// timer inner 3
// timer inner 3
// timer inner 3

```


将var 声明改成let，let 具有块级作用域，代码可按预期输出

```
function testEvent() {
    for (let i = 0; i < 3; i++) {
      setTimeout(() =>{
        console.log('timer inner', i);  
      }, 100);
      new Promise(resolve => resolve()).then(() => console.log('promise inner', i));
      console.log('for inner', i);    
    }  
}
 
// for inner 0  
// for inner 1
// for inner 2

// promise inner 0
// promise inner 1
// promise inner 2

// timer inner 0
// timer inner 1
// timer inner 2

```





[js 基础问题](https://juejin.cn/post/6966781111888265253?utm_source=gold_browser_extension)