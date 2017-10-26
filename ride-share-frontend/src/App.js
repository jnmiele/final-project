import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux'

import { Route, Switch, withRouter } from 'react-router-dom'
import Credits from './components/Credits'
import Footer from './components/Footer'
import Logo from './components/Logo'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import SignupForm from './components/SignupForm'
import TripsContainer from './components/TripsContainer'
import TripShow from './components/TripShow'
import UserProfile from './components/UserProfile'
import UsersShow from './components/UsersShow'
import Authorize from './components/Authorize'
import { setCurrentUser } from './actions/users'
import { fetchAllUserTrips } from './actions/userTrips'


class App extends Component {

  componentDidMount() {
    if (localStorage.getItem('jwtToken')) {
      this.props.setCurrentUser()
      this.props.fetchAllUserTrips()
    }
  }

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
        <Logo/>
        <NavBar/>

        <Switch>  
          <Route exact path='/credits' render={Credits} />
          <Route exact path="/" render={(props) => <AuthorizedHome {...props} />}/>
          <Route exact path="/me" component={AuthorizedUserProfile}/>
          <Route exact path="/signup" component={AuthorizedSignupForm}/>
          <Route exact path="/login" component={AuthorizedLoginForm}/>
          <Route exact path="/users/:id" render={(props) => <AuthorizedUsersShow {...props} {...this.props}/>}/>
          <Route exact path="/trips/new" render={(props) => <AuthorizedTripsContainer {...props} {...this.props} />}/>
          <Route exact path="/trips" render={(props) => <AuthorizedTripsContainer {...props} {...this.props}/>}/>
          <Route exact path="/trips/:id" component={AuthorizedTripShow}/>
          <Route render={() => <div> Error 404: Yeah you know what that means...</div>} />
        </Switch>
        
        <Footer />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
   return {
    setCurrentUser: () => {
      dispatch(setCurrentUser())
    },
    fetchAllUserTrips: () => {
      dispatch(fetchAllUserTrips())
    }
  } 
}

function mapStateToProps(state) {
  return {
    user: state.users.currentUser
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))