import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserId } from '../modules/userId';
import { RootState } from '../modules';
import UserIdPopup from './UserIdPopup';

function UserIdPopupContainer() {
  const { userId: initialUid, isFirst } = useSelector((state: RootState) => state.userId);
  const [uid, setUid] = useState(initialUid);
  const dispatch = useDispatch();

  const onChange = (v: number) => {
    setUid(v);
  };

  const onClick = (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setUserId(uid));
  };

  return (
    <>
      <UserIdPopup
        userId={uid}
        isVisible={isFirst}
        onChange={onChange}
        onClick={onClick}
      />
    </>
  );
}

export default UserIdPopupContainer;
