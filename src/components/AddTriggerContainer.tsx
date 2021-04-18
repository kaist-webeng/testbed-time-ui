import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../modules';
import { addTriggerAsync } from '../modules/trigger';
import functionResult from '../util/functionResult';
import AddTrigger from './AddTrigger';

const idSelector = (state: RootState) => state.userId.userId;
const triggerResponseSelector = (state: RootState) => state.trigger.addTriggerResponse;

function AddTriggerContainer() {
  const id = useSelector(idSelector);
  const triggerResponse = useSelector(triggerResponseSelector);
  const dispatch = useDispatch();
  const onFinish = (values: {
    schedule: string,
    url: string,
    header?: string,
    form?: string,
  }) => dispatch(addTriggerAsync.request({ ...values, id }));

  return (
    <AddTrigger
      loading={triggerResponse.loading}
      onFinish={onFinish}
      functionResult={functionResult(triggerResponse)}
    />
  );
}

export default AddTriggerContainer;
