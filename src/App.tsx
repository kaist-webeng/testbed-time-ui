import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import UserIdPopupContainer from './components/UserIdPopupContainer';
import PageHeader from './components/PageHeader';
import ActionsPage from './pages/ActionsPage';
import TriggerListPage from './pages/TriggerListPage';

function App() {
  return (
    <>
      <UserIdPopupContainer />
      <Layout style={{ minHeight: "100vh" }}>
        <PageHeader />
        <Switch>
          <Route path="/" exact={true} component={ActionsPage} />
          <Route path="/list" component={TriggerListPage} />
          <Redirect path="*" to="/" />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
