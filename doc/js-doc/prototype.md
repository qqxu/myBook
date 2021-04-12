### 原型链

**三条原则**
- 对象具有 `__proto__` 属性，总是指向构造函数的 prototype
- 函数具有 `prototype` 属性，`prototype` 具有 两个属性 ：`constructor、__proto__`
- 一切皆对象， 终点 `Object.__proto__` 是null

![原型链](./img/prototype.png)

