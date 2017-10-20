import React from 'react'
import { connect } from 'react-redux'

import PassengerRequestContainer from './PassengerRequestContainer'
import UserProfileCompletedTripsContainer from './UserProfileCompletedTripsContainer'
import UserProfilePendingTripsContainer from './UserProfilePendingTripsContainer'
import UserProfileBio from './UserProfileBio'

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

        <UserProfileBio />

  			<Grid columns={3} divided>

  				<Grid.Column>
            <UserProfileCompletedTripsContainer/>
  				</Grid.Column>

  				<Grid.Column>
            <UserProfilePendingTripsContainer/>
          </Grid.Column>

          <Grid.Column>
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