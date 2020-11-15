import React, {createContext} from 'react'
// provider是一个组件,接受一个store的属性,将其挂载到context
let baseContext = createContext()

export const connect = (mapStateToProps, mapDispatchToProps)=>(Component)=>{
  return class Proxy extends React.Component {
    static contextType = baseContext
    constructor(props, context) {
      super()
      this.state = mapStateToProps(context.store.getState())
    }
    componentDidMount() {
      //更新state状态,不然子组件的state不能更新
      this.context.store.subscribe(()=>{
        this.setState(mapStateToProps(this.context.store.getState()))
      })
    }
    render() {
      return (
        <Component
          {...this.state}
          {...mapDispatchToProps(this.context.store.dispatch)}
        ></Component>
      )
    }
  }
}

export class Provider extends React.Component {
  render() {
    return (
      <baseContext.Provider value={this.props}>
        {this.props.children}
      </baseContext.Provider>
    )
  }
}