import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';
const list = [
  {id: 1,name: 'guocheng', color: 'red'},
  {id: 2,name: 'zhangsan', color: 'green'},
]
/**
 * 这个组件是自定义hook
 * 目的: 有时候我们会想要在组件之间重用一些状态逻辑。目前为止，有两种主流方案来解决这个问题：高阶组件和 render props。
 * 自定义 Hook 可以让你在不增加组件的情况下达到同样的目的。
 * 会给03和使用
 */
export default (id) => {
  const [people, setPeople] = useState({});
  useEffect(() => {
    setPeople(list.find(e=>e.id===id))
  }, [id])

  // 这里可以return不同的数据结构,比如return [a,b] 或者{},用的时候根据情况接受
  // 比如const [a,b] = useHook(id)
  return people
};
