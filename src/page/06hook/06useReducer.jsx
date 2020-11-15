import React, { useState, useContext, useEffect, useCallback, useReducer } from 'react';

const reducer = (state,action) => {
  switch (action.type) {
    case 'increment':
      return {counr: state.count+ action.payload}
  }
}
export default function Index(props) {
  const [state, dispatch] = useReducer(reducer, {count:0})
  return (
    <div>
      <p>count:{state.count}</p>
      <button onClick={()=>{
        dispatch({
          type: 'increment',
          payload: 2
        })
      }}>++</button>
    </div>
  )
}
