### 虚拟dom
jsx: html in js

流程：

- babel 找到所有的jsx节点，转成 h 函数的调用，h函数的输出，为json 对象，即虚拟dom，vNode
- 页面主入口的 render 函数，已经是树结构的 Dom  jsx，最后的输出就是带有子孙节点的vNode 树
- 深度优先: 如果不是组件，创建真实的dom元素，遍历处理子节点。如果是组件，调用组件的render方法，获取组件的 VNode 树


### diff 算法
- 同层比较
- 通过 开始、结束索引，比较同层的节点，从两边向中间靠拢，直到新的或者老的同一层的节点的 endIdx 大于startIdx，退出循环
- 新的多余，则新增，老的多余则删除


### 设计模式
- MVC： 单向数据流
- MVP： presenter 解耦 view 与model，presenter分别与 view 、model通信
- MVVM： viewModel构建状态数据，view根据viewModel渲染视图







[虚拟dom树](https://efe.baidu.com/blog/the-inner-workings-of-virtual-dom/)
