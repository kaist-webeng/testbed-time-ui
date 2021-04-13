import React from 'react';
import { Tooltip } from 'antd';
import { ExceptionOutlined } from '@ant-design/icons';
import cronstrue from 'cronstrue';

const columns = [
  {
    title: 'User ID',
    dataIndex: 'user',
    key: 'user',
  },
  {
    title: 'Schedule',
    dataIndex: 'schedule',
    key: 'schedule',
    render: (schedule: string) => (
      <Tooltip title={cronstrue.toString(schedule)}>
        <code>{schedule}</code>
      </Tooltip>
    ),
  },
  {
    title: 'URL Endpoint',
    dataIndex: 'url',
    key: 'url',
    render: (url: string) => {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        return (
          <a href={url}>{url}</a>
        );
      }
      return <a href={`http://${url}`}>{url}</a>;
    },
  },
  {
    title: 'Header',
    dataIndex: 'header',
    key: 'header',
    render: (header: string | undefined) => {
      if (header && header.length > 20) {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <code>{`${header.substring(0, 5)} ...`}</code>
            <Tooltip title="The data is too long, expand the description to check entire data.">
              <ExceptionOutlined
                style={{ fontSize: '1.33em' }}
              />
            </Tooltip>
          </div>
        );
      }
      return (header && <code>{header}</code>);
    },
  },
  {
    title: 'Form',
    dataIndex: 'form',
    key: 'form',
    render: (form: string | undefined) => {
      if (form && form.length > 20) {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <code>{`${form.substring(0, 5)} ...`}</code>
            <Tooltip title="The data is too long, expand the description to check entire data.">
              <ExceptionOutlined
                style={{ fontSize: '1.33em' }}
              />
            </Tooltip>
          </div>
        );
      }
      return (form && <code>{form}</code>);
    },
  },
];

export default columns;
