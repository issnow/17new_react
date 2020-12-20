import React from 'react'

export default function Index() {
  let ele = React.createElement('div', {className: 'bb', onClick(){console.log(123)}}, 'hello world', React.createElement('p',{}, 'p标签'))
  return ele
}
