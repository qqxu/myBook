### 单线程
js是单线程执行

**为什么是单线程**
js作为浏览器脚本语言，用于用户交互，及操作dom，如果有多个线程，无法确认以哪个线程为准

**宿主**

- 浏览器环境：有js 引擎线程和渲染线程， 两个线程互斥
- Node环境：只有js线程


### js异步编程
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
- promise 构造函数是同步执行的，promise.then 中的函数是异步执行的


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