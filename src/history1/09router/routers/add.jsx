import React,{useEffect} from 'react'

export default (props)=> {
  const inputref = React.createRef()
  useEffect(() => {
    // 通过路由渲染的组件props会多出三个属性 history, location, match
    console.log(props);
    // history:
    //   action: "POP"
    //   block: ƒ block(prompt)
    //   createHref: ƒ createHref(location)
    //   go: ƒ go(n)
    //   goBack: ƒ goBack()
    //   goForward: ƒ goForward()
    //   length: 50
    //   listen: ƒ listen(listener)
    //   location: {pathname: "/user/add", search: "", hash: "", state: undefined}
    //   push: ƒ push(path, state)
    //   replace: ƒ replace(path, state)
    // location:
    //   hash: ""
    //   pathname: "/user/add"
    //   search: ""
    //   state: undefined
    // match:
    //   isExact: true
    //   params: {}
    //   path: "/user/add"
    //   url: "/user/add"
  }, [])
  return (
    <>
      <input type="text" className='form-control' ref={inputref}/>
      <button className='btn btn-primary' onClick={()=>{
        console.log(inputref.current.value)
        let userList = JSON.parse(localStorage.getItem('users')) ?? []
        userList.push({
          id: Math.random(),
          username: inputref.current.value
        })
        localStorage.setItem('users', JSON.stringify(userList))
        // 路由跳转
        props.history.push('/user/list') //push跳转路径
      }}>添加用户</button>
    </>
  )
}
