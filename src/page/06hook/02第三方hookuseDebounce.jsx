import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Input,Button } from 'antd'
import { useDebounce } from 'use-debounce';
export default function Index() {
  const [text, setText] = useState();
  
  // 用处:输入框的防抖操作,用防抖后的值去请求数据啦,比较好用
  const [value] = useDebounce(text, 300);

  return (
    <div>
      <Button>click</Button>
      <Input style={{width:200}} onChange={e=>{
        console.log(e.target.value)
        setText(e.target.value)
      }}></Input>
      <p>Actual value: {text}</p>
      <p>Debounce value: {value}</p>
    </div>
  )
}
