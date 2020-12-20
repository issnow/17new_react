import React, { Component } from 'react'

/**
 * 高阶组件中可获取原组件的ref，通过ref获取组件实力，如下面的代码，当程序初始化完成后调用原组件的log方法。
 */

function proxyHOC(T) {
  return class extends Component {
    componentDidMount() {
      this.sonRef.fn(123)
    }
    render() {
      return (
        <div>
          <button onClick={()=>{
            this.sonRef.fn(56)
          }}>click</button>
          <T ref={x=>this.sonRef = x} {...this.props}></T>
        </div>
      )
    }
  }
}

class Son extends Component {
  constructor() {
    super()
    this.state ={
      count: 0
    }
  }
  fn=(v)=> {// 这里的这个函数是否是箭头函数无所谓,都一样
    console.log(123);
    this.setState({
      count: v
    })
  }
  render() {
    return(
      <div>
        son组件:
        <p>count:{this.state.count}</p>
      </div>
    )
  }
}
Son = proxyHOC(Son)
export default class Index extends Component {
  render() {
    return (
      <div>
        <Son></Son>
      </div>
    )
  }
}
