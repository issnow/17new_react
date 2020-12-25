import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { Provider } from 'mobx-react'
import store from './store'
import Counter from './counter.jsx'
export default function Index() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  )
}
