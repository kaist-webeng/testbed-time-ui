import React from 'react';
import { Button } from 'antd';

import styles from './TriggerListHeader.module.css';

type TriggerListHeaderProps = {
  loading: boolean;
  onClick: () => void;
}

function TriggerListHeader({
  loading,
  onClick,
}: TriggerListHeaderProps) {
  return (
    <div className={styles.TitleSection}>
      <h1 className={styles.Title}>Current Triggers</h1>
      <Button
        loading={loading}
        onClick={onClick}
      >
        Refresh
      </Button>
    </div>
  );
}

export default TriggerListHeader;
