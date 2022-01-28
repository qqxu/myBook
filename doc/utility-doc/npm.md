#  npm

*遇到的问题*：npm安装包依赖时卡死不动


## npm 做什么
npm（Node Package Manager）
- 共享代码 
- 用来管理项目依赖包

### 共享代码
场景：项目A中写了个弹窗组件，此时项目B中想用这个弹窗，那可以拷贝文件至项目B中。如果项目C、D、E...都要用这个弹窗怎么办？

```
cd Desktop
// 创建 test-shared目录
mkdir test-shared
// 进入目录
cd test-shared

// 生成 package.json文件
npm init

// 新建js文件
touch index.js



```


在多个业务场景中都用到了弹窗，但是这些业务场景属于不同的项目。





查看包信息，如最新版本、依赖数、已发布多少个版本、hash值
npm info @ahooksjs/use-request


查看依赖包的所有版本：
npm view <packagename> versions

- npm install 扁平化安装所有依赖

- 子依赖版本与已安装依赖版本不一致时，就会安装在子依赖的node_module中



比如某个项目 的依赖有 A和B，其中A 依赖0.1版本的c，B依赖0.2版本的c

- A
    - c 0.1
- B
    - c 0.2

那么项目的package.json 文件dependecne如下

```
{
   "dependencies": {
    "A": "0.0.1",
    "B": "0.0.2"
  }
}
   
```



根据上述规则，项目的node_module文件结构如下 
- A 0.0.1
- B 0.0.2
    - c 0.2
- c 0.1


如果将 dependencies 的依赖顺序修改

```
{
   "dependencies": {
    "B": "0.0.2",
    "A": "0.0.1",
  }
}

```

就会导致项目的node_module文件结构变更，如下 
- A 0.0.1
    - c 0.1
- B 0.0.2 
- c 0.2

那么模块查找时 顺序就会不一致，
因此 当 package.json更改时， 会生成 package-lock.json 它准确的描述了当前项目npm包的依赖树
     并不是所有的子依赖都有 dependencies 属性，只有子依赖的依赖和当前已安装在根目录的  node_modules 中的依赖冲突之后，才会有这个属性。

## npm 怎么做

### 模块查找顺序
在当前模块路径下查找
在当前模块的 node_module 中查找
在上级模块的 node_module 中查找
... 
直到搜索到全局的 node_module




### nrm 

nrm ls

nrm use xxx

###  nvm 

nvm install 13
nvm use 13

### .npmrc
npm running cnfiguration, 即npm运行时配置文件
帮助开发者安装需要的依赖

npmrc 不止一个，取值顺序：
- 项目的 npmrc：用于管理这个项目的npm 安装
- 用户的 npmrc：当前电脑登录用户
- 全局配置文件
- npm 内嵌配置文件


```

npm config get registory

// 设置 淘宝源
npm config set registry=https://registry.npm.taobao.org/

```


### 限制项目的node版本
1. 遇到的问题
- 项目多人协作时，部分同事手动更改 package-lock.json，失去 package-lock 的意义
- 部分同事的 node 版本无法成功安装项目依赖，切换成yarn，使得yarn、npm混用，无法保证生产打包的稳定性

2. 解决方法
- package.json限制node、npm 版本
  ```
    "engines": {
      "npm": ">=6.0.0",
      "node": ">=12.0.0"
    }
  ```
- 项目目录新建.npmrc，然后增加配置 `engine-strict=true`， 当其他用户使用不匹配的版本安装依赖时，会提示错误

- .npmrc 限制源地址，key=value 形式配置

  ```
  // .npmrc
  engine-strict=true
  registry=https://registry.npm.taobao.org/

  ```

- `npm i`后，如果package-lock.json没有自动更新，可以检查npmrc中的package-lock.json=false，需要改为true


  


###  npm  VS  yarn
显示安装过程的详细信息
`npm install --verbose`

### yarn
`yarn --verbose`
- 检查项目目录下配置文件 /Users/qqxu/Desktop/project/xxx/.npmrc
- 检查登录用户的配置文件 /Users/qqxu/.npmrc
- 检查yarn配置文件: 同上一层一层目录查找 /Users/.yarnrc
- 在项目目录下创建 /Users/qqxu/Desktop/project/xxx/node_modules/react-dom  等等
- 移动下载包：  Copying "/Users/qqxu/Library/Caches/Yarn/v6/npm-js-tokens-4.0.0-19203fb59991df98e3a287050d4647cdeaf32499-integrity/node_modules/js-tokens/index.js" to "/Users/qqxu/Desktop/project/xxx/node_modules/js-tokens/index.js".
- 删除无关文件：Removing extraneous file "/Users/qqxu/Desktop/xxx/node_modules/@types/babel__template"
- 构建新包
- 保存lockfile


