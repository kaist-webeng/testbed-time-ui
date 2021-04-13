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
  const showLongData = (longData: string | undefined, longDataName: string) => {
    if (longData && longData.length > 20) {
      return (
        <div>
          <span>
            {longDataName}
            <> of this trigger:</>
          </span>
          <code style={{ userSelect: 'all' }}>{longData}</code>
        </div>
      );
    }
    return (<></>);
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={statusData}
        rowKey={(record) => record.uuid}
        expandable={{
          expandedRowRender: (record) => (
            <>
              <div>
                <span>UUID of this trigger: </span>
                <code style={{ userSelect: 'all' }}>{record.uuid}</code>
              </div>
              {showLongData(record.header, 'Header')}
              {showLongData(record.form, 'Form')}
            </>
          ),
        }}
      />
    </>
  );
}

export default TriggerList;
