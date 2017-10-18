import React from 'react'
import { connect } from 'react-redux'

import Trip from './Trip'
import UserProfileTripRequest from './UserProfileTripRequest'
import { setCurrentUser } from '../actions/users'

import { Grid, Card } from 'semantic-ui-react'

class UserProfile extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('jwtToken')){
      const token = localStorage.getItem('jwtToken')
      this.props.setCurrentUser(token)
    }
  }

  completedTrips = () => {
    if (this.props.currentUser.trips && this.props.currentUser.trips.length > 0) {
      let completedTrips = this.props.currentUser.trips
      completedTrips = completedTrips.filter(trip => trip.completed)
      completedTrips = completedTrips.map((trip, index) => <Trip key={index} id={trip.id} destination={trip.destination} origin={trip.origin} driver={trip.driver} passengers={trip.passengers}/>)
      return completedTrips
    }
    return <div> You have no completed trips! </div>
  }

  pendingTrips = () => {
    if (this.props.currentUser.trips && this.props.currentUser.trips.length > 0) {
      let pendingTrips = this.props.currentUser.trips
      pendingTrips = pendingTrips.filter(trip => !trip.completed)
      pendingTrips = pendingTrips.map((trip, index) => <Trip key={index} id={trip.id} destination={trip.destination} origin={trip.origin} driver={trip.driver} passengers={trip.passengers}/>)
      return pendingTrips
    }
    return <div> You have no completed trips! </div>
  }

  awaitingApproval = () => { // needs major refactoring
    if (this.props.currentUser.trips && this.props.currentUser.trips.length > 0) {

      let awaitingApproval = this.props.currentUser.trips
      awaitingApproval = awaitingApproval.filter(trip => trip.driver.id === this.props.currentUser.id)

      let requests = []

      awaitingApproval.forEach(trip => {
        trip.user_trips.forEach(ut => requests.push(ut))
      })

      requests = requests.filter(req => req.role === "Passenger")
      console.log(requests)
      requests = requests.map((req, index) => <UserProfileTripRequest key={index} id={req.id} userId={req.user_id} role={req.role} />)
      return requests
    }
    return <div> You have no passenger requests at this time. </div>
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
            <Card.Group>
  						{this.completedTrips()}
            </Card.Group>
  				</Grid.Column>
  				<Grid.Column>
  					<h3> Pending Trips </h3>
            <Card.Group>
  						{this.pendingTrips()}
            </Card.Group>
          </Grid.Column>
          <Grid.Column>
            <h3> Awaiting Your Approval </h3>
            <Card.Group>
              {this.awaitingApproval()}
            </Card.Group>
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