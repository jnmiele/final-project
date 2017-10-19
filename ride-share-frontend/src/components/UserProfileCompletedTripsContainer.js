import React from 'react';
import { connect } from 'react-redux'

import { Card } from 'semantic-ui-react'


import Trip from './Trip'


class UserProfileCompletedTripsContainer extends React.Component {

	render() {
		if (this.props.trips && this.props.trips.length > 0) {
	    const pendingTrips = this.props.trips.map((trip, index) => {
	    	if (trip.completed) {
	    		<Trip key={index} id={trip.id} destination={trip.destination} origin={trip.origin} driver={trip.driver} passengers={trip.passengers} completed={trip.completed}/>
	    	}
	    })
			return (
        <Card.Group>
					{pendingTrips}
        </Card.Group>
			)	
		}
		return(
			<div> loader </div>
		)
	}
}

function mapStateToProps(state) {
	return {
		trips: state.users.currentUser.trips
	}
}

export default connect(mapStateToProps)(UserProfileCompletedTripsContainer)