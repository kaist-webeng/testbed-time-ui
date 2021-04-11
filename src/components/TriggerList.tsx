import React from 'react';
import { Table } from 'antd';
import { StatusSuccessResponse } from '../api/status';
import columns from '../util/columnSetting';

type TriggerListProps = {
  data: StatusSuccessResponse;
}

const convertStatusResponse = (r: StatusSuccessResponse) => Object.keys(r).map((uuid) => {
  const ret = {
    ...r[uuid],
    uuid,
  };
  return ret;
});

function TriggerList({
  data,
}: TriggerListProps) {
  const statusData = convertStatusResponse(data);
  return (
    <>
      <Table
        columns={columns}
        dataSource={statusData}
        rowKey={(record) => record.uuid}
        expandable={{
          expandedRowRender: (record) => (
            <>
              <span>UUID of this trigger: </span>
              <code style={{ userSelect: 'all' }}>{record.uuid}</code>
            </>
          ),
        }}
      />
    </>
  );
}

export default TriggerList;
