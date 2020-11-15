import React, {
  useState, useContext, useEffect, useCallback, useMemo,
} from 'react';

export default (props) => {
  const {
    history,
  } = props;
  useEffect(() => {
    console.log(props, '------');
  }, []);
  return (
    <div>
      <button onClick={() => {
        console.log('gogogo');
        // history.push({
        //   path: '/status',
        //   state: {
        //     a: 11,
        //     b: 22,
        //   },
        // });
        history.push('/status', { a: 1, b: 2 });
      }}
      >
        123

      </button>
    </div>
  );
};
