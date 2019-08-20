import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import {
  hrhome, eventhome, roomhome, Dashboard,
} from './pages';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/app" component={Dashboard} />
      <Route exact path="/app/hr" component={hrhome} />
      <Route exact path="/app/event" component={eventhome} />
      <Route exact path="/app/room" component={roomhome} />
    </Switch>
  </Router>
);

export default App;
