import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import VendingMachine from './components/VendingMachine';
import HotCheetos from './components/HotCheetos';
import Monster from './components/Monster';
import ProteinBites from './components/ProteinBites';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/hot_cheetos" component={HotCheetos} />
          <Route exact path="/monster" component={Monster} />
          <Route exact path="/protein_bites" component={ProteinBites} />
        </Switch>
      </div>
    );
  }
}

export default App;
