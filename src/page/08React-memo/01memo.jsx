import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
function Index({count}) {
  console.log('子组件更新');
  return (
    <div>
      子组件:
      <p>count: {count}</p>
    </div>
  )
}

Index = React.memo(Index, (prevProps, nextProps)=>{
  console.log(prevProps, nextProps);
  if(prevProps.count === nextProps.count) {
    return true
  }else {
    // prevProps.count 不等于 nextProps.count 需要更新子组件
    return false
  }
})
export default function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={()=>{setCount(1)}}>reset</button>
      <button onClick={()=>{setCount(ps=>++ps)}}>++</button>
      <Index count={count}></Index>
    </div>
  )
};


