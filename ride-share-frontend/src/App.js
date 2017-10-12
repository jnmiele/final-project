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
import UsersShow from './components/UsersShow'



class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Route exact path="/" render={(props) => <Home {...props} />}/>
        <Route exact path="/trips" render={(props) => <TripsContainer {...props} />}/>
        <Route path="/new_trip" render={(props) => <TripForm {...props} />}/>
        <Route path="/trips/:id" render={(props) => <TripShow {...props} />}/>
        <Route path="/users/:id" render={(props) => <UsersShow {...props} />}/>
        <Route path="/signup" render={(props) => <SignupForm {...props} />}/>
        <Route path="/login" render={(props) => <LoginForm {...props} />}/>
      </div>
    );
  }
}

export default App;