### install-dependence
```
git init install-dependence && cd install-dependence 

// 生成package.json 
npm init 

// 测试npm install 信息
npm install @ahooksjs/use-request --verbose

// 测试yarn安装信息
yarn add @ahooksjs/use-request --verbose

```


### yarn.lock
1. 变更时机：
- 更新 packag.json 中的依赖 `yarn `安装依赖后，会自动更新 yarn.lock

2. 内容

```

"@ahooksjs/use-request@2.8.15":
  version "2.8.15"
  resolved ""
  integrity sha512-xhVaM4fyIiAMdVFuuU5i3CFUdFa/IblF+fvITVMFaUEO3w/V5tVCAF6WIA3T03n1/RPuzRkA7Ao1PFtSGtGelw==
  dependencies:
    lodash.debounce "^4.0.8"
    lodash.throttle "^4.1.1"

lodash.debounce@^4.0.8:
  version "4.0.8"
  resolved ""
  integrity sha1-gteb/zCmfEAF/9XiUVMArZyk168=

lodash.throttle@^4.1.1:
  version "4.1.1"
  resolved ""
  integrity sha1-wj6RtxAkKscMN/HhzaknTMOb8vQ=
```

- Identifiers: 第一行代表包名，对应package.json中包名及版本区间。可以有多个,表示该项目有针对改包的不同版本依赖，最终都指向同一个version

```

"@ahooksjs/use-request@1.8.15", "@ahooksjs/use-request@2.8.15",:
  version "2.8.15"
  ...

```
- version 表示实际安装的版本，满足 Identifiers 中的版本区间
- resolved 表示 下载这个包的地址，与npmrc中配置的registry有关
- integrity 用于检验下载下来的文件进行完整性：下载前通过  `npm info @ahooksjs/use-request` 就能找到这个包的integrity，`npm i `下载本地后会根据某种算法生成integrity，如果两者一样，说明下载下来的包是完整的
  
  ```
  npm info @ahooksjs/use-request
  // 生成内容
  dist
  .tarball: 
  .shasum: daa32a8395ba75e8deb9f4fde4e221a4a8f525db
  .integrity: sha512-xhVaM4fyIiAMdVFuuU5i3CFUdFa/IblF+fvITVMFaUEO3w/V5tVCAF6WIA3T03n1/RPuzRkA7Ao1PFtSGtGelw==
  .unpackedSize: 129.4 kB

  dependencies:
  lodash.debounce: ^4.0.8 lodash.throttle: ^4.1.1 
  ```
- dependencies 是该包自己的依赖

### npm 安装卡死

```
npm i --verbose
```

查看npm 官方文档 https://docs.npmjs.com/searching-for-and-choosing-packages-to-download


-npm search 包会根据：Popularity、Quality、Maintenance、Optimal 排序

- 验证包是否安装成功：ls node_modules

- 查看当前项目安装依赖包的版本与最新版本的对比情况, 在项目目录下：npm outdated
 ```
 // 与package.json要求中的包版本保持一致
  npm update
  ```

- 查看全局安装的依赖包版本情况：npm outdated -g --depth=0

- 更新依赖包至最新版本：
  ```
  // 更新全局某个依赖包至最新版本
  npm update -g <package_name>
  // 更新全局所有依赖包至最新版本
  npm update -g
  ```

参考资料

[npm install 原理](https://cloud.tencent.com/developer/article/1555982)

[specify-node-version/](https://reactgo.com/specify-node-version/)
[.npmrc](https://juejin.cn/post/6983522411647860766)
[yarn.lock ](https://zhuanlan.zhihu.com/p/400193691)
[npm install 整体流程](http://www.conardli.top/blog/article/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96/%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%8C%96%EF%BC%88%E4%B8%89%EF%BC%89npminstall%E5%8E%9F%E7%90%86%E5%88%86%E6%9E%90.html#%E6%95%B4%E4%BD%93%E6%B5%81%E7%A8%8B)
[npm官网](https://docs.npmjs.com/searching-for-and-choosing-packages-to-download)