import React, { Component } from 'react'
/**
 * 根据特定的属性决定原组件是否渲染
 */

function visibleHOC(T) {
  return class extends Component{
    render() {
      const {visible, ...props} = this.props
      if(!visible) return null
      return <T {...props}/>
    }
  }
}

class Son extends Component {
  render () {
    return (
      <div>
        son组件:
      </div>
    )
  }
}

Son = visibleHOC(Son)

export default class Index extends Component {
  render() {
    return (
      <div>
        app:
        <Son visible={true}></Son>
      </div>
    )
  }
}
