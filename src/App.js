import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home' 
import Navigation from "./components/Navigation";


class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="App">
          <Switch>
            <Route exact="/" component={Home} />
            <Route exact="/stories" component={Yada} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
