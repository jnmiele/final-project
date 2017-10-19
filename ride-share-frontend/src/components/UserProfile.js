import React from 'react'
import { connect } from 'react-redux'

import UserProfileCompletedTripsContainer from './UserProfileCompletedTripsContainer'
import UserProfilePendingTripsContainer from './UserProfilePendingTripsContainer'
import PassengerRequestContainer from './PassengerRequestContainer'

import { setCurrentUser } from '../actions/users'

import { Grid } from 'semantic-ui-react'

class UserProfile extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('jwtToken')){
      const token = localStorage.getItem('jwtToken')
      this.props.setCurrentUser(token)
    }
  }

	render() {
  	return(
      <div>
        <Grid columns={3}> 
          <Grid.Column>
            <h3> This is where a profile picture would go </h3>
          </Grid.Column>
          <Grid.Column>
            <h3> This is where user notifications will go </h3>
          </Grid.Column>
          <Grid.Column>
            <h3> And who knows what will go here.... </h3>
          </Grid.Column>
        </Grid>

  			<Grid columns={3} divided>

  				<Grid.Column>
  					<h3> Completed Trips </h3>
            <UserProfileCompletedTripsContainer/>
  				</Grid.Column>

  				<Grid.Column>
            <h3> Pending Trips </h3>
            <UserProfilePendingTripsContainer/>
          </Grid.Column>

          <Grid.Column>
            <h3> Pending Passenger Requests </h3>
            <PassengerRequestContainer/>
          </Grid.Column>

  			</Grid>
      </div>
		)
	}
}
function mapDispatchToProps(dispatch) {
	return {
    setCurrentUser: (user) => {
      dispatch(setCurrentUser(user))
    }
  }
}

function mapStateToProps(state) {
	return {
		currentUser: state.users.currentUser
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)