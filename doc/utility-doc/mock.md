## mock

遇到的问题：

- 不同场景下，接口数据不一样，依赖服务端接口的话，可能需要换账号
- 每个项目只mock本项目涉及到的api接口，如果一个流程涉及到了两个项目，就需要同时开启两个项目，不太友好

基于上述问题，需要一个本地mock服务，可以包含所有api接口

- 利用express 开启本地服务器
- 利用charles 转发所有请求至 本地服务器

1. 开启服务

`index.js`

```
const express = require('express');

// 实例化express
const app = express();


// 启动服务器
const server = app.listen(3000, 'localhost', () => {
  const { address, port } = server.address();
  console.log(`Server running at http://${address}:${port}`)
})
```

2. mock接口数据

- 接口成功场景
`api.js`
```
const lendData = require('./data/lend.json');

module.exports = {
  'GET /api/lend/v2/trial': (req, res) => {
    res.status(200);
    res.send({
      ...lendData,
    });
  },
}
```

- 接口失败场景
`api.js`
```
const err = require('./data/err.json');

module.exports = {
  'GET /api/lend/v2/trial': (req, res) => {
    res.status(500);
    res.send(err);
  },
}
```

- 接口超时
`api.js`
```
const err = require('./data/err.json');

/**
 * @description: 设置延时，可用来测试接口超时
 */
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
  'GET /api/lend/v2/trial': async (req, res) => {
     await wait(10000);
    res.status(500);
    res.send(err);
  },
}
```

3. 浏览器访问http://localhost:3000/api/lend/v2/trial

4. charles =》 map remote


[项目地址express-mock-server](https://github.com/qqxu/express-mock-server)