## xss
xss：cross site scripting：跨站脚本攻击，代码注入攻击

含义: 没有对用户的输入做足够的过滤，导致浏览器在渲染服务器返回的html时，出现了预期之外的脚本语句执行  
举例：文章的评论区，如果input中输入 script语句，会导致访问该文章的所有用户的cookie变得不安全  
危害: 
- 获取信息，如cookie
- 劫持流量，实现恶意跳转

输入限制,加以防范: 
- 过滤能够注入脚本的标签、img、script、a
- html转义
- 长度限制


### csrf：Cross Site Request Forgery：跨站请求伪造
伪装成受信任用户 发起请求


举例：用户访问了网站A，生成了cookie，在不退出A 网站的情况下，登录了网站B，在 网站B 发起一个对A的请求，会自动带上用户在A的cookie


CSRF攻击类型：
- GET
    - 自动型：网站B中img 、script 标签嵌入链接，网页加载的时候就会自动发起请求
    - 手动型：网站B中 各种url链接，需要手动点击
- POST
    - 自动提交表单发送post 请求


如何防范：
- token 存到 http header中自定义属性中验证： 如果网站A 有xss攻击风险，那么这种方案也无用
- 利用 refer 进行同源检测： 缺点是 部分情况下会没有refer，如直接通过ur访问
- sameSite cookie： 从网站B发起的请求不会自动附上cookie



### csrf 与XSS 的区别

- csrf 借用用户权限，看不到cookie内容，实施破坏
- Xss是获取用户的权限，实施破坏

### 防盗链
网站A 直接引用 网站B的图片资源，用户访问A 时，图片链接 会从 B 请求资源。A没有任何付出就消费了B资源


refrer检测 是否同源



### csp：content security policy
规定页面中资源有哪些来源，指定资源白名单



### 同源策略
浏览器具有 同源策略 安全限制

- 同源：协议、主机、端口都一致： 限制不同来源document 或脚本，对当前 document读取或设置属性
- 如果没有同源策略，很容易读取任意域名下的cookie，很容易发起 csrf 攻击


同源策略的口子
- img、script、iframe、link等标签不受浏览器同源策略的影响
- 子域可以共享父域的cookie


绕过同源
- jsonp： 动态添加script，src设置为资源访问链接，response放在链接的callback中返回
- cors： cross-origin resource shareing
    - 原理是：给http请求头增加特定的值，由服务端定义允许来自哪些域的请求。如 设置：Access-Control-Allow-Origin。
    - w3c提出的一种用于服务端控制数据跨域传输的一个机制
- window.postMessage： postmessage发送消息，onmessage 接受消息。跨域文档之间的通信，把文本消息从一个域发送到另一个域
- 设置documen.domain： documen.domain 会导致 端口号为null，如果不设置另一个域名，端口号不一致，也视为跨域，因此需要对两个域名同时设置。
- WebSocket
    - 一种服务器推送技术的，服务器可以主动向客户端推送消息，客户端也可以主动向服务器发送消息
    - WebSocket没有同源限制
- 反向代理配置转发
    - 正向代理：隐藏客户端，如vpn
    - 反向代理：隐藏服务端，如 负载均衡








[Cookie 的 SameSite 属性](http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html)
[通过Nginx反向代理的方式解决跨域问题](https://www.cnblogs.com/ddlove/p/9945988.html)
[websocket教程](http://www.ruanyifeng.com/blog/2017/05/websocket.html)
[浏览器跨域限制概述](https://cloud.tencent.com/developer/article/1504163)