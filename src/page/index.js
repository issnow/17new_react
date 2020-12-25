import ReactDOM,{render} from 'react-dom'

// import App from './02高阶组件/01setState.jsx'
import App from './01上传/03.jsx'
// import App from './03组件通信/index.jsx'
// import App from './04context/index.jsx'
// import App from './05实现react-redux/index.jsx'
// import App1 from './06hook/08useCallbackAndUseMemo/12useMemo.jsx'
// import App1 from './06hook/09reactMemo/04函数式组件.jsx'
// import App1 from './06hook/08useImperativeHandle.jsx'
// import App1 from './06hook/10useContext&useReducer/app.jsx'
// import App1 from './07hoc和hooks对比/00compose&decorator/app.jsx'
// import App1 from './08React-memo/01memo.jsx'
// import App1 from './09router/app.jsx'
// import App1 from './11mobx-v6/app.jsx'
// import App1 from './12mobx-v5/app.jsx'
import App1 from './11mobx_test/index.jsx'
import { BrowserRouter as Router,HashRouter as Router2, Route,Switch } from 'react-router-dom'

render(<Router>
  <Switch>
    <Route path='/' exact component={App}></Route>
    <Route path='/other' component={App1}></Route>
  </Switch>
</Router>,document.querySelector('#root'))