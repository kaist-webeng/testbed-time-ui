import React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import styles from './ActionsPage.module.css';

function ActionsPage() {
  const { Content } = Layout;

  return (
    <Content className={styles.ActionsPage}>
      <h1>Available Functions</h1>
    </Content>
  )
}

export default ActionsPage;