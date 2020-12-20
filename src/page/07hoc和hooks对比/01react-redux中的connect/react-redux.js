import React from 'react'
const baseContext = React.createContext()

export class Provider extends React.Component {
  render() {
    return (
      <baseContext value={this.props}>
        {this.props.children}
      </baseContext>
    )
  }
}


export const connect = (mapStateToProps, mapDispatchToProps)=>T=>class extends React.Component{
  static contextType = baseContext
  constructor(props,context) {
    super(props)
    this.state = mapStateToProps(context.store.getState())
  }
  componentDidMount() {
    this.context.store.subscribe(()=>{
      this.setState(mapStateToProps(this.context.store.getState()))
    })
  }
  render() {
    return (
      <T {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}></T>
    )
  }
}