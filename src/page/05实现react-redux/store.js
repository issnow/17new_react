import { createStore } from 'redux'
export let ADD = Symbol()
export let MINUS = Symbol()
function reducer(state={
  count: 9
}, action) {
  switch (action.type) {
    case ADD:
      return {count: state.count + action.payload}
    case MINUS: {
      return {count: state.count - action.payload}
    }
    default:
      return state
  }
}

let store = createStore(reducer)
window._store = store

export default store
