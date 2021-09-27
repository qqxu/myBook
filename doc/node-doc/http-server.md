### 开启本地服务器

```
sudo npm install http-server -g
// 如果安装很慢，切换源
// nrm use taobao


z <path>
hs -o // 服务启动好后，打开浏览器 

Starting up http-server, serving .
Available on:
http://127.0.0.1:8080  // 代表本机地址，可以在电脑上直接访问
http://192.168.1.229:8080 // 代表在局域网里的地址，如果手机与电脑同属一个局域网，那么可以通过这个地址加载H5
http://192.168.2.1:8080  // 代表电脑的wifi地址，如果手机连接的是电脑的热点，那么可以通过这个地址加载H5
Hit CTRL-C to stop the server
```


[http-server 参数](https://www.npmjs.com/package/http-server#available-options
)

```

hs  -p 8090 -o  // 以8090端口打开服务

```

