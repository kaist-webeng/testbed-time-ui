import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

// pages
import ActionsPage from './pages/ActionsPage';
import TriggerListPage from './pages/TriggerListPage';

// components
import UserIdPopupContainer from './components/UserIdPopupContainer';
import SidebarContainer from './components/SidebarContainer';

function App() {
  return (
    <>
      <UserIdPopupContainer />
      <Layout style={{ minHeight: '100vh' }}>
        <SidebarContainer />
        <Switch>
          <Route path="/" exact component={ActionsPage} />
          <Route path="/list" component={TriggerListPage} />
          <Redirect path="*" to="/" />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
