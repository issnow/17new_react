import React, { useState, forwardRef, useImperativeHandle } from 'react';

export default forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    fn(v) {
      console.log(v);
    },
  }));
  return (
    <h3>son组件</h3>
  );
});
