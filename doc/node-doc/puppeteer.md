

### puppeteer



1. 无法安装 puppeteer
报错信息：
ERROR: Failed to set up Chromium r901912! Set "PUPPETEER_SKIP_DOWNLOAD" env variable to skip download.

解决方案：

```
export PUPPETEER_SKIP_DOWNLOAD='true'
npm i puppeteer -S

```

2. 手动下载Chromium

- [下载Chromium](https://downloads.digitaltrends.com/chromium/mac)
- 存放到项目目录
- 修改执行路径(`puppeteer.launch`)

```
// index.js

const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: path.resolve('./chrome-mac/Chromium.app/Contents/MacOS/Chromium')
  });
  const page = await browser.newPage();
  await page.goto('http://www.baidu.com/');
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})()

```


3. 与命令行交互 `inquirer`
使用 inquirer 命令行交互， 不影响 浏览器页面运行

```
const puppeteer = require('puppeteer-core');
const path = require('path');
const inquirer = require('inquirer');
const inputTypeDelay = 5;

(async () => {
  
  ...
  const userNameIpt = await page.waitForSelector('input#username');
  await userNameIpt.type(account, { delay: inputTypeDelay });

  const pwdIpt = await page.waitForSelector('input#password');
  await pwdIpt.type(pwd, { delay: inputTypeDelay });

  const loginBtn = await page.waitForSelector('input#kc-login');
  await loginBtn.click();

  const { vcode } = await inquirer.prompt([
    {
      type: "input",
      name: "vcode",
      message: "请输入wiki验证码"
    }
  ]);

  const vcodeInput = await page.waitForSelector('input#totp');
  await vcodeInput.type(vcode, { delay: inputTypeDelay });

  const vcodeLoginBtn = await page.waitForSelector('input#kc-login');
  await vcodeLoginBtn.click();
  ...
})()

```


4. 使用innerText获取元素

```
// 找到list
  const list = await page.$$('.s-bottom-layer-content > p'); 

  // 获取所有list的innerText
  const allTxt = await Promise.all(list.map(async (itm) => {
    return await itm.$eval('.text-color', node => node.innerText);
  }));

  // 涉及到异步函数，不能直接使用find 或filer
  const selectedIdx = allTxt.findIndex(ele => ele === '帮助中心');
  const selectedEle = list[selectedIdx];
  await selectedEle.click(); 

```


项目目录：
[puppeteer-mock-browser](https://github.com/qqxu/puppeteer-mock-browser)


参考资料
[手动设置启动浏览器地址](https://www.jianshu.com/p/873f0bb2c3e5)
[puppetpeer实例](https://www.cnblogs.com/wuweiblogs/p/12917136.html)