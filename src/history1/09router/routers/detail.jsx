import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { useParams,useLocation } from 'react-router-dom';
export default function Index(props) {
  // useParams返回props.match.params对象
  let params = useParams()
  // useLocation hook 返回代表当前URL的 location 对象-->就是props.location
  let location = useLocation()
  useEffect(() => {
    // console.log(params, 'useParams');
    console.log(props, 'props')
    // console.log(location, 'useLocation');
  }, [])
  let state = props.location.state
  return (
    <div>
      {/* {
        params.id
      } */}
      id: {state.id}<br></br>
      用户名: {state.username}
    </div>
  )
}