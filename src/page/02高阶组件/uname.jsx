import React, { Component } from 'react'
import Local from './local.jsx'
class uname extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     username: ''
  //   }
  // }
  // componentDidMount() {
  //   this.setState({
  //     username: localStorage.getItem('username')
  //   })
  // }
  render() {
    return (
      <div>
        <label htmlFor='username'>username</label>
        <input id='username' type="text" value={this.props.username} onChange={()=>{}}/>
      </div>
    )
  }
}
// 告诉local将password取出来,以属性的方式传递给pwd
// mixin混合 我们可以把公共逻辑提取到父组件上
export default Local('username')(uname)