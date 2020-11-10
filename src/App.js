import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/layouts/Navbar'
import Dashboard from './components/layouts/DashBoard'
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Pokemon from './components/pokemon/Pokemon'

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
            </Switch>
          </div>
        </div>
      </Router>
    );  
  }
}

export default App;
