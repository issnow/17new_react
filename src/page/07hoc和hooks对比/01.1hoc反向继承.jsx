import React from 'react'
import { Button } from 'antd';

/**
 * 反向继承
 * 返回一个组件，继承原组件，在render中调用原组件的render。由于继承了原组件，能通
 * 过this访问到原组件的生命周期、props、state、render等，相比属性代理它能操作更多的属性。
 * 对比原生组件增强的项：
 *    1.可操作所有传入的props
 *    2.可操作组件的生命周期
 *    3.可操作组件的static方法
 *    4.获取refs
 *    5.可操作state
 *    6.可以渲染劫持
 */

let proxyHoc = T => class extends T {
  render() {
    let tree = super.render()
    console.log(tree, 'tree');
    if(this.props.visible) {
      return tree
    }else {
      return null
    }
  }
}

class Son extends React.Component {
  render() {
    return (
      <div>
        son组件
      </div>
    )
  }
}

Son = proxyHoc(Son)

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  render() {
    return (
      <div>
        <Button type='primary' onClick={()=>{
          this.setState(ps=>({
            visible: !ps.visible
          }))
        }}>click toggle</Button>
        <Son visible={this.state.visible}></Son>
      </div>
    )
  }
}
