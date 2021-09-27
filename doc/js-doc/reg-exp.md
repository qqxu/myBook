输入项下拉匹配值正则高亮


```
const formatRedList = (list, iptVal) => {
    const ipt = iptVal.split('').join('|');  // const regex = /e|r/;
    const regExp = new RegExp(ipt, 'g'); // 全局匹配，动态正则

    return list.map(itm => {
    return itm.replace(regExp, (word) => {
        return `<span style="color: #1D96E5;">${word}</span>`;
    });
    });
}

formatRedList(['12323', 'ewer34343', 'ee'], 'er');

["12323", 
"<span style="color: #1D96E5;">e</span>w<span style="color: #1D96E5;">e</span><span style="color: #1D96E5;">r</span>34343",
"<span style=\"color: #1D96E5;\">e</span><span style=\"color: #1D96E5;\">e</span>"]

```