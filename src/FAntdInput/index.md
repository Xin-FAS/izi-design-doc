---
title: FAntdInput 输入框
---

## FAntdInput

这是一个有各种常见业务场景的Antd Input组件

### 双向绑定

```jsx
import FAntdInput from 'izi-design-doc/FAntdInput';
import { useState, useEffect, useRef } from 'react';

export default () => {
    const state = useState();
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current?.focus()
    }, []);

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput state={state} ref={inputRef} />
    </>;
}
```

### 自动搜索

使用F12打开控制台查看输出

```jsx
import FAntdInput from 'izi-design-doc/FAntdInput';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('触发自动搜索：', value)
    }

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.Search state={state} autoSearch onSearch={onSearch} />
    </>;
}
```

可以使用`debounceDuration`属性控制防抖时间，默认`500`（毫秒）

### 搜索框

使用F12打开控制台查看输出

```jsx
import FAntdInput from 'izi-design-doc/FAntdInput';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('触发搜索：', value)
    }

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.Search state={state} onSearch={onSearch} />
    </>;
}
```

### 节流搜索

使用F12打开控制台查看输出

```jsx
import FAntdInput from 'izi-design-doc/FAntdInput';
import { useState } from 'react';

export default () => {
    const state = useState();

    const onSearch = value => {
        console.log('触发节流搜索：', value)
    }

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.Search state={state} throttleDuration={2000} onSearch={onSearch} />
    </>;
}
```

* 使用`throttleDuration`属性控制防抖时间，默认`0`（毫秒）
* 使用`throttleTrailing`属性控制时间结束后是否再次搜索，默认`false`

### 密码输入框

```jsx
import FAntdInput from 'izi-design-doc/FAntdInput';
import { useState } from 'react';

export default () => {
    const state = useState();

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.Password state={state} />
    </>;
}
```

### 单次密码输入框

```jsx
import FAntdInput from 'izi-design-doc/FAntdInput';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.OTP state={state} />
    </>;
}
```

### 文本框

```jsx
import FAntdInput from 'izi-design-doc/FAntdInput';
import { useState } from 'react';

export default () => {
    const state = useState('');

    return <>
        <p>Input Value：{state[0]}</p>
        <FAntdInput.TextArea state={state} />
    </>;
}
```

## FAntdInput

### Props

| 属性名   | 类型     | 是否必填  | 说明                      | 默认值 |
|:------|:-------|:------|:------------------------|:----|
| state | string | false | useState创建的state，用于双向绑定 |     |

其他Props同Antd Input

### Method

Method与Antd Input相同

### Ref

Ref与Input相同

## FAntdInput.Search

### Props

| 属性名              | 类型       | 是否必填  | 说明                      | 默认值   |
|:-----------------|:---------|:------|:------------------------|:------|
| state            | string   | false | useState创建的state，用于双向绑定 |       |
| autoSearch       | function | false | 输入时是否自动使用防抖搜索           |       |
| debounceDuration | number   | false | 开启autoSearch后，防抖时间      | 500   |
| throttleDuration | number   | false | 触发搜索事件时节流时间             | 0     |
| throttleTrailing | boolean  | false | 节流搜索时间结束后是否再次触发搜索       | false |

其他Props同Antd Input

### Method

Method与Antd Input相同

### Ref

Ref与Input相同

## FAntdInput.OTP
与Antd Input.OTP相同
## FAntdInput.Password
与Antd Input.Password相同
## FAntdInput.TextArea
与Antd Input.TextArea相同
