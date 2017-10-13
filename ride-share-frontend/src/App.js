import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import SignupForm from './components/SignupForm'
import TripsContainer from './components/TripsContainer'
import TripShow from './components/TripShow'
import UsersShow from './components/UsersShow'



class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/signup" component={SignupForm}/>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/users/:id" component={UsersShow}/>

          <Route exact path="/trips/new" component={TripsContainer}/>
          <Route exact path="/trips" component={TripsContainer}/>
          <Route exact path="/trips/:id" component={TripShow}/>
          <Route render={() => <div> Error 404: Yeah you know what that means...</div>} />
        </Switch>
      </div>
    );
  }
}

export default App;