1、 边框 boder 1px 问题

border: 1px solid red;

边框按钮样式有兼容性问题，在安卓4.4.4以下（oppo r7s）中会看不到border

利用阴影实现外边框，
box-shadow: 0 0 1px red; 

但是会出现高度撑不起来的问题：

再次添加：
        box-sizing: content-box;
        padding: 1px;


如果background-color跟border的color不一样的话   会出现背景色遮盖边框色

最好是用图片代替手写css


或者 直接：
方法一：

    box-shadow: 0 0 0 1px $mainColor;
    box-sizing: content-box;
    padding: 1px;


方法二：
1px 加倍，然后使用 scale 缩放



2、button disable 时 不会触发点击行为，可以用div代替button


3、 ios 验证码会重复输入，失焦时 判断长度是否属于【8，12，16】，然后判断一半是否相等，相等则截取，不等就不处理
输入时 做上述判断 无用，ios 自动填充的 无法触发 input事件



4、user-select: none 会导致input 输入框 只聚焦 弹出输入键盘，但是无法看到光标，且输入值不会变化


5、 useState 为一个对象时，且对象中引用了上次状态，



6、document.activeElement.blur() 可以取消软键盘，（如果没有生效，加延时即可）


7、  input[disabled] 移动端 会有自带样式
input[disabled] {
  opacity: 0.4;
}


8、 有输入框情况下，不要使用fixed 定位：
如果底部fixed定位，键盘弹起时，fixed布局的元素 ios会顺应文档流在页面最后，android 会固定在键盘上方
如果顶部fixed定位，键盘弹起时，会被顶上去，看不到，安卓暂未知


如果 改成flex，实现底部定位，会使得 滚动区有两层，无法精准滚动内容区

改用absolute定位


9. ios9 以上单击无法唤起键盘，只有双击才能唤起：引用promise-fetch-fastclick
200ms以内 才认为是双击


10. 软键盘弹出时，安卓会默认滚动页面顶部：延时滚动
如果输入框在第二页时，弹出输入框，可以通过延时设置滚动，实现 输入框到视图范围

export const scrollNodeToView = (elementNode) => {
  elementNode && elementNode.scrollIntoView({
    behavior: 'smooth',  // 平滑过渡
    block: 'start'  // 上边框与视窗顶部平齐。默认值
  });
};



12  dva 
问题表现：使用dva 发起 接口请求 yeid call时  由于接口的 方法是get 但是写成了post , 导致dva 报错dontReject of undefined
Error: BizError

原因：  yield  call 是同步阻塞调用， 如果前面一个接口异常，会阻碍下一个接口调用

解决方案：
1  可以用try catch捕获 绕过

2 或者 umi 的统一处理异常， errorHandler: (err) => { message.error(‘服务器出错了'); }


结果：此时就不会阻塞下一个接口调用

13  多行文本与 图片 如何垂直居中 
* span文字 多行 与img， img样式设为  vertical-align: middle;  
* position 绝对定位（无法多行 ）


14 解决低版本设备不支持箭头函数
dva: {
immer: { enableES5: true },
hmr: false,
skipModelValidate: true,
},

14 react 的 input ，当type 为text 时  maxLength 才有效果， type 为numer 时，加空格的内容 无法显示出来

