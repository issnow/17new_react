import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as action from '../store/action';
export class TodoFooter extends Component {
  render() {
    return (
      <div>
        <nav className="nav nav-pills" onClick={(e)=>{
          e.preventDefault()
          let type = e.target.dataset.type
          this.props.changeType(type)
        }}>
          <li role="presentation" className={this.props.type==='all'?'active':''}><a href="#" data-type='all'>全部</a></li>
          <li role="presentation" className={this.props.type==='unfinish'?'active':''}><a href="#" data-type='unfinish'>未完成</a></li>
          <li role="presentation" className={this.props.type==='finish'?'active':''}><a href="#" data-type='finish'>已完成</a></li>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = dispatch=>bindActionCreators(action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter)
