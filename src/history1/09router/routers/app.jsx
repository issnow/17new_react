import React from 'react'
import Nav from './nav'
export default function App(props) {
  console.log(props)
  return (
    <div>
      <Nav></Nav>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}
