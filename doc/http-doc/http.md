## 识别用户的方式

http 事务是无状态的，通过用户识别机制可以实现
- 个性化问候
- 内容推荐
- 信息存档
- 记录会话（比如购物车场景，增量添加物品信息）


识别用户的方式有
- http 首部
- 客户端IP地址
- 用户登录
- 胖url
- cookie


### http 首部

- from： 用户email地址
- user-agent：记录操作系统、浏览器信息
- referer：用户来源页面的url


### 客户端IP地址
每个用户有不用的IP地址

缺点：
- IP地址描述的是机器，而不是用户
- 如果连接了代理，则是代理的IP地址
- 因特网服务提供动态分配IP的功能
- 网络地址防火墙


### 用户登录

- 用户名、密码登录
- authorization 首部带上登录信息
- 每次请求时，浏览器会带上存储的信息放在 authorization 中

### 胖url
 path 中带上状态信息

 缺点：
 - 无法将url分享给其他人
 - 无法缓存
 - 会话非持久，需要收藏胖url，否则失去所有信息

 ### cookie
 
