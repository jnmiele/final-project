import React from 'react'
import { connect } from 'react-redux'

import PassengerRequestContainer from './PassengerRequestContainer'
import CompletedTripsContainer from './CompletedTripsContainer'
import PendingTripsContainer from './PendingTripsContainer'
import UserProfileBio from './UserProfileBio'

import { Grid } from 'semantic-ui-react'

class UserProfile extends React.Component {

	render() {
    if (this.props.currentUser.id !== 0) {
      return(
      <div>

        <UserProfileBio user={this.props.currentUser}/>

        <Grid columns={3} divided>

          <Grid.Column>
            <h1 className="container-header"> Completed Trips </h1>
            <CompletedTripsContainer/>
          </Grid.Column>

          <Grid.Column>
            <h1 className="container-header"> Pending Trips </h1>
            <PendingTripsContainer/>
          </Grid.Column>

          <Grid.Column>
           <h1 className="container-header"> Pending Passenger Requests </h1>
            <PassengerRequestContainer/>
          </Grid.Column>

        </Grid>
      </div>
    )
    }
  	return (<div> loading </div>)
	}
}

function mapStateToProps(state) {
	return {
		currentUser: state.users.currentUser
	}
}

export default connect(mapStateToProps)(UserProfile)