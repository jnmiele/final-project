import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import SignupForm from './components/SignupForm'
import TripsContainer from './components/TripsContainer'
import TripForm from './components/TripForm'
import TripShow from './components/TripShow'



class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={(props) => <Home {...props} />}/>
        <Route exact path="/trips" render={(props) => <TripsContainer {...props} />}/>
        <Route exact path="/trips/:id" render={(props) => <TripShow {...props} />}/>
        <Route exact path="/signup" render={(props) => <SignupForm {...props} />}/>
        <Route exact path="/login" render={(props) => <LoginForm {...props} />}/>
        <Route exact path="/trips/new" render={(props) => <TripForm {...props} />}/>
      </div>
    );
  }
}

export default App;