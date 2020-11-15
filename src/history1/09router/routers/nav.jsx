import React from 'react'
import { Link,useHistory } from 'react-router-dom';
export default (props)=> {
  // 直接使用useHistory hook代替 history
  const history = useHistory()
  React.useEffect(()=>{
    console.log(props,history);
  }, [])
  return (
    <>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              123
            </a>
          </div>
          
          <ul className="nav navbar-nav">
            <li><Link to='/'>首页</Link></li>
            <li><Link to={{
              pathname: "/profile",
              // search: "?sort=name",
              // hash: "#the-hash",
              // state: { fromDashboard: true }
            }}>个人中心</Link></li>
            <li><Link to={(location)=>{
              console.log(location, 'location')//{pathname: "/user", search: "", hash: ""} 
              return {
                ...location,
                pathname: '/user'
              }
            }}>用户</Link></li>
          </ul>
          <button onClick={()=>{
            history.push('/')
          }}>+</button>
        </div>
      </nav>
    </>
  )
}
