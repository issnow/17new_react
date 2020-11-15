import React,{ useEffect,useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
export default (props)=> {
  const [userList, setUserList] = useState([]);
  // useHistor hook返回的就是props.history对象
  let history = useHistory()
  useEffect(()=>{
    setUserList(JSON.parse(localStorage.getItem('users')))
    console.log(history, 'useHistory');
  }, [])
  return (
    <>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>id</th>
          <th>用户名</th>
        </tr>
      </thead>
      <tbody>
        {
          userList.map(e=>(
            <tr key={e.id}>
              <td>{e.id}</td>
              {/* <td><Link to={{pathname:`/detail/${e.id}`}}>{e.username}</Link></td> */}
              <td onClick={()=>{
                // props.history.push({
                //   pathname: `/detail`,
                //   query: {id: e.id}
                // })
                // history.push(`/detail/${e.id}`)
                history.push({
                  pathname: `/detail/${e.id}`,
                  state: e
                })
              }}>{e.username}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </>
  )
}

