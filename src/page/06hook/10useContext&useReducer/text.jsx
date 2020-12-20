import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { color } from './colorContext.jsx'
export default function Text() {
  const {state} = useContext(color)
  return (
    <div style={{...state, fontSize: 30}}>
      hello world
    </div>
  )
}
