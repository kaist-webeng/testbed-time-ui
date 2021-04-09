import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { useSelector } from 'react-redux';

import styles from './TriggerListPage.module.css';

import TriggerListHeaderContainer from '../components/TriggerListHeaderContainer';
import { RootState } from '../modules';
import { StatusResponse, StatusSuccessResponse } from '../api/status';

function TriggerListPage() {
  const { Content } = Layout;
  const { data } = useSelector((state: RootState) => state.status.statusResponse);

  const isSuccessResponse = (r: StatusResponse | null): r is StatusSuccessResponse => {
    if (r !== null) {
      return !('errorMessage' in r);
    }
    return false;
  };

  return (
    <Content className={styles.TriggerListPage}>
      <TriggerListHeaderContainer />
      <div>
        {isSuccessResponse(data) && Object.keys(data).map((uuid) => (
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
    </Content>
  );
}

export default TriggerListPage;
