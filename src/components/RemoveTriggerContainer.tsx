import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../modules';
import { removeTriggerAsync } from '../modules/trigger';
import functionResult from '../util/functionResult';
import RemoveTrigger from './RemoveTrigger';

const idSelector = (state: RootState) => state.userId.userId;
const triggerResponseSelector = (state: RootState) => state.trigger.removeTriggerResponse;

function RemoveTriggerContainer() {
  const id = useSelector(idSelector);
  const triggerResponse = useSelector(triggerResponseSelector);
  const dispatch = useDispatch();
  const onFinish = (values: {
    uuid: string
  }) => dispatch(removeTriggerAsync.request({ ...values, id }));

  return (
    <RemoveTrigger
      loading={triggerResponse.loading}
      onFinish={onFinish}
      functionResult={functionResult(triggerResponse)}
    />
  );
}

export default RemoveTriggerContainer;
