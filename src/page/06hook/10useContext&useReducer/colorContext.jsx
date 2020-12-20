import React, { useState, useContext, useEffect, useCallback, useMemo, useReducer } from 'react';
export let CHANGE_COLOR = Symbol()
export const color = React.createContext({})
function reducer(state, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {color: action.payload}
  }
}
export default function ColorProvider({children}) {
  const [state, dispatch] = useReducer(reducer, {color: '#000'})

  return (
    <color.Provider value={{state, dispatch}}>
      {children}
    </color.Provider>
  )
}
