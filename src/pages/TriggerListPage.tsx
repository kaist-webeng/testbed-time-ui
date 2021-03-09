import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styles from './TriggerListPage.module.css';

function TriggerListPage() {
  const { Content } = Layout;

  return (
    <Content className={styles.TriggerListPage}>
      <h1>Current Triggers</h1>
    </Content>
  );
}

export default TriggerListPage;
