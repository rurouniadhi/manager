import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import PersonsList from './components/PersonsList';
import PersonCreate from './components/PersonCreate';
import PersonEdit from './components/PersonEdit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
          />
        </Scene>
        <Scene key="main">
          <Scene
            onRight={() => Actions.personCreate()}
            rightTitle="Add"
            key="personList"
            component={PersonsList}
            title="Persons"
            renderBackButton={() => (null)}
            initial
          />
          <Scene
            key="personCreate"
            component={PersonCreate}
            title="Create Person"
          />
          <Scene
            key="personEdit"
            component={PersonEdit}
            title="Edit"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
