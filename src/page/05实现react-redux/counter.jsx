import React, { Component } from 'react'
import { connect } from './react-redux'
import { bindActionCreators } from 'redux'
import { ADD, MINUS} from './store'
class counter extends Component {
  render() {
    // console.log(this.props, 'props');
    return (
      <div>
        counter
        <button onClick={()=>{
          this.props.add(1)
        }}>+</button>
        <p>{this.props.count}</p>
        <button onClick={()=>{
          this.props.minus(2)
        }}>-</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps =dispatch=>bindActionCreators({
  add(v){
    return {
      type: ADD,
      payload: v
    }
  },
  minus(v) {
    return {
      type: MINUS,
      payload: v
    }
  }
}, dispatch)
// const mapDispatchToProps ={
//   add(v){
//     return {
//       type: ADD,
//       payload: v
//     }
//   },
//   minus(v) {
//     return {
//       type: MINUS,
//       payload: v
//     }
//   }
// }
export default connect(mapStateToProps, mapDispatchToProps)(counter)