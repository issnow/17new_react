import React from 'react'

export default function son(props) {
  return (
    <ul>
      {
        Object.values(props.info).map((e,i)=>(
          <li key={i}>{e}</li>
        ))
      }
    </ul>
  )
}
