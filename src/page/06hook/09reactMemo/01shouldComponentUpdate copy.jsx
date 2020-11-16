import React from 'react'

class TestC extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  getSnapshotBeforeUpdate(pp,ps) {
    console.log('getSnapshotBeforeUpdate');
    return null
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
  }

  shouldComponentUpdate(nextprops, nextstate,nextcontext) {
    // console.log(Object.is(this.state, nextstate));//不是一个对象
    if(Object.is(this.state.count, nextstate.count)) {
      return false
    }
    return true
  }

  render () {
    return (
      <div>
        {this.state.count}
        <button onClick={ () => this.setState({count: 1})}>Click Me</button>
      </div>
    )
  }
}

export default TestC;
