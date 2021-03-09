import React from 'react';
import { Modal, InputNumber } from 'antd';
import 'antd/dist/antd.css';

type UserIdPopupProps = {
  userId: number;
  isVisible: boolean;
  onChange: (v: number) => void;
  onClick: (e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => void;
}

function UserIdPopup({
  userId,
  isVisible,
  onChange,
  onClick,
}: UserIdPopupProps) {
  return (
    <Modal
      title="User ID"
      closable={false}
      visible={isVisible}
      cancelButtonProps={{ style: { display: 'none' } }}
      okText="Confirm"
      onOk={onClick}
    >
      <p>Please set your ID to start using the time resources.</p>
      <InputNumber
        name="userId"
        type="number"
        onChange={onChange}
        value={userId}
        autoFocus
        size="large"
        onPressEnter={onClick}
        style={{ minWidth: '10em' }}
      />
    </Modal>
  );
}

export default UserIdPopup;
