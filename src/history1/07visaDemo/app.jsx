import React, {
  useState, useContext, useEffect, useCallback, useMemo,
} from 'react';
import { DatePicker } from 'antd';
import './index.css';
import moment from 'moment';

export default (props) => {
  useEffect(() => {
    console.log(moment('2020-02-02').startOf('day').format('L'));
  }, []);

  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  function disabledDate(current) {
    // Can not select days before today and today
    console.log(moment(current).format('L'), moment().endOf('day').format('L'));
    return current && current < moment().endOf('day');
  }
  return (
    <div>
      {/* input溢出显示省略号 */}
      {/* <input type="text" className='input'/> */}
      <DatePicker
        onChange={onChange}
        disabledDate={disabledDate}
      />
    </div>
  );
};
