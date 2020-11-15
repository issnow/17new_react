import React, { Component } from 'react'
import { commonContext } from './commonContext'
import Son from './03son';
export default class toolbar extends Component {
  state = {
    config : {
      color: '#f40',
      backgroundColor: '#008000'
    }
  }
  /**
   * ! 阿斯顿发顺丰
   * ? 阿斯顿发送到发
   * * 撒发生发放
   * todo: 阿迪是发疯
   * @param: asdfasf 
   */
  componentDidMount() {
    if(1===2) {
      console.log(111);
    }
  }
  render() {
    return (
      <commonContext.Provider value={this.state.config}>
        <Son></Son>
        <divsdf></divsdf>
        <span></span>
      </commonContext.Provider>
    )
  }
}
