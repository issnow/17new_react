import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

/**
 * React.memo使用在函数式组件中的
 */
function Index(props) {
  console.log('render子组件');
  return (
    <div>
      子组件
    </div>
  )
}

// 每次父组件更新count，子组件都会更新。如下使用memo，count变化子组件没有更新

Index = React.memo(Index)

export default props=>{
  const [count, setCount] = useState(5);
  return(
    <div>
      <Index></Index>
      <p>count: {count}</p>
      <button onClick={()=>setCount(count=>++count)}>click</button>
    </div>
  )
}

// 总结几个要点：

// React.PureComponent 是银
// React.memo(…) 是金。
// React.PureComponent 是 ES6 类的组件
// React.memo(...) 是函数组件
// React.PureComponent 优化 ES6 类组件中的重新渲染
// React.memo(...) 优化函数组件中的重新渲染