import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Button } from 'antd';
import { color,CHANGE_COLOR } from './colorContext.jsx'
export default function Btn() {
  const {dispatch} = useContext(color)
  return (
    <div>
      <Button onClick={()=>{
        dispatch({
          type: CHANGE_COLOR,
          payload: 'red'
        })
      }}>变红</Button>
      <Button onClick={()=>{
        dispatch({
          type: CHANGE_COLOR,
          payload: 'green'
        })
      }}>变绿</Button>
    </div>
  )
}
