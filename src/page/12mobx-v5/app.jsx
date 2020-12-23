import React from 'react'
import { Provider } from 'mobx-react'
import store from './store.js'
import Page from './page.jsx'
export default function App() {
  return (
    <Provider store={store}>
      <Page></Page>
    </Provider>
  )
}
