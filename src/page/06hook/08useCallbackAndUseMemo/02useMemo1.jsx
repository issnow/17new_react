import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
// useMemo 的作用: 简单来说就是传递一个创建函数和依赖项，创建函数会需要返回一个值，
// 只有在依赖项发生改变的时候，才会重新调用此函数，返回一个新的值。

let UserCard = props=>{
  console.log(props, '子组件');
  return (
    <div>
      子组件
    </div>
  )
}

UserCard = React.memo(UserCard)

export default function Index() {
  console.log('父组件渲染');
  const [count, setCount] = useState(0);
  // const userInfo = {
  //   age: count,
  //   name: 'Jace'
  // }
  const userInfo = useMemo(()=>{
    return {
      age: count,
      name: 'Jace'
    }
  }, [count])


  return (
    <div>
      <p>count: {count}</p>
      <button onClick={()=>setCount(ps=>ps+1)}>click</button>
      <button onClick={()=>setCount(1)}>变成1</button>
      <UserCard userInfo={userInfo}></UserCard>
    </div>
  )
}

/**
 * 很明显的上面的 userInfo 每次都将是一个新的对象，无论 count 发生改变没，都会导致 UserCard 重新渲染，
 * 而下面的则会在 count 改变后才会返回新的对象。
 */
