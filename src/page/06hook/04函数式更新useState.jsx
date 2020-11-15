import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
/**
  * 函数式更新
  如果新的 state 需要通过使用先前的 state 计算得出，那么可以将函数传递给 setState。
  该函数将接收先前的 state，并返回一个更新后的值。
  下面的计数器组件示例展示了 setState 的两种用法：
  */
export default function Index() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={()=>{setCount(p=>++p)}}>++</button>
      <button onClick={()=>{setCount(p=>--p)}}>--</button>
    </div>
  )
}
