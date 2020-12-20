import React, { Component } from 'react'

/**
 * 可以对传入组件的props进行增加、修改、删除或者根据特定的props进行特殊的操作。
 */

function proxyHOC(T) {
  // 接受一个组件作为参数,返回一个新的组件
  return class extends Component {
    render() {
      const newProps = {
        ...this.props,
        user: 'guocheng'
      }
      return <T {...newProps}/>
    }
  }
}
