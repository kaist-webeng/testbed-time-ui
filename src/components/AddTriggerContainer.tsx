import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../modules';
import { changeAddInputAsync } from '../modules/addInput';
import { addTriggerAsync } from '../modules/trigger';
import functionResult from '../util/functionResult';
import { AddInputType } from '../util/validateAddInput';
import AddTrigger from './AddTrigger';

const idSelector = (state: RootState) => state.userId.userId;
const triggerResponseSelector = (state: RootState) => state.trigger.addTriggerResponse;
const validationStatusSelector = (state: RootState) => state.addInput;

function AddTriggerContainer() {
  const id = useSelector(idSelector);
  const triggerResponse = useSelector(triggerResponseSelector);
  const validationStatus = useSelector(validationStatusSelector);
  const dispatch = useDispatch();
  const onFinish = (values: {
    schedule: string,
    url: string,
    header?: string,
    form?: string,
  }) => dispatch(addTriggerAsync.request({ ...values, id }));
  const onInputChange = (inputType: AddInputType) => (
    (e: ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      dispatch(changeAddInputAsync.request({
        inputType,
        input: e.target.value,
      }));
    }
  );

  return (
    <AddTrigger
      loading={triggerResponse.loading}
      onFinish={onFinish}
      functionResult={functionResult(triggerResponse)}
      validationStatus={validationStatus}
      onInputChange={onInputChange}
    />
  );
}

export default AddTriggerContainer;
