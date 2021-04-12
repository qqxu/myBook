### 缓存

优点：
- 缩短网页请求资源的距离，减少延迟
- 缓存文件重复使用，可以减少带宽，降低网络负荷


数据请求分为三步：
- 发起网络请求
    - 直接使用缓存，不发请求
- 服务端处理
- 浏览器响应
    - 发起的请求，服务端存储的数据和前端一致，就不需要把数据回传过来，减少响应数据



#### 浏览器缓存

缓存位置：
- Memory cache
    - 读取内存中缓存比磁盘快
    - 关闭tab页面，内存中的缓存就会被释放
- disk cache
    - 根据http 请求头判断哪些资源需要缓存



用户行为：
- 打开url： 查找disk 是否有缓存匹配，如果有则使用，没有就发起请求
- 普通刷新： 先查询memory cache，其次disk cache
- 强制刷新： 浏览器不使用缓存


#### 强缓存
不会向服务器发送请求，直接从缓存中读取资源，chrome size会显示 from disk cache、from memory cahce


设置http header 实现
- Expires：指定到期时间
    - 受限与本地时间，如果修改本地时间，缓存会失效
- cache-control：请求头可以这样设置： cache-control: max-age=300, private
    - chache-control 优先级高于expires

|值     |                       内容                              |
|-------|--------------------------------------------------------|
|public|所有内容都可被缓存，客户端和代理服务器都可以缓存，响应可以被中间任何节点缓存|
|private|所有内容只有客户端可以缓存，cache-control的默认值。意味着中间节点不可缓存响应|
|max-age|max-age=300  表示缓存内容将在300秒后失效|
|s-maxage|与max-age作用一样，只在代理服务器中生效，如cdn|
|no-store|禁用缓存，所有内容都不会被缓存到|
|no-cache|每次都需要验证协商缓存的头，来确认|
|max-stale|能容忍的最大过期时间|
|min-fresh|能容忍的最小新鲜度|


强缓存判断是否缓存的依据来自是否超出某个时间段，不关心服务端是否已经更新

#### 协商缓存

last-modified: 资源在服务器上的最后修改时间

使用流程:

- 浏览器第一次访问资源时，返回资源及last-modified，浏览器缓存资源及头部信息。
- 第二次发起请求该资源时，将上一次返回的last-modified放入 if-modified-since请求头
- 服务器根据 最新资源的最后更新时间与if-modified-since 的值比较
    - 如果没有变化就返回空响应体和304
    - 如果有变化就返回最新的资源和200


缺点:
- 如果本地打开缓存，即使没有更改，也会使得 last-modified 修改, 造成服务器端匹配不成功
- last-modified是以秒为单位，如果在不可感知时间内更新文件，服务端认为还是命中缓存了，不会返回真正的资源


E-tag:服务器响应请求时，返回当前资源文件的一个唯一标识
- 由服务器生成
- 资源有变化，e-tag就会重新生成

使用流程：
- 浏览器第二次发起请求时，会将上一次返回的e-atg值放入if-non-match
- 服务器比较资源的e-tag与请求传过来的e-tag是否一致，决定是否返回资源


**last-modified和E-tag 对比**
- e-tag精确度高于last-modified
- e-tag性能弱于last-modified，因为需要服务器算法生成e-tag值，而last-modified只需要记录时间
- e-tag的优先级高于last-modified


**强缓存优先于 协商缓存**