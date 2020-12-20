import React, { Component } from 'react'
import isRender from './isRender.jsx'

@isRender
class Son extends Component {
  render() {
    return (
      <div>
        son组件:
      </div>
    )
  }
}
export default class App extends Component {
  state={visible:false}
  render() {
    return (
      <div>
        <button onClick={()=>this.setState(ps=>({visible:!ps.visible}))}> click </button>
        <Son visible={this.state.visible}/>
      </div>
    )
  }
}
