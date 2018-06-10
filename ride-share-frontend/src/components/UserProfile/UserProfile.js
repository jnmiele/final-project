import React from 'react'
import { connect } from 'react-redux'

import PassengerRequestContainer from '../PassengerRequestContainer'
import TripsContainer from './TripsContainer'
import UserProfileBio from '../UserProfileBio'

import { Grid } from 'semantic-ui-react'

class UserProfile extends React.Component {

	render() {
    const { currentUser } = this.props;

    if (currentUser && currentUser.id !== 0) {
      return(
      <div>
        <UserProfileBio user={currentUser}/>
        <div id='profile-column-container'>
          <Grid columns={3} divided>

            <Grid.Column>
              <TripsContainer containerType='completed' {...currentUser}/>
            </Grid.Column>

            <Grid.Column>
              <TripsContainer containerType='pending' {...currentUser}/>
            </Grid.Column>

            <Grid.Column>
              <PassengerRequestContainer {...this.props}/>
            </Grid.Column>

          </Grid>
        </div>
      </div>
    )
    }
  	return <div> loading </div>
	}
}

function mapStateToProps(state) {
	return {
    currentUser: state.users.currentUser,
    userTrips: state.userTrips.all
	}
}

export default connect(mapStateToProps)(UserProfile)