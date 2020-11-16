import React, { useState, useContext, useEffect, useCallback, useReducer } from 'react';

// 第二种用法:你可以选择惰性地创建初始 state。为此，需要将 init 函数作为 useReducer 的第三个参数传入，
// 这样初始 state 将被设置为 init(initialArg)。
// 这么做可以将用于计算 state 的逻辑提取到 reducer 外部，这也为将来对重置 state 的 action 做处理提供了便利：

/**
 * 语法: const [state, dispatch] = useReducer(reducer, initialArg, init); 
 * 参数:
 * 第一个参数是reducer纯函数
 * 第二个参数是初始的state
 * 第三个参数可以修改初始state，将初始 state 设置为 init(initialArg)
 * 
 * useReducer是useState 的替代方案
 * 
 * 在某些场景下，useReducer 会比 useState 更适用，例如 state 逻辑较复杂且包含多个子值，
 * 或者下一个 state 依赖于之前的 state 等。并且，使用 useReducer 还能给那些会触发深更新的组件做性能优化，
 * 因为你可以向子组件传递 dispatch 而不是回调函数 。
 */

const init = count=>({count})
const reducer = (state,action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count+ action.payload}
  }
}

export default function Index({count=0}) {
  // useReducer就像redux中的createStore接受一个reducer和state对象,返回state和dispatch
  // 通过父组件接受count初始值
  const [state, dispatch] = useReducer(reducer, count,init)
  
  return (
    <div>
      <p>count:{state.count}</p>
      <button onClick={()=>{
        dispatch({
          type: 'increment',
          payload: 4
        })
      }}>++</button>
    </div>
  )
}
