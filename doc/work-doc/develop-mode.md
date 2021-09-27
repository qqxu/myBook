### 开发模式

原生开发
- 优点：
    - 可以访问手机所有功能
    - 运行速度快、性能高
- 缺点：
    - 开发效率低，开发完成需要重新打包整个app
    - 版本发布 依赖用户的更新
    - 可移植性差，两端开发相同功能


H5开发：
- 优点：
    - 跨平台
    - 开发周期短
    - 无需用户手动更新
- 缺点：
    - 对联网要求高
    - 功能有限，无法调用硬件


混合开发

jsBridge： 通过协定协议，实现native 和web端双向通信的一种机制
 客户端通过 webview.loadUrl("javascript: funname()")

- Native调用web端： 直接在js context中运行js代码
- web调用native
    - 基于 url schema的拦截操作
    - js context 中注入api

web发送url的几种方式
- a: 需要用户手动点击
- ajax: 安卓没有相应的拦截方法
- location.href: 可能会引起页面跳转，调用丢失
- img src: 符合自定义schema就拦截，发起原生调用, 不符合自定义schema 就放行


**什么是webview**
原生提供的运行js的环境，是一种嵌入式浏览器，原生可以用webview来展示网络内容


[开发模式的介绍](https://zhuanlan.zhihu.com/p/343732539)
