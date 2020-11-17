import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Contact from './Pages/ContactPage';
import Home from './Pages/HomePage';
import ItemDetail from './Pages/ItemDetailPage';

function App() {
  return (
    <Router basename="/#">
    <div className="App ">
      <Nav />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/:id" component={ItemDetail} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
