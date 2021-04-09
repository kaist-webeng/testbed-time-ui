import React from 'react';
import { StatusSuccessResponse } from '../api/status';

type TriggerListProps = {
  data: StatusSuccessResponse;
}

function TriggerList({
  data,
}: TriggerListProps) {
  return (
    <div>
      {Object.keys(data).map((uuid) => (
        <div key={uuid}>
          <h4>{uuid}</h4>
          <ul>
            <li>
              <>Schedule: </>
              {data[uuid].schedule}
            </li>
            <li>
              <>URL: </>
              {data[uuid].url}
            </li>
            <li>
              <>User ID: </>
              {data[uuid].user}
            </li>
            <li>
              <>Header: </>
              {data[uuid].header}
            </li>
            <li>
              <>Form: </>
              {data[uuid].form}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TriggerList;
