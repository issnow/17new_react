import React from 'react'
import Add from './add';
import List from './list';
import { Link,Route,NavLink } from 'react-router-dom'
import './user.less';
export default function Home() {
  return (
    <>
      <div className="col-md-3">
        {/* 二级路由的导航 /user/add */}
        <ul className="nav nav-stacked">
          
          {/* activeClassName 当元素处于选中状态时提供的类，默认状态是active。将与 className 合并。 */}
          {/* activeStyle为选中状态提供的样式 */}

          <li><NavLink to='/user/add' activeClassName="selected" activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}>添加用户</NavLink></li>
          <li><NavLink to='/user/list'>用户列表</NavLink></li>
        </ul>
      </div>
      <div className="col-md-9">
        {/* 二级路由 */}
        <Route path='/user' exact component={Add}></Route>
        <Route path='/user/add' component={Add}></Route>
        <Route path='/user/list' component={List}></Route>
      </div>
    </>
  )
}
