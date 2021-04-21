import React from 'react';
import { Table } from 'antd';
import { StatusSuccessResponse } from '../api/status';
import columns from '../util/columnSetting';

type ArrayElement<A> = A extends readonly (infer T)[] ? T : never;
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
          expandedRowRender: ({
            uuid,
            header,
            form,
          }: ArrayElement<typeof statusData>) => (
            <>
              <div>
                <span>UUID of this trigger: </span>
                <code style={{ userSelect: 'all' }}>{uuid}</code>
              </div>
              {showLongData(header, 'Header')}
              {showLongData(form, 'Form')}
            </>
          ),
        }}
      />
    </>
  );
}

export default TriggerList;
