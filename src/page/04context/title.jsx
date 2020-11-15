import React, { Component } from 'react'
import {color} from './colorContext.jsx';


/**
 * 子组件具体使用context两种用法:
 * 1.contextType
 * 2.Consumer
 */
export default class title extends Component {
  static contextType = color
  render() {
    console.log(this.context, 'context');
    return (
      // <color.Consumer>
      //   {
      //     ({color})=>(
      //     <div style={{color}}>hello {color}</div>
      //     )
      //   }
      // </color.Consumer>
      <div>
        {/* {this.context} */}
      </div>
    )
  }
}
