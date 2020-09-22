import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default () => {
  const [nums, setNums] = useState([]);

  const addToNums = (num) => {
    setNums(nums.concat(num));
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    addToNums(values.number);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  console.log(nums.type);
  return (
    <>
      <h1>Number Pile</h1>
      <h2>Add your number to the number pile</h2>
      {nums.map((num, i) => {
        return <p>{num + ", "}</p>;
      })}
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Number"
          name="number"
          rules={[{ required: true, message: "Add your number to the pile!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
