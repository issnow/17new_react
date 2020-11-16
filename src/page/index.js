import ReactDOM,{render} from 'react-dom'

// import App from './02高阶组件/index.jsx'
// import App from './03组件通信/index.jsx'
// import App from './04context/index.jsx'
import App from './05实现react-redux/index.jsx'
// import App1 from './06hook/08useCallbackAndUseMemo/12useMemo.jsx'
// import App1 from './06hook/09reactMemo/04函数式组件.jsx'
import App1 from './06hook/08useImperativeHandle.jsx'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'

render(<Router>
  <Switch>
    <Route path='/' exact component={App}></Route>
    <Route path='/other' component={App1}></Route>
  </Switch>
</Router>,document.querySelector('#root'))