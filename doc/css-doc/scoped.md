### ellipse
```

.txt-ellipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

```

ellipsis无法作用域 flex元素
可以在外层套一个父元素，设置父元素flex布局，并且对父元素 设置 `overflow: hidden;`
子元素设置 txt-ellipsis，就可以显示省略号了