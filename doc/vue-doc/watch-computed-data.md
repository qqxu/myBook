### 如何实现响应式

### data 为什么是function
工厂函数


### computed
- 依赖的属性必须在data或prop中提前定义过，否则不会执行computed逻辑
- 计算属性 有缓存，当依赖的属性（ data或prop中提前定义过）值改变时，会计算
- 需要有return值，可以在template中使用
- 属性名不可与 data 中同名，属性值会以data中的属性名对应的属性值为准，且不执行computed逻辑



### watch 
- 属性名必须在data或prop中提前定义过，否则不会执行watch逻辑
- 可以执行异步函数
- 无需return值
- 可以修改多个属性

### method
- 每次调用都会执行，无缓存


vue 中的computed 和watch 对于引用类型如何处理？
data 中定义
obj: {
    b: []
}

某个操作 obj.b.push(1);

watch 观察属性
obj 不会触发
obj.b 会触发
 

computed 
test {
    return obj.b; // 不会触发
    return obj; // 不会触发
}

test 在template中使用
 test {
    return obj.b; // 会触发
    return obj; // 不会触发
}
