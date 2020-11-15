import React, { Component } from 'react'
import Local from './local.jsx'
class Pwd extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     password: ''
  //   }
  // }
  // componentDidMount() {
  //   this.setState({
  //     password: localStorage.getItem('password')
  //   })
  // }
  render() {
    return (
      <div>
        <label htmlFor='password'>password</label>
        <input id='password' type="text" value={this.props.password} onChange={()=>{}}/>
      </div>
    )
  }
}
// 告诉local将password取出来,以属性的方式传递给pwd
export default Local('password')(Pwd)
