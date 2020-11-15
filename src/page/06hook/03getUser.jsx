import React from 'react'
import useGetUser from './02自定义hook';
export default function GetUser(props) {
  const people = useGetUser(1)
  return (
    <div>
      <p>name: {people.name}</p>
      <p>color: {people.color}</p>
    </div>
  )
}
