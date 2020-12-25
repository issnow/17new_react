import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { inject, observer } from 'mobx-react'
import Fn from './fn.jsx'
function C({store}) {

  return (
    <div>
      <h4>n: {store.n}</h4>
      <button onClick={()=>{
        store.add(3)
      }}>+</button>
      <button onClick={()=>{
        store.minus(2)
      }}>-</button>
      <ul>
        <Fn n={1} />
      </ul>
    </div>
  )
}
export default inject('store')(observer(C))
