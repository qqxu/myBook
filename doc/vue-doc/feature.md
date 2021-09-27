### 双向绑定
- 通过绑定事件，视图驱动数据
- 数据劫持，每次数据更新时，执行更新视图的操作
    - vue 2.0 通过object. defineProperty 的set方法，附加渲染视图的方法
        - 只能应用对象，不能用于数组
        - 递归遍历所有属性
        - 只能监听定义时的属性，不能监听新加或删除的属性

    - vue 3.0 利用proxy监听 // TODO



### 组件通信
- props和$emit
- bus
- provide和inject
- vuex


### 指令
- v-if：元素会被销毁，开销比v-show 大
- v-show：切换元素的style 为display none 
- v-once： 不需要表达式， 组件及节点只渲染一次
- v-on（简写 @）： 监听原生dom事件、监听自定义事件
    - @click="myFun" 中 myFun 第一个参数会是event对象
    - @click="myFun()" 中 myFun 第一个参数会是 undefined
    - @click="myFun(params, $event))"中 myFun 的第一个参数 会拿到 params，第二个参数会拿到event 对象
- v-bind（简写冒号 :）
    - 用于绑定 html 属性
    - :class=classProperty classProperty可以使用对象，函数，数组，支持单一的js表达式，转成string
- v-model: v-bind:value 与 v-on:input
    - 任意值变动都会触发oninput 
    - 失焦+值变化时，才会触发onchange
    


[v-bind](https://www.jianshu.com/p/98dfa4c6389c)