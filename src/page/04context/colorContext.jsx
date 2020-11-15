import React, { Component } from 'react'
export const color=React.createContext({
  color: 'red'
})
export default class colorContext extends Component {
  constructor() {
    super()
    this.state={
      color: 'green'
    }
  }
  render() {
    return (
      <color.Provider value={this.state}>
        {this.props.children}
      </color.Provider>
    )
  }
}
export const Consumer = color.Consumer