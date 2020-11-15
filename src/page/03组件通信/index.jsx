import React, { Component } from 'react'
import Son from './son.jsx';

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      info: {
        num :12,
        string: 'hello',
        arr: [1,2,3]
      }
    }
  }
  render() {
    return (
      <div>
        {/* <Son info={this.state.info}></Son> */}
        <Son {...this.state}></Son>
      </div>
    )
  }
}
