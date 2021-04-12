## DOM
document object model，文档对象模型


把网页文档转化成一个文档对象，主要功能就是处理网页内容  
    - 文档对象就是一颗节点树
    - 可以利用 DOM 提供API 操作文档内容


Dom 分类
    - Dom 核心： 针对任何结构化文档的标准模型
    - Dom xml： 只针对XML文档的标准模型
    - Dom html： 只针对HTML文档的标准模型


Dom级别
    - Dom1级
    - Dom2级
    - Dom3级


Dom 事件处理分级，由于Dom1级中没有事件处理的内容，所以没有Dom1级事件处理
** Dom 0级事件处理 **

```
 ele.onclick = function() {}

```

** Dom 2级事件处理 **

```
 ele.addeventlistener(event-name, callback, useCapture)

```
- event-name 事件名称，不能加on，如click
- callbakc，回调函数，事件触发时，回调函数的参数是当前的事件对象，event
    - event.preventDefault() : 禁止默认事件，比如a标签的默认行为是跳转页面
    - event.stopPropagation() : 阻止事件从目标阶段向上冒泡，阻止任何父事件处理程序被执行
    - event. stopImmediatePropagation() : 既能阻止事件向上冒泡，还能阻止元素同事件类型的其他监听器被触发
    - event.target: 事件的真正发出者
    - event.currentTarget: 始终是监听事件者
- useCapture: 是否捕获阶段执行，默认值是false


** Dom 3级事件处理 **
在dom 2级基础上添加了事件类型，如焦点事件、鼠标事件


### 事件流模型

事件:事件 就是可以被js 侦测到的行为，如click、load、change  
事件流: 
- 当一个节点产生一个事件时，该事件会在元素节点与根节点之间按特定顺序传播，路径所经过的节点都会收到该事件，这个传播过程称为事件流
- 事件在页面中的响应顺序就是事件流
事件流三个阶段：
- 捕获阶段: 事件从window对象自上至下，向目标节点传播的阶段, window\document\html\body\....目标元素
- 目标阶段: 目标节点正在处理事件的阶段
- 冒泡阶段: 目标节点从下至上的传播阶段


事件委托，就是事件代理
利用事件冒泡，只指定一个事件处理程序，可以管理某一类型的所有事件  

优点:
- 减少内存消耗，提高性能: 如果给每个元素都添加事件绑定，dom引用多，消耗内存，通过事件委托，只需要给一个父节点绑定事件，减少内存消耗

- 动态绑定: 通过事件委托，给父节点绑定事件，父节点内部新增节点，都会自动添加该事件监听



### BOM
Browser object model，浏览器对象模型


这个对象对应着浏览器窗口 window，BOM提供了用于访问浏览器的功能，这些功能和网页内容无关


- window
- location
- history
- navigator


[事件流模型](https://segmentfault.com/a/1190000015719043)


[深入理解dom事件机制](https://cloud.tencent.com/developer/article/1441330)

