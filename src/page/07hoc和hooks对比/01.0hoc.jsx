/**
 * 【React深入】从Mixin到HOC再到Hook --> https://juejin.im/post/6844903815762673671#heading-7
 * 1.高阶组件可以看作React对装饰模式的一种实现，高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件。
 * 2.高阶组件（HOC）是React中的高级技术，用来重用组件逻辑。但高阶组件本身并不是React API。它只是一种模式，
 * 这种模式是由React自身的组合性质必然产生的。
 * 
 */
import React,{Component} from 'react'
import { Button } from 'antd'

function visible(WrappedComponent) {
  return class extends Component {
    render() {
      const { visible, ...props } = this.props;
      if (visible === false) return null;
      return <WrappedComponent {...props} />;
    }
  }
}
// function visible(WrappedComponent) {
//   return class extends Component {
//     render() {
//       const { visible, ...props } = this.props;
//       if (visible === false) return null;
//       return super.render();
//     }
//   }
// }
class Head extends Component {
  render() {
    console.log(this.props, 'props');
    return (
      <div>
        head组件
      </div>
    )
  }
}
Head = visible(Head)
export default class App extends Component{
  constructor() {
    super()
    this.state = {
      visible: true
    }
  }
  render() {
    const {visible} = this.state
    return (
      <div>
        app
        <Button type='primary' onClick={()=>{
          this.setState(ps=>({
            visible: !ps.visible
          }))
        }}>click toggle</Button>
        <Head visible={visible} name='xiaowang' age={12}></Head>
      </div>
    )
  }
}
