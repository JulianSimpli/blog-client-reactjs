import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';

import Posts from './components/Posts';
import NewPost from './components/NewPost';
import EditPost from './components/EditPost';

function App() {
  return (
    <Router>
      <Header />

      <div className="container">
        <Switch>
          <Route exact path="/" component={ Posts } />
          <Route exact path="/posts/new" component={ NewPost } />
          <Route exact path="/posts/edit/:id" component={ EditPost } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
