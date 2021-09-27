### 继承

js 使用原型链实现继承（原型式继承 —— prototypal inheritance）

题目：一个person 类，具有name属性，greeting 方法，利用继承实现一个类 Teacher ，具有name、title属性，greeting、 teach 方法


```
function Person (name) {
    this.name = name;
    
    this.greeting = function() {
        console.log(this.name + '打招呼');
    }
}

```


### 原型继承 

```

function Teacher () {
    this.teach = function() {
        console.log(this.name + 'is ' + this.title + ' she is teaching');
    }
}
Teacher.prototype = new Person();
Teacher.prototype.name = 'Miss li';

Teacher.prototype.title = 'Professor';

var teacher = new Teacher();

```
缺点：不能向父类构造函数中传参数





[es5实现继承](https://www.jianshu.com/p/57aafceba57d)