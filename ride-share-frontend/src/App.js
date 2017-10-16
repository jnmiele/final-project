import React, { Component } from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import SignupForm from './components/SignupForm'
import TripsContainer from './components/TripsContainer'
import TripShow from './components/TripShow'
import UsersShow from './components/UsersShow'
import { setUser } from './actions/users'



class App extends Component {

  // componentDidMount() {
  //   if (localStorage.getItem('jwtToken')){
  //     const token = localStorage.getItem('jwtToken')
  //     this.props.setUser(token)
  //   }
  // }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={(props) => <Home props={props} />}/>
          <Route exact path="/signup" component={SignupForm}/>
          <Route exact path="/login" component={LoginForm}/>
          <Route exact path="/users/:id" render={(props) => <UsersShow props={props}/>}/>

          <Route exact path="/trips/new" render={(props) => <TripsContainer props={props}/>}/>
          <Route exact path="/trips" render={(props) => <TripsContainer props={props}/>}/>
          <Route exact path="/trips/:id" component={TripShow}/>
          <Route render={() => <div> Error 404: Yeah you know what that means...</div>} />
        </Switch>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     setUser: (token) => {
//       dispatch(setUser(token))
//     }
//   }
// }

export default App;
// export default connect(null, mapDispatchToProps)(App);








