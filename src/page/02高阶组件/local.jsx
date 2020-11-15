import React, { Component as RC } from 'react'
// 高阶组件
let local = (key)=>(Component)=>{
  return class highOrderComponent extends RC {
    constructor() {
      super()
      this.state ={
        [key]: ''
      }
    }
    componentDidMount() {
      let val = localStorage.getItem(key)
      this.setState({
        [key]: val
      })
    }

    render(){
      return (
        <>
          <Component {...this.state}></Component>
        </>
      )
    }
  }
}
export default local