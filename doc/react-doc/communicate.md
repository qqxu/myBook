
### 父子通信
父组件调用子组件事件

```
import React, { forwardRef, useImperativeHandle } from 'react';

const ChildComp = forwardRef((props, ref) => (
  const onValidate = () => {
      console.log('子组件的校验方法');
      return false;
  }

  useImperativeHandle(ref, () => ({
    onValidate: onValidate,
  }));

  return (
    <div>
        <input {...props} />
    </div>
  )
));

```


父组件

```
const parentPage = () => (
  const cardFormEl = useRef();


  const onSubmit = () => {
     const result = cardFormEl.current?.onValidate();
     console.log('result', result);
  }

  return (
    <div>
        <ChildComp ref={cardFormEl} />
        <button onClick={onSubmit}> 提交 </button>
    </div>
  )
));


```