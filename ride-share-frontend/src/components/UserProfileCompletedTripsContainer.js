import React from 'react';
import { connect } from 'react-redux'

import { Card } from 'semantic-ui-react'

import Trip from './Trip'
import UserProfileTrip from './UserProfileTrip'

class UserProfileCompletedTripsContainer extends React.Component {

	render() {
		if (this.props.trips && this.props.trips.length > 0) {
	    const completedTrips = this.props.trips.map((trip, index) => {
	    	if (trip.completed) {
	    		return <UserProfileTrip date={trip.date} time={trip.time} userId={this.props.currentUserId} key={trip.id} id={trip.id} destination={trip.destination} origin={trip.origin} driver={trip.driver} passengers={trip.passengers} completed={trip.completed}/>
	    	}
	    })
			return (
				<div className="one-of-three-column-container">
  				<h1> Completed Trips </h1>
	        <Card.Group>
						{completedTrips}
	        </Card.Group>
	      </div>
			)	
		}
		return(
			<div> loader </div>
		)
	}
}

function mapStateToProps(state) {
	return {
		trips: state.users.currentUser.trips,
		currentUserId: state.users.currentUser.id
	}
}

export default connect(mapStateToProps)(UserProfileCompletedTripsContainer)