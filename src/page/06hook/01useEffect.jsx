import React, { useState, useContext, useEffect, useCallback, useMemo,useRef } from 'react';

import { Link } from 'react-router-dom';
export default function Index() {
  const [count, setCount] = useState(0);
  // 1.模拟componentDidMount。 useEffect 拥有两个参数，第一个参数作为回调函数会在浏览器布局和绘制完成后调用，因此它不会阻碍浏览器的渲染进程。
  // 第二个参数是一个数组
  // - 当数组存在并有值时，如果数组中的任何值发生更改，则每次渲染后都会触发回调。
  // - 当它不存在时，每次渲染后都会触发回调。
  // - 当它是一个空列表时，回调只会被触发一次，类似于 componentDidMount。
  useEffect(() => {
    console.log('didmount');
  }, [])

  // 2.模拟componentDidUpdate
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      console.log('I am didUpdate')
    }
  });

  // 3.模拟componentWillUnmount, 
  // 当在 useEffect 的回调函数中返回一个函数时，这个函数会在组件卸载前被调用。我们可以在这里面清除定时器或事件监听器。
  useEffect(() => {
    return () => {
      console.log('will unmount');
    }
  }, []);
  
  return (
    <div>
      <p>count: {count}</p>
      <button onClick={()=>setCount(count + 1)}>click</button>
      <Link to='/'>home</Link>
    </div>
  )
}
