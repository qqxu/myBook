## snippets
chrome-source-snippets

```
const H5_NAME = 'xxxx'

const sleep = (time = 10000) => {
  return new Promise((resolve) => setTimeout(resolve, time));
}

(async function(){

    // 左侧菜单 离线包管理
    const pkgMenu = document.querySelector('span[title=离线包管理]');
    pkgMenu.click();

    await sleep();  // 等待页面刷新

    const h5appNameListDoms = document.querySelectorAll('.nebula-h5nebulalist-h5-name');
    var h5appNameList = [...h5appNameListDoms];

    // h5 appname 
    const h5appDom = h5appNameList.find(node => (node.innerText.toLocaleLowerCase().indexOf(H5_NAME) > -1));

    h5appDom.click();

})();


```