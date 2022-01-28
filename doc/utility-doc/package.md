### 版本号

`package.json` version格式 `x.x.x`,  遵循“大版本.次要版本.小版本”的格式规定

~1.2.2  表示只更新小版本，意味着1.2.x， 安装依赖需要大于等于 1.2.2
^1.2.2 表示可以更新次要版本、小版本，意味着 1.x.x， 安装依赖需要大于等于1.2.2


### package-lock

1. npm i 报错
报错信息：
```
npm ERR! code EINTEGRITY
npm ERR sha512xxxx
```

解决方案：
- 删除package-lock.json
- npm cache verify  // 
- rm -rf node_modules
- npm cache clean --force  // 删除所有缓存文件
- npm i


参考资料
[package.json中版本号详解](https://blog.csdn.net/weixin_40817115/article/details/86611179)
[npm install报错](https://www.cnblogs.com/chen8840/p/10002785.html)