import Item from 'antd/lib/list/Item'
import * as types from '../action-types'
let initState = {
  type: 'all',//全部显示
  todos:[
    {
      isSelected: false,
      title: '今天吃药了吗?',
      id: 1
    },
    {
      isSelected: true,
      title: '今天吃药了吗?',
      id: 2
    }
  ]
}

function reducer(state = initState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {...state, todos: [...state.todos, action.payload]}
    case types.CHANGE_SELECTED: {
      let todos = state.todos.map(e=>{
        if(e.id === action.payload) {
          e.isSelected = !e.isSelected
        }
        return e
      })
      return {...state, todos}
    }
    case types.DELETE_TODO: {
      let todos = state.todos.filter(e=>e.id!==action.payload)
      return {...state, todos}
    }
    case types.CHANGE_CURRENT_TYPE: {
      return {...state, type: action.payload}
    }
    default:
      return state
  }
}

export default reducer