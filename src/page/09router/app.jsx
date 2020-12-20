import React from 'react'
import { BrowserRouter as Router1,HashRouter as Router2, 
  Route, 
  Link, 
  Switch,
  Redirect 
} from 'react-router-dom'
import Home from './01router.jsx'
import List from './02router.jsx'
import Id from './03id.jsx'
export default function App() {
  return (
    <div>
      <Switch>
        <Route path='/other/home' component={Home}></Route>
        <Route path='/other/list' component={List}></Route>
        <Route path='/other/user/:id' component={Id}></Route>
        <Redirect from='/other' to='/other/home'></Redirect>
      </Switch>
    </div>
  )
}
