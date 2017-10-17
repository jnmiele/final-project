import React from 'react'
import { connect } from 'react-redux'

import Trip from './Trip'
import { show, setCurrentUser } from '../actions/users'

import { Grid } from 'semantic-ui-react'

class UserProfile extends React.Component {

  componentDidMount() {
    if (localStorage.getItem('jwtToken')){
      const token = localStorage.getItem('jwtToken')
      this.props.setCurrentUser(token)
    }
  }

  completedTrips = () => {
    if (this.props.trips && this.props.trips.length > 0) {
      let completedTrips = this.props.currentUser.trips
      completedTrips = completedTrips.filter(trip => trip.completed)
      completedTrips = completedTrips.map((trip, index) => <Trip key={index} id={trip.id} destination={trip.destination} origin={trip.origin} driver={trip.driver} passengers={trip.passengers}/>)
      return completedTrips
    }
    return <div> You have no completed trips! </div>
  }

   pendingTrips = () => {
    if (this.props.trips && this.props.trips.length > 0) {
      let pendingTrips = this.props.currentUser.trips
      pendingTrips = pendingTrips.filter(trip => !trip.completed)
      pendingTrips = pendingTrips.map((trip, index) => <Trip key={index} id={trip.id} destination={trip.destination} origin={trip.origin} driver={trip.driver}/>)
      return pendingTrips
    }
    return <div> You have no completed trips! </div>
  }

	render() {
		return(
			<Grid columns={3} divided>
				<Grid.Column>
					<h3> Completed Trips </h3>
						{this.completedTrips()}
				</Grid.Column>
				<Grid.Column>
					<h3> Pending Trips </h3>
						{this.pendingTrips()}
				</Grid.Column>
			</Grid>
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
		currentUser: state.users.currentUser,
    trips: state.users.currentUser.trips
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)