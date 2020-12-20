import React, { Component } from 'react'
/**
 * 将原组件的状态提取到HOC中进行管理，如下面的代码，我们将Input的value提取到HOC中进行管理，
 * 使它变成受控组件，同时不影响它使用onChange方法进行一些其他操作。
 */
function proxyHoc(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = { value: '' };
    }

    onChange = (event) => {
      const { onChange } = this.props;
      this.setState({
        value: event.target.value,
      }, () => {
        if(typeof onChange ==='function'){
          onChange(event);
        }
      })
    }

    render() {
      const newProps = {
        value: this.state.value,
        onChange: this.onChange,
      }
      return <WrappedComponent {...this.props} {...newProps} />;
    }
  }
}

class HOC extends Component {
  render() {
    return <input {...this.props}></input>
  }
}

HOC = proxyHoc(HOC);

export default class Index extends Component {
  render() {
    return (
      <div>
        <HOC onChange={(e)=>{
          console.log(e.target.value)
        }}></HOC>
      </div>
    )
  }
}
