import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import SignupForm from './components/SignupForm'
import TripsContainer from './components/TripsContainer'
import TripShow from './components/TripShow'
import UserProfile from './components/UserProfile'
import UsersShow from './components/UsersShow'
import Authorize from './components/Authorize'



class App extends Component {

  

  render() {
    const AuthorizedTripsContainer = Authorize(TripsContainer)
    const AuthorizedSignupForm = Authorize(SignupForm)
    const AuthorizedLoginForm = Authorize(LoginForm)
    const AuthorizedUsersShow = Authorize(UsersShow)
    const AuthorizedTripShow = Authorize(TripShow)
    const AuthorizedHome = Authorize(Home)
    const AuthorizedUserProfile = Authorize(UserProfile)

    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={(props) => <AuthorizedHome props={props} />}/>
          <Route exact path="/me" component={AuthorizedUserProfile}/>
          <Route exact path="/signup" component={AuthorizedSignupForm}/>
          <Route exact path="/login" component={AuthorizedLoginForm}/>
          <Route exact path="/users/:id" render={(props) => <AuthorizedUsersShow props={props}/>}/>

          <Route exact path="/trips/new" render={(props) => <AuthorizedTripsContainer props={props}/>}/>
          <Route exact path="/trips" render={(props) => <AuthorizedTripsContainer props={props}/>}/>
          <Route exact path="/trips/:id" component={AuthorizedTripShow}/>
          <Route render={() => <div> Error 404: Yeah you know what that means...</div>} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App