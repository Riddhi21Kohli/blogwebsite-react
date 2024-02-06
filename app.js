
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SearchProvider } from './SearchContext';
import Blog from './Blog';

const App = () => {
  return (
    <Router>
      <SearchProvider>
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </SearchProvider>
    </Router>
  );
};

export default App;
