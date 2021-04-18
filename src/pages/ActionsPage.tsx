import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styles from './ActionsPage.module.css';
import AddTriggerContainer from '../components/AddTriggerContainer';
import RemoveTriggerContainer from '../components/RemoveTriggerContainer';

function ActionsPage() {
  const { Content } = Layout;

  return (
    <Content className={styles.ActionsPage}>
      <h1>Available Functions</h1>
      <AddTriggerContainer />
      <p />
      <RemoveTriggerContainer />
    </Content>
  );
}

export default ActionsPage;
