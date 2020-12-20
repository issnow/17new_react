import React, { Component } from 'react'

export default class Index extends Component {
  constructor() {
    super()
    this.state = {
      v: 0
    }
  }
  componentDidMount() {
    this.setState({
      v: this.state.v + 1
    })
    console.log(this.state.v);
    this.setState({
      v: this.state.v + 1
    })
    console.log(this.state.v);
    setTimeout(() => {
      this.setState({
        v: this.state.v + 1
      })
      console.log(this.state.v);
      this.setState({
        v: this.state.v + 1
      })
      console.log(this.state.v);
    }, 0);
  }
  render() {
    return (
      <div>
        123132
      </div>
    )
  }
}
