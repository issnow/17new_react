import React, { Component } from 'react'
function proxyHoc(WrappedComponent) {
  return class extends WrappedComponent {
    render() {
      const tree = super.render();
      console.log(tree, 'tree');
      let newProps = {};
      if (tree && tree.type === 'input') {
        newProps = { value: '渲染被劫持了' };
      }

      const props = Object.assign({}, tree.props, newProps);
      const newTree = React.cloneElement(tree, props, tree.props.children);
      return newTree;
    }
  }
}
class Son extends Component{
  render() {
    return (
      <input type="text" onChange={()=>{}}/>
      // <div>
      //   son组件
      // </div>
    )
  }
}
Son = proxyHoc(Son)
export default class Index extends Component {
  render() {
    return (
      <div>
        app:
        <Son></Son>
      </div>
    )
  }
}
