import React from 'react'

/**
 * 使用PureComponent
 * 1.继承 React.PureComponent 时，不能再重写 shouldComponentUpdate，否则会引发警告
 * 2.继承PureComponent时，进行的是浅比较，也就是说，如果是引用类型的数据，只会比较是不是同
 * 一个地址，而不会比较具体这个地址存的数据是否完全一致。
 * 3.浅比较会忽略属性或状态突变的情况，其实也就是，数据引用指针没变而数据被改变的时候，也不新渲染组件。
 * 但其实很大程度上，我们是希望重新渲染的。所以，这就需要开发者自己保证避免数据突变。
 */
import produce from 'immer'
class ListOfWords extends React.PureComponent {
  render() {
    return <div>{this.props.words.join(',')}</div>
  }
}
export default class WordAdder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      words: ['marklar'],
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    // 此时,无论你怎么点击按钮，ListOfWords 渲染的结果始终没变化，原因就是WordAdder的 word 的引用地址始终是同一个。
    const words = this.state.words

    // 当然如果想让你变化，需要改变words引用地址。两种方式:1.通过写法比如.slice()或者[...state.words],
    // 2.引入immer.js

    // const words = [...this.state.words]
    const state = produce(this.state, d=>{
      d.words.push('marklar')
    })
    this.setState(state)
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>click</button>
        <ListOfWords words={this.state.words} />
      </div>
    )
  }
}
