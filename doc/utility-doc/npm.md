###  npm

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


### 模块查找顺序
在当前模块路径下查找
在当前模块的 node_module 中查找
在上级模块的 node_module 中查找
... 
直到搜索到全局的 node_module




### nrm 

nrm ls

nrm use caijj

###  nvm 

nvm install 13
nvm use 13

参考资料
[npm install 原理](https://cloud.tencent.com/developer/article/1555982)