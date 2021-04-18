import React, { ReactNode } from 'react';
import {
  Card,
  Input,
  Button,
  Form,
} from 'antd';

type AddTriggerProps = {
  loading: boolean;
  onFinish: (values: { uuid: string }) => void;
  functionResult: ReactNode;
}

function AddTrigger({
  loading,
  onFinish,
  functionResult,
}: AddTriggerProps) {
  return (
    <Card title="Remove an Existing Trigger">
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="UUID"
          name="uuid"
          rules={[{
            required: true,
            message: 'Please set the uuid!',
          }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{ offset: 5, span: 16 }}
        >
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
      {functionResult}
    </Card>
  );
}

export default AddTrigger;
