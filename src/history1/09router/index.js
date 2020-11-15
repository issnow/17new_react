import React from 'react'
import ReactDOM,{render} from 'react-dom'
import App from './routers/app.jsx'
import Home from './routers/home.jsx'
import Profile from './routers/profile.jsx'
import User from './routers/user.jsx'
import Detail from './routers/detail.jsx'
// 一般在index中而配置路由
/**
 * switch: 
 * exact: 是否精准匹配
 * Redirect: 
 */
import { HashRouter as Router, 
  BrowserRouter as Router2,
  Route, 
  NavLink,
  Switch,//用于渲染与路径匹配的第一个子 Route 或 Redirect。
  Redirect,//重定向
} from 'react-router-dom'

render(<Router2>
  <App>
    <Switch>
      <Route path='/' exact component={Home}></Route>
      <Route path='/profile/:age' component={Profile}></Route>
      {/* <Route path='/user' component={User}></Route>
      <Route path='/user'>
        <User></User>
      </Route> */}
      <Route path='/user' render={()=><User></User>}></Route>

      {/* 详情页需要传一个id /detail/1--> 通过this.props.match.params={id:1}*/}
      <Route path='/detail/:id'  component={Detail}></Route>

      {/* <Route component={Home}></Route> 如果都匹配不到走这个 */}
      {/* 重定向,上面都匹配不到 */}
      <Redirect to='/'></Redirect>
    </Switch>
  </App>
</Router2>,window.root)
