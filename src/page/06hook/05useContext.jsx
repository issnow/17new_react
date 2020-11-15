import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

/**
 * 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
 * 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
 * 当组件上层最近的 <MyContext.Provider> 更新时，该 Hook 会触发重渲染，
 * 并使用最新传递给 MyContext provider 的 context value 值。即使祖先使用 React.memo 或 
 * shouldComponentUpdate，也会在组件本身使用 useContext 时重新渲染。
 */
const color = React.createContext()
const Title=props=>{
  const style = useContext(color)
  return (
    <>
      <p style={style}>hello world</p>
    </>
  )
}
const Head = props=>{
  return (
    <>
      <Title></Title>
    </>
  )
}
export default function Index() {
  const [style, setStyle] = useState({
    color: 'red',
    fontSize: '40px'
  });
  return (
    <color.Provider value={style}>
      <Head></Head>
    </color.Provider>
  )
}
