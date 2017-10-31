import React from 'react'
import { connect } from 'react-redux'

import PassengerRequestContainer from './PassengerRequestContainer'
import CompletedTripsContainer from './CompletedTripsContainer'
import PendingTripsContainer from './PendingTripsContainer'
import UserProfileBio from './UserProfileBio'
import { fetchAllUserTrips } from '../actions/userTrips'
import { setCurrentUser } from '../actions/users'

import { Grid } from 'semantic-ui-react'

class UserProfile extends React.Component {

	render() {
    console.log(this.props)
    if (this.props.currentUser && this.props.currentUser.id !== 0) {
      return(
      <div>

        <UserProfileBio user={this.props.currentUser}/>
        <div id='profile-column-container'>
          <Grid columns={3} divided>

            <Grid.Column>
              <CompletedTripsContainer {...this.props.currentUser}/>
            </Grid.Column>

            <Grid.Column>
              
              <PendingTripsContainer {...this.props.currentUser}/>
            </Grid.Column>

            <Grid.Column>
              <PassengerRequestContainer {...this.props}/>
            </Grid.Column>

          </Grid>
        </div>
      </div>
    )
    }
  	return (<div> loading </div>)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.users.currentUser,
    userTrips: state.userTrips.all
	}
}

export default connect(mapStateToProps)(UserProfile)