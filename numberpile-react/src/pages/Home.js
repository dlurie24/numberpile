import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default () => {
  const [nums, setNums] = useState([]);
  const [number, setNumber] = useState(0);

  const addToNums = (num) => {
    var found = false;
    var idx = 0;
    for (var i = 0; i < nums.length; i++) {
      var number = nums[i];
      if (number.number == num) {
        found = true;
        idx = i;
      }
    }
    console.log(found);
    if (found) {
      var number = nums[idx];
      var newNums = nums.slice(0, idx).concat({
        number: num,
        count: number.count + 1,
      });
      console.log(nums[idx]);
      newNums = newNums.concat(nums.slice(idx + 1, nums.length));
      setNums(newNums);
    } else {
      var newNums = nums.concat({
        number: num,
        count: 1,
      });
      setNums(newNums);
    }
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
        return <p>{num.number + ", " + num.count}</p>;
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
