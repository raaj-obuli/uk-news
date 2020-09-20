import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Shell from './components/Shell';
import News from './containers/News'
import Article from './containers/Article'

function App() {
  return (
    <Shell>
      <Router>
        <Switch>
          <Route exact path="/" component={News} />
          <Route exact path="/article/:id" component={Article} />
        </Switch>
      </Router>
    </Shell>
  );
}

export default App;
