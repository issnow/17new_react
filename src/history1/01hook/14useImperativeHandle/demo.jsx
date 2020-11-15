import React, {
  useState, useImperativeHandle, forwardRef, useRef,
} from 'react';

function InputWithLabel(props) {
  const { label, myRef } = props;
  const [value, setValue] = useState('');

  const _innerRef = useRef(null);

  const getValue = () => value;

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useImperativeHandle(myRef, () => ({
    getValue,
    focus() {
      const node = _innerRef.current;
      node.focus();
    },
  }));

  return (
    <div>
      <span>
        {label}
        :
      </span>
      <input type="text" ref={_innerRef} value={value} onChange={handleChange} />
    </div>
  );
}

const RefInput = forwardRef((props, ref) => (
  <InputWithLabel {...props} myRef={ref} />
));

export default (props) => {
  const myRef = useRef(null);
  const handleFocus = () => {
    myRef.current.focus();
  };
  return (
    <div className="App">
      <RefInput label="姓名" ref={myRef} />
      <button type="button" onClick={handleFocus}>focus</button>
    </div>
  );
};
