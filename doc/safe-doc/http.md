## http


什么是协议: 计算机之间为了实现通信而达成的一种的规则或约定

http：HyperText Transfer Protocol
- 用于传输超文本的传送协议
- 默认端口号80
- request包括以下格式：请求行、请求头、空行、请求数据
- response 包括：响应行、消息报头、空行、响应正文
    - content-type： 定义网络文件的类型和网页编码，决定浏览器以什么形式，什么编码读取这个文件




http请求可以使用多种请求方式

|method|含义|
|------|-----|
|GET|读取数据：请求特定的页面信息，返回实体主体|
|post|新资源的建立或已有资源的修改|
|head|获取报头：在不传输全部内容的情况下，获取服务器的响应头信息|
|options|返回资源所支持的所有http请求方法, cors跨域资源共享时，使用options 发送嗅探申请，以判断是否有对指定资源的访问权限|
|put|向指定资源位置上传最新内容，更新. put方法是幂等的方法,同一个系统，使用同样的条件，一次请求和重复的多次请求对系统资源的影响是一致的。 f(x) = f(f(x))|
|patch|对资源的更新.与put的区别: put用于整体资源更新，put只针对已有资源更新; patch 用于资源的部分更新，资源不存在时，会创建一个新资源|
|delete|删除uri所标识 的资源|
|trace|请求服务器回显收到的请求信息,主要用于http请求的测试或诊断|
|connect|预留给能够将连接改为管道方式的代理服务器|



http状态码

状态码分类:
- 1**: 信息，服务器收到请求，需要请求者继续执行操作
- 2**: 成功，操作成功接收并处理
- 3**: 重定向，需要进一步操作以完成请求
- 4**: 客户端错误，请求语法错误
- 5**: 服务端错误，服务器在处理请求的过程中发生了错误

常见状态码
- 200
- 403: 服务端理解请求，但拒绝执行。有可能网关没有配置
- 404
- 500
- 301: 资源已经被永久转移，客户端应该更换请求uri
- 302: 资源临时被转移，客户端可以继续使用原来的uri
- 304: 请求的资源未被修改 服务器返回304时，不会返回任何资源
- 401： 要求用户身份认证
- 504： gateway time-out， 充当网关或代理的服务器，未及时从远端服务器获取请求
- 502： bad gateway，作为网关或代理的服务器，从远端服务器接受了一个无效的效应
- 503： service unavailable，超载或系统维护，服务器暂不可用




### http 1.1 和http2.0区别
- 多路复用： 同一个连接并发处理多个请求
- 数据压缩： http2.0 增加header数据的压缩，数据体积减少，传输更快
- 服务器推送： 服务器对客户端的一个请求有多个响应


### https
- 主要作用：对数据进行加密，建立一个信息安全通道，保证传输过程中的数据安全；对网站服务器进行真实身份认证
- 对http增加了 身份验证（数字证书）、完整性校验（数字签名）、信息加密（对称加密和非对称加密），就是https




