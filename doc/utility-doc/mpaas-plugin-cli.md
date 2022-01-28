### 搭建脚手架

package.json bin 注册指令：
```
"bin": {
    "mpaas": "bin/index.js"
},
"main": "bin/index.js",

```


1、npm unlink 无效，直接进入目录，删除link的文件
npm list --depth=0 -g

2、pub 之前需要把 commit 上传

3、发布之后  脚本命令失效了
必须在package.json 的 scripts 中使用，在node_modules中查找

如果需要项目目录下直接 运行 ，需要全局安装



4、使用 readFileSync 只能读取已存在的文件，读取的结果是 包含了空格的string

如果是不存在的目录，会报错
如果是不存在的文件，会报错

如果是目录，会报错
如果是文件，成功
如果是错误的json文件，也可以读取成功

  const dataStr = fse.readFileSync(`config/mpaas.json`, 'utf8’);  // 读取结果为 string
    const configJSONStr = updateJsonFile(dataStr, mPaasConfig);  // 利用正则匹配更换成 新的string
    fse.writeFileSync(`zip/mpaas.json`, configJSONStr)  // 输出新文件



5、readJSONSync 会读取json文件，校验json格式，结果为 object
如果是不存在的目录，会报错
如果是不存在的文件，会报错

如果是目录，会报错
如果是文件，会成功

如果是 格式错误的json文件，会报错

const dataObj = fse.readJSONSync(`config/mpaas.json`, 'utf8’);  // 结果为 object，如果使用  JSON.stringify 会去掉 空格


JSON.stringify(val, replacer, ident)
replacer 用来序列化
ident 缩进字符串


6、publish之前 检查工作空间


查看命令提示
```
npm help outdated  
npm outdated  // 提示项目依赖包的版本情况

npm help prune 
npm prune  //  删除多余的包
```

--pretty='format:%C(auto)%h (%s, %ad)'


https://git-scm.com/docs/pretty-formats





追加内容
  fse.appendFileSync('CHANGELOG.md', `${aa} \n`);

写文件内容
  fse.writeFileSync('CHANGELOG.md', `${aa} \n`);



// 交互确认需要改的版本类型
 const { versionType } = await inquirer.prompt([
    {
      type: "list",
      name: "versionType",
      message: "请选择更改的版本号,major.minor.patch",
      choices: ["major", "minor", "patch"],
      default: "patch"
    }
  ]);

git tag -d v1.0.1

https://www.yiibai.com/git/git_tag.html



如果没有装 git 会报错
childProcess.execSync('git status -s')



https://cloud.tencent.com/developer/article/1508321#:~:text=%E5%A6%82%E6%9E%9C%E4%BD%A0%E4%B8%8D%E5%85%B3%E6%B3%A8%E6%9C%AA%E7%BA%B3%E5%85%A5%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6%E7%9A%84%E6%96%87%E4%BB%B6%20%28untracked%29%E7%9A%84%E6%96%87%E4%BB%B6%EF%BC%8C%E4%BD%BF%E7%94%A8%20git%20diff%20%E5%B0%B1%E5%8F%AF%E4%BB%A5%E5%88%A4%E6%96%ADgit%E5%B7%A5%E4%BD%9C%E6%96%87%E4%BB%B6%E5%A4%B9%E6%98%AF%E5%90%A6%E5%B9%B2%E5%87%80%EF%BC%8C%E5%A6%82%E6%9E%9C%E6%98%AF%E5%B9%B2%E5%87%80%E7%9A%84%EF%BC%8C%20git%20diff%20%E5%B0%86%E6%B2%A1%E6%9C%89%E8%BE%93%E5%87%BA%EF%BC%8C%E5%90%A6%E5%88%99%E8%BE%93%E5%87%BA%E4%BF%AE%E6%94%B9%E7%9A%84%E6%96%87%E4%BB%B6%E7%9A%84%E5%B7%AE%E5%BC%82,%20then%20echo%20%27dirty%27%20else%20echo%20%27clean%27%20fi
