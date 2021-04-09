import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

import styles from './TriggerListPage.module.css';
import TriggerListHeaderContainer from '../components/TriggerListHeaderContainer';
import TriggerListContainer from '../components/TriggerListContainer';

function TriggerListPage() {
  const { Content } = Layout;

  return (
    <Content className={styles.TriggerListPage}>
      <TriggerListHeaderContainer />
      <TriggerListContainer />
    </Content>
  );
}

export default TriggerListPage;
