import React, { Component } from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home' 
import Navigation from "./components/Navigation";
import Players from "./containers/Players"
import AddAPlayerForm from './components/AddAPlayerForm'
import MyList from './components/MyList'


class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="App">
          <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/players" component={Players} />
            <Route exact path ='/list' component={MyList} />
            <Route exact path ='/list/new' component={AddAPlayerForm} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
