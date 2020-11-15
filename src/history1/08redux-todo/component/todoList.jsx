import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from '../store/action'
export class TodoList extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  filterData = ()=>{
    let res = []
    if(this.props.type === 'all') {
      res = this.props.todos
    }else if(this.props.type === 'finish') {
      res = this.props.todos.filter(e=>e.isSelected)
    }else if(this.props.type === 'unfinish') {
      res = this.props.todos.filter(e=>!e.isSelected)
    }
    return res
  }
  render() {
    return (
      <>
        <ul className="list-group">
          {
            this.filterData().map(e=>(
              <li className="list-group-item" key={e.id}>
                <input type="checkbox" checked={e.isSelected} onChange={()=>{
                  // console.log(e.target.value, e)
                  this.props.chageSelected(e.id)
                }}/>
                {e.title}
                <button className="btn btn-xs pull-right" onClick={()=>{
                  this.props.deleteTodo(e.id)
                }}>&times;</button>
              </li>
            ))
          }
        </ul>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = dispatch=>bindActionCreators(action, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
