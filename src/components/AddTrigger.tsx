import React, { ChangeEventHandler, ReactNode } from 'react';
import {
  Card,
  Input,
  Button,
  Form,
  FormItemProps,
} from 'antd';
import styles from './AddTrigger.module.css';
import { ChangeAddInputState } from '../modules/addInput/types';
import { AddInputType } from '../util/validateAddInput';

type TriggerFormItem =
  & FormItemProps
  & { innerComponent: ReactNode }

type AddTriggerProps = {
  loading: boolean;
  onFinish: (values: {
    schedule: string,
    url: string,
    header?: string,
    form?: string,
  }) => void;
  functionResult: ReactNode;
  validationStatus: ChangeAddInputState;
  onInputChange: (inputType: AddInputType) => ChangeEventHandler;
}

function AddTrigger({
  loading,
  onFinish,
  functionResult,
  validationStatus,
  onInputChange,
}: AddTriggerProps) {
  const formItems: TriggerFormItem[] = [
    {
      label: 'Schedule',
      name: 'schedule',
      rules: [{
        required: true,
        message: 'Please set the triggering schedule!',
      }],
      ...validationStatus.schedule,
      innerComponent: <Input onChange={onInputChange('schedule')} />,
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
      ...validationStatus.header,
      innerComponent: <Input.TextArea
        className={styles.CodeInput}
        autoSize={{ maxRows: 5 }}
        onChange={onInputChange('header')}
      />,
    },
    {
      label: 'Form',
      name: 'form',
      ...validationStatus.form,
      innerComponent: <Input.TextArea
        className={styles.CodeInput}
        autoSize={{ maxRows: 5 }}
        onChange={onInputChange('form')}
      />,
    },
  ];

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
