import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom'
import SignupForm from './components/SignupForm'
import Home from './components/Home'
import TripsContainer from './components/TripsContainer'


class App extends Component {

  doSignup = (userParams) => {
    // on submit I want to update the store
    console.log("go ahead and do something with the user now...", userParams)
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) => <Home {...props} />}/>
        <Route exact path="/trips" render={(props) => <TripsContainer {...props} />}/>
        <Route exact path="/signup" render={(props) => <SignupForm doSignup={this.doSignup} {...props} />}/>
      </div>
    );
  }
}

export default App;
