import React, { useState, useCallback } from 'react';
/**
 * 核心原因:主要是state更新,就会重新渲染组件,就是重新执行函数里面的代码
 */
let Button = ({ onClickButton, children }) => {
  return (
    <>
      <button onClick={onClickButton}>{children}</button>
      <span>{Math.random()}</span>
    </>
  );
};
// 这里或许会注意到 React.memo 这个方法，此方法内会对 props 做一个浅层比较，如果如果 props 没有发生改变，则不会重新渲染此组件。
Button =  React.memo(Button);

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleClickButton1 = () => {
    setCount1(count1 + 1);
  };

  const handleClickButton2 = useCallback(() => {
    setCount2(count2 + 1);
  }, [count2]);

  return (
    <div>
      <div>
        <Button onClickButton={handleClickButton1}>Button1</Button>
      </div>
      <div>
        <Button onClickButton={handleClickButton2}>Button2</Button>
      </div>
    </div>
  );
}
