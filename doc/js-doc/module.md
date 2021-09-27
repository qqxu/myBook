### 导出

1. 统一导出: 先声明，最后统一导出            
    ```
    function test() {...}
    function test2() {...}

    export {
        test,
        test2
    }
    ```       

2. 声明前导出: 声明的同时导出                 

    ```
    export function test() {...}
    export function test2() {...}

    ```

### 导入    
1. 导入       

    ```
    import { test, test2 } from '..'
    ```

2. 全部导入： 需要导入的非常多，可以使用全部导入       

    ```
    import * as Fun from '..'
    Fun.test()
    Fun.test2()

    ```

** 不建议使用全部导入方式 **，应当 *使用哪些模块就导入导入哪些模块*：
- 构建工具打包时会删除未使用的模块，以减小打包后的文件体积，tree-shaking
- 写法简单，阅读代码容易


### 重命名导入导出    
1. 导出为 export as

    ```
    export {
        test as say,
        test2 as eat,
    };

    ```

2. 导入为 import as      
    如果导入变量或方法与当前文件中代码重名了，可以让导入具有不同的名字
    ```
        import { test as say, test2 as eat } from '..'
        say();
        eat();
    ```


### 默认导入导出
一个模块只做一件事，就可使用 默认导出     

1. 如果有默认导出，那么导入时就不需要使用`{}`
    ```
        export default class User {...}

        import User from '..'
    ```
2. 默认导出可以匿名
    ```
        // user.js
        export default class {...}

        import User from './user.js'  // 可以引入
        new User();

    ```


### re-export

```
// test.js
export const test = () => {...};
export const test2 = () => {...};

// 列出需要的，index.js
export { test, test2 } from './test.js';
// 或者全部导出，index.js 
export * from './test.js';

// 默认导出需要 使用下面的语法
export { default as User } from '..';
```

** 开发实践 **
- 如果一个文件只做了一件事，可以使用默认导出
- 如果是一个工具集文件，使用 声明前导出 方式
- 模块统一收口文件，可以 使用 re-export


参考资料          
[完全弄懂JavaScript模块化(导出和导入)](https://zhuanlan.zhihu.com/p/82481219)
