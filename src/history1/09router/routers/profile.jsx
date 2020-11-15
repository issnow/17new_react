// 这个是
import React,{useEffect} from 'react'

export default function Home(props) {
  useEffect(() => {
    console.log(props);
  }, [])
  return (
    <>
      profile
    </>
  )
}
