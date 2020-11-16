import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

/**
 * React.memo使用在函数式组件中的
 */
function Index(props) {
  console.log('render', props);
  // useEffect(() => {
  //   console.log('render', props);
  // })
  return (
    <div>
      {props.count}
    </div>
  )
}

// React.memo 会返回了一个纯组件 MemodFuncComponent。 我们将在 JSX 标记中渲染此组件。
//  每当组件中的 props 和 state 发生变化时，React 将检查 上一个 state 和 props 以及下一个
//  props 和 state 是否相等，如果不相等则函数组件将重新渲染，如果它们相等则函数组件将不会重新渲染。
Index = React.memo(Index)

export default props=>{
  const [count, setCount] = useState(5);
  return(
    <div>
      <Index count={count}></Index>
      <button onClick={()=>setCount(6)}>click</button>
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