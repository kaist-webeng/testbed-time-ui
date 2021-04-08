import React, { useEffect } from 'react';
import { Layout, Button } from 'antd';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';

import styles from './TriggerListPage.module.css';

import { getTriggerListAsync } from '../modules/status';
import { RootState } from '../modules';
import { StatusResponse, StatusSuccessResponse } from '../api/status';

function TriggerListPage() {
  const { Content } = Layout;

  const userId = useSelector((state: RootState) => state.userId.userId);
  const { loading, data } = useSelector((state: RootState) => state.status.statusResponse);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data === null) {
      dispatch(getTriggerListAsync.request(userId));
    }
  }, []);

  const isSuccessResponse = (r: StatusResponse | null): r is StatusSuccessResponse => {
    if (r !== null) {
      return !('errorMessage' in r);
    }
    return false;
  };

  return (
    <Content className={styles.TriggerListPage}>
      <div className={styles.ContentTitleSection}>
        <h1 className={styles.ContentTitle}>Current Triggers</h1>
        <Button
          onClick={() => dispatch(getTriggerListAsync.request(userId))}
          loading={loading}
        >
          Refresh
        </Button>
      </div>
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
