import React, {
  useState, useContext, useEffect, useCallback, useMemo, useRef,useImperativeHandle
} from 'react';
import { Form, Checkbox, Button } from 'antd';

import Son from './son';

export default () => {
  const [form] = Form.useForm();
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const myRef = useRef();
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          myRef.current.fn(111);
        }}
      >
        click
      </button>
      <Son ref={myRef} />
      <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item name="note" label="Note" valuePropName="note">
          <Checkbox onChange={(e) => {
            console.log(e.target.checked);
          }}
          >
            Checkbox
          </Checkbox>

        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
