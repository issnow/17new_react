import * as types from '../action-types'
export const addTodo = (payload)=>{
  // {
  //   isSelected: false,
  //   title: '今天吃药了吗?',
  //   id: 1
  // },
  return {
    type: types.ADD_TODO,
    payload
  }
}

export const chageSelected =(id)=>{
  return {
    type: types.CHANGE_SELECTED,
    payload: id
  }
}

export const deleteTodo = id=>{
  return {
    type:types.DELETE_TODO,
    payload: id
  }
}

export const changeType = val=>{
  return {
    type: types.CHANGE_CURRENT_TYPE,
    payload: val
  }
}