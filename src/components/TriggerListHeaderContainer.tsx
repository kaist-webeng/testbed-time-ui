import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../modules';
import { getTriggerListAsync } from '../modules/status';
import TriggerListHeader from './TriggerListHeader';

const userIdSelector = (state: RootState) => state.userId.userId;
const statusResponseSelector = (state: RootState) => state.status.statusResponse;

function TriggerListHeaderContainer() {
  const userId = useSelector(userIdSelector);
  const { loading, data } = useSelector(statusResponseSelector);
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(getTriggerListAsync.request(userId));
  };

  useEffect(() => {
    if (data === null) {
      dispatch(getTriggerListAsync.request(userId));
    }
  }, []);

  return (
    <>
      <TriggerListHeader
        loading={loading}
        onClick={onClick}
      />
    </>
  );
}

export default TriggerListHeaderContainer;
