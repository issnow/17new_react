import React, { Component } from 'react'

/**
 * 可使用任何其他组件和原组件进行组合渲染，达到样式、布局复用等效果。 
 */
function styleHOC(T) {
  // 接受一个组件作为参数
  return class extends T{
    render() {
      return (
        <>
          <h3>hoc内容:</h3>
          <div className="title">{this.props.title}</div>
          {/* <T {...this.props}></T> */}
          {super.render()}
        </>
      )
    }
  }
}

class Son extends Component {
  render() {
    return (
      <div>
        <p>这是son组件:</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
Son = styleHOC(Son)
export default class Index extends Component {
  render() {
    return (
      <div>
        <h2>app内容:</h2>
        <Son title='一个标题' content='内容'></Son>
      </div>
    )
  }
}
