### 定时器

- setTimeout: 延迟n毫秒，执行一次
- setInterval: 每隔n秒，执行一次


如果行为持续触发，减少执行次数就是节流，如resize
如果行为持续触发，只执行一次，就是防抖，如百度搜索

### demo


```
function debounce(func, wait) {
    var timer;
    return function() {
        if (timer) { clearTimeout(timer); }
        timer = setTimeout(func, wait);
    }
}

function throttle(func, wait) {
    var timer;
    return function() {
        if (!timer) {
            timer = setTimeout(() =>{
                func && func();
                timer = null;
            }, wait);
        }
    }
}
```



### ajax
setInterval 和 ajax 一起使用的时候 需要注意， 如果接口时间过长，setInterval 会每隔n秒就会塞入一个请求，请求会堆积

setTimeout 表示 延迟n秒后执行，




[防抖和节流](https://www.jianshu.com/p/566c66aafa22)


