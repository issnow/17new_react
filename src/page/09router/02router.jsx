import React from 'react'
import { useHistory } from 'react-router-dom'
export default function Router() {
  const history = useHistory()
  return (
    <div>
      列表页
      <button onClick={()=>{
        history.push({
          pathname: '/other/user/123',
          state: {
            name: 'guocheng',
            age: 123
          }
        })
      }}>click</button>
    </div>
  )
}
