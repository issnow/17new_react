import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { inject, observer } from 'mobx-react'

function Page({store}) {
  return (
    <div>
      <h3>数字:{store.n}</h3>
      <button onClick={()=>{
        store.add(4)
      }}>click++</button>
      <button onClick={()=>{
        store.minus(3)
      }}>click--</button>
    </div>
  )
}
export default inject('store')(observer(Page))
