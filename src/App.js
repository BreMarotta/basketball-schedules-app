import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import Navigation from './Navigation'
import Schedule from './Schedule'
import Child from './Child'
import TestContext from './TestContext'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <hr/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/schedule" component={Schedule}/>
          <Route path="/schedule/:id" component={Child}/>
          <Route path="/test" component={TestContext}/>
          {/* <Route exact path="/schedule/new" component={NewGameForm} /> */}

        </Switch>
      </div>
    </Router>
  );
}

export default App;
