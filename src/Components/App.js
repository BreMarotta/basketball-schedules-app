import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import Navigation from './Navigation'
import Schedule from './Schedule'
import Team from './Team'
import NewLocationForm from './NewLocationForm'
import Location from './Location'


function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/locations" component={Location}/>
          <Route exact path="/schedule" component={Schedule}/>
          <Route exact path="/location/new" component={NewLocationForm} />
          <Route path="/schedule/:name" component={Team}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
