import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './Pages/HomePage';
import About from './Pages/AboutPage';
import Projects from './Pages/ProjectsPage';
import Timeline from './Pages/TimelinePage';

function App() {
  return (
    <Router basename="/#">
    <div className="App ">
    <div className="me">
       </div>
      <Nav />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/timeline" exact component={Timeline} />
            <Route path="/projects" component={Projects} />            
        </Switch>
    </div>
    </Router>
  );
}

export default App;
