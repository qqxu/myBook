### projj

```
// 全局安装
yarn global add projj


//  set  base direction 用来设置下载的代码存放的位置
projj init


// 从远程拉取 新的 repository
projj add git@gitlab.xxx.net:xxxx/xxx/xxx.git

// 导入 现有的 repository，路径 ~/code
projj import ~/Desktop/XQQ/Project

// 找 repository 的本地位置
projj find xxx

// 上述语句会找到项目路径，且已经拷贝到剪切板了，直接粘贴即可
cd ...

// 用vscode 打开当前路径
code . 
```

参考资料
[projj github](https://github.com/popomore/projj)

