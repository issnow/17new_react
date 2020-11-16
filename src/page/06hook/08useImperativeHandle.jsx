import React, { useState, useRef, useEffect, useCallback, useMemo,createRef,forwardRef, useImperativeHandle } from 'react';

function Son(props, ref) {
  useImperativeHandle(ref, ()=>({
    fn(v) {
      console.log(v);
    }
  }))
  return (
    <div>
      son组件
    </div>
  )
}
Son = forwardRef(Son)

export default function Index(props) {
  // useRef 仅能用在 FunctionComponent，createRef 仅能用在 ClassComponent。
  const comref = useRef()
  // const comref = createRef()
  return (
    <div>
      <button onClick={()=>{
        comref.current.fn(123)
      }}>click</button>
      <Son ref={comref}></Son>
    </div>
  )
}
