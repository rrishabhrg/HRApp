/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Dashboard } from '../../Dashboard';
import { DummyComponent } from '../../DummyComponent/DummyComponent';

class home extends React.Component {
  render() {
    return (
      <Dashboard>
        <DummyComponent />
      </Dashboard>
    );
  }
}

export default home;
