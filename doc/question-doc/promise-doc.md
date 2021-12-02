实现一个函数，对http 请求做并发限制。如： limitRequest(arr, maxLimit)

```

function limitRequest(arr, maxLimit) {



}



function fetch (url) {
    return new Promise((resovle, reject) => {
        resovle(url);
    })
}

function request(url) {
    setTimeout(() => {
        console.log(`request ${url} success`);
    }, 200);
}
```


https://blog.csdn.net/u012384510/article/details/112551429