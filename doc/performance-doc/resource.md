### Performance

ECMAScript 5引入“高精度时间戳”这个API，部署在performance对象上, 所有主要浏览器都已经支持performance对象




### 资源加载时间

浏览器获取网页时，会对网页中每一个对象（脚本文件、样式表、图片文件等等）发出一个HTTP请求。performance.getEntries方法以数组形式，返回这些请求的时间统计信息，有多少个请求，返回数组就会有多少个成员。

** 由于该方法与浏览器处理网页的过程相关，所以只能在浏览器中使用。**


### process.env.NODE_ENV
值：通常为“production”（生产环境）和“development”（开发环境），或者“prod”和“dev”，以此来区分不同环境下的逻辑行为

process.env： nodejs 提供 `process.env`，表示项目运行环境的信息，其中并没`NODE_ENV`

#### 如何设置 NODE_ENV

1. package.json 的script 脚本设置

可 用于配置相关，例如在webpack.config.js里区分环境配置不同插件，作用于运行时

```
"scripts": {
  "dev": "NODE_ENV=development webpack --watch ",
  "build": "NODE_ENV=development webpack "
},

```

*NODE_ENV=development在windows环境下会报错，需要改为set NODE_ENV=production，为了解决这个差异，可以使用cross-env跨平台的设置和使用环境变量*

2. webpack4之前 使用 DefinePlugin 插件配置，作用于业务代码
```
// webpack.config.js

module.exports = {
    entry: {
        app: './src/app'
    },
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
};

```



3. webpack4版本之后可以通过mode选项实现，作用于业务代码

```
// webpack.config.js

module.exports = {
    // 定义环境变量
    mode: 'development',
    entry: './main.js',
    output: {
        ...
    }, 
};


```

webpack 定义的和script脚本定义的变量是互相独立的
- 脚本设置：NODE_ENV=development
- webpack.config.js的mode设置为 production

那么在 webpack.config.js配置文件中 NODE_ENV 的值是development，而业务代码中NODE_ENV 的值是production


### webpack publicpath
output.publicPath: 在项目中引用css，js，img等资源时加上一个前缀.

```
.box {
    background: url('icon.png') 
}

// 如果publicPath配置成了/assets/, 此时就会变成:
.box {
    background: url('/assets/icon.png') 
}

```

### DNS



### 对象存储 oss


### CDN

- 用户在浏览器输入 www.a.com/index.html ，首先向本地DNS 发起域名解析请求
- 本地DNS 检查缓存中 是否有 www.a.com 的IP地址记录。如果有，直接返回给浏览器，如果没有则向授权DNS查询。
- 授权DNS解析 www.a.com 时，返回域名 CNAME www.a.tbcdn.com对应的IP地址
- 域名解析 请求发送至 阿里云DNS调度系统，并未请求分配 最佳节点IP地址
- 本地DNS 获取DNS返回的解析IP地址
- 用户获取解析IP地址
- 用户项IP地址发起对资源的访问请求
    - 如果该IP地址对应的节点 已缓存资源，则会将数据返回给用户。请求结束
    - 如果未缓存该资源，则节点向源站 发起对资源的请求。 获取资源后，结合用户定义的缓存策略，将资源缓存到cdn 节点并返回给用户。此时请求结束。


[如何设置 process.env.NODE_ENV](https://www.cnblogs.com/ShuiNian/p/13211750.html)



[Performance API](http://javascript.ruanyifeng.com/bom/performance.html)



