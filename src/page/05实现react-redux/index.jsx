import React from 'react'
import Counter from './counter';
import { Provider } from './react-redux'
import store from './store';

export default class Index extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <Counter></Counter>
      </Provider>
    )
  }
}