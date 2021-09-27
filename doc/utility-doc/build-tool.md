### webpack 与 gulp的区别

- gulp是基于任务和流的，找到一个文件，对其做一系列链式操作，更新流上的数据，整条链式操作构成了一个任务。将整个构建拆分成多个任务，合理控制任务的调用关系。
- webpack基于入口，自动递归解析入口需要的资源文件，使用不同的loader处理不同的文件，用plugin扩展webpack功能 
    - 同样基于入口的文件构建工具: rollup:适用于基础库


### webpack
- 是什么
 webpack 是用来编译 js 模块      


- 为什么使用

普通情况下，一个html可以用 script标签 引入多个 js文件。

```
// index.html

<html>
<head>
  ...
</head>
<body>
<div id="app"></div>

<script src="xxxx/jquery.js"></script>
<script src="xxxx/lodash.js"></script>
<script src="xxxx/common.js"></script>
<script src="xxxx/index.js"></script>

</body>
</html>


```

但是这种写法，无法管理 js 模块，如：引入顺序、依赖情况（如 index 依赖 jquery ）

因此 可以在一个js 模块中 引入相应依赖方。

```
// index.js

console.log('hello world');


```

### module、bundle、chunk

#### 常见的loader
- file-loader: 把文件输出到一个文件夹中，在代码中通过相对url引用输出的文件
- url-loader: 与file-loader类似，但是在文件很小的情况下，以base64的方式，将文件内容注入到代码中
- source-map-loader: 加载额外的source-map文件，方便断点调试
- img-loader: 加载并且压缩图片文件
- babel-loader: 把es6转成es5
- css-loader: 加载css，支持模块化、压缩、文件导入等特性
- style-loader: 把css代码注入到js中，通过dom操作加载css
- eslint-loader: 通过eslint检查js代码

#### 常见的plugin
- define-plugin: 定义环境变量
- common-chunk-plugin: 提取公共代码
- uglifyjs-webpack-plugin: 通过UglifyES 压缩代码

#### pugin 和loader 区别
- loader 在module.rules中配置，plugin在plugins中单独配置
- Webpack 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果

#### 运行流程
- 初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数
- 开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译
- 确定入口：根据配置中的 entry 找出所有的入口文件；
- 编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
- 完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
- 输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
- 输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。


#### webpack优化打包
- 压缩代码
- 修改静态资源路径为cdn，publicPath 修改资源路径
- tree-shaking
- 提取公共代码
- 按需加载
- 作用域提升，Scope Hoisting: 需要添加模块关联插件ModuleConcatenationPlugin
    -  webpack 的引入都是把各个模块分开，通过 __webpack_require__ 导入导出模块   
    - 使用 scope hoisting 后会把需要导入的文件直接移入导入者顶部
        - 减少代码量
        - 减少多个函数后内存占用减少
        - 不用多次使用 __webpack_require__ 调用模块，运行速度也会得到提升


#### 提高webpack构建速度
- CommonsChunkPlugin 提取公共代码
- externals 配置提取常用库

[scope hoisting](https://segmentfault.com/a/1190000018220850)