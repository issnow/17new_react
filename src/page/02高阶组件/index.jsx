import React, { Component } from 'react'
import Username from './uname.jsx'
import Pwd from './pws.jsx'
export default class Index extends Component {
  render() {
    return (
      <div>
        <Username></Username>
        <Pwd></Pwd>
        <button onClick={()=>{
          this.props.history.push({
            pathname: '/other'
          })
        }}>click</button>
      </div>
    )
  }
}
