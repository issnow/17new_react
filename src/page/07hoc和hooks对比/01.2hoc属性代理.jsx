import React, { Component } from 'react'


/**
 * 属性代理:
 * 函数返回一个我们自己定义的组件，然后在render中返回要包裹的组件，这样我们就可以代理所有传入的props，
 * 并且决定如何渲染，实际上 ，这种方式生成的高阶组件就是原组件的父组件，上面的函数visible就是一个HOC属性代理的实现方式。
 * 对比原生组件增强的项：
 *    1.可操作所有传入的props
 *    2.可操作组件的生命周期
 *    3.可操作组件的static方法
 *    4.获取refs
 */


let proxyHoc = T => class extends Component {
  render() {
    if(!this.props.visible) {
      return null
    }
    return <T {...this.props}></T>
  }
}
class Son extends Component {
  render() {
    return (
      <div>
        son组件:
      </div>
    )
  }
}
Son= proxyHoc(Son)
export default class Index extends Component {
  state ={visible:true}
  render() {
    return (
      <div>
        app
        <button onClick={()=>{
          this.setState(ps=>({
            visible: !ps.visible
          }))
        }}>click</button>
        <Son visible={this.state.visible}/>
      </div>
    )
  }
}
