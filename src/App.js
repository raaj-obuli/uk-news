import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Shell from './components/Shell';
import News from './containers/News'

function App() {
  return (
    <Shell>
      <Router>
        <Switch>
          <Route exact path="/" component={News} />
        </Switch>
      </Router>
    </Shell>
  );
}

export default App;
