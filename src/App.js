import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Posts from './components/Posts';
import NewPost from './components/NewPost';

function App() {
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={ Posts } />
          <Route exact path="/posts/new" component={ NewPost } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
