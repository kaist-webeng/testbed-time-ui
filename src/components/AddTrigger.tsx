import React, { ReactNode } from 'react';
import {
  Card,
  Input,
  Button,
  Form,
  FormItemProps,
} from 'antd';

type TriggerFormItem =
  & FormItemProps
  & { innerComponent: ReactNode }

const formItems: TriggerFormItem[] = [
  {
    label: 'Schedule',
    name: 'schedule',
    rules: [{
      required: true,
      message: 'Please set the triggering schedule!',
    }],
    innerComponent: <Input />,
  },
  {
    label: 'URL',
    name: 'url',
    rules: [{
      required: true,
      message: 'Please set the endpoint url!',
    }],
    innerComponent: <Input />,
  },
  {
    label: 'Header',
    name: 'header',
    innerComponent: <Input.TextArea autoSize={{ maxRows: 5 }} />,
  },
  {
    label: 'Form',
    name: 'form',
    innerComponent: <Input.TextArea autoSize={{ maxRows: 5 }} />,
  },
];

type AddTriggerProps = {
  loading: boolean;
  onFinish: (values: {
    schedule: string,
    url: string,
    header?: string,
    form?: string,
  }) => void;
  functionResult: ReactNode;
}

function AddTrigger({
  loading,
  onFinish,
  functionResult,
}: AddTriggerProps) {
  return (
    <Card title="Add a New Trigger">
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
      >
        {formItems.map(({ innerComponent, ...formItemProps }: TriggerFormItem) => (
          <Form.Item
            {...formItemProps}
            key={formItemProps.name?.toString()}
          >
            {innerComponent}
          </Form.Item>
        ))}
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
