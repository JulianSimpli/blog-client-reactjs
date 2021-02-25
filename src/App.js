import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Posts from './components/Posts';

function App() {
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={ Posts } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
