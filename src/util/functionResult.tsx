import React from 'react';
import { CloseCircleOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { TriggerStateTriplet } from '../modules/trigger/types';

function functionResult(triggerResponse: TriggerStateTriplet) {
  const { loading, error, data } = triggerResponse;
  if (!loading) {
    if (error || (data && 'errorMessage' in data)) {
      return (
        <>
          <h3 style={{ color: 'red' }}>
            <CloseCircleOutlined />
            <> Request Failed</>
          </h3>
          <ul>
            <li>
              {error && error.message}
              {data && 'errorMessage' in data && data.errorMessage}
            </li>
          </ul>
        </>
      );
    }
    if (data && 'uuid' in data) {
      return (
        <>
          <h3 style={{ color: 'green' }}>
            <CheckCircleOutlined />
            <> Success!</>
          </h3>
          <ul>
            <li>
              <>Trigger UUID: </>
              <code>{data.uuid}</code>
            </li>
          </ul>
        </>
      );
    }
  }

  return (<></>);
}

export default functionResult;
