import React from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../modules';
import { StatusResponse, StatusSuccessResponse } from '../api/status';
import TriggerList from './TriggerList';

function TriggerListContainer() {
  const { data } = useSelector((state: RootState) => state.status.statusResponse);
  const isSuccessResponse = (r: StatusResponse | null): r is StatusSuccessResponse => {
    if (r !== null) {
      return !('errorMessage' in r);
    }
    return false;
  };

  return (
    <>
      {isSuccessResponse(data) && <TriggerList data={data} />}
    </>
  );
}

export default TriggerListContainer;
