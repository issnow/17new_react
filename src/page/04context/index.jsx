import React, { Component,createContext } from 'react'


import Header from './header.jsx';
import ColorProvider from './colorContext.jsx';
// context
export default class Index extends Component {
  render() {
    return (
      <ColorProvider>
        <Header></Header>
      </ColorProvider>
    )
  }
}
