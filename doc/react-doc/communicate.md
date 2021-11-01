
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


#### 多个ref

父组件存储多个ref子组件

```


function Supplement(props: SupplementProps) {

  let formItemRefList = useRef<IformItemRef[]>([]);  // 父组件存储的ref
 
  const onChange = (contactGroupResult) => {
    const params = {
      [key]: {
        value: contactGroupResult,
        required: true,
        validateTrigger: () => {
          return formItemRefList?.current[key]?.onValidate();   // 父组件调用子组件的方法
        },
      },
    };
  };

  return (
    <>
      {
        list?.map((itm) => {
          const { key } = itm;
          return (
            <ContactGroup
              key={key}
              ref={(ele: IformItemRef) => {
                formItemRefList.current[key] = ele;   // 每个子组件的实例 存储到 父组件中
              }}
              onChange={(res) =>
                onChange(res)
              }
            />
          );
        });
      }
      <Button onClick={onPreSubmit}>
        {btnText}
      </Button>
    </>
  );
}

export default Supplement;

```