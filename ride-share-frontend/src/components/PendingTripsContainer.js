import React from 'react';
import { connect } from 'react-redux'

import { Card } from 'semantic-ui-react'

import CompletedOrPendingTrip from './CompletedOrPendingTrip'


class PendingTripsContainer extends React.Component {

	render() {
		if (this.props.trips && this.props.trips.length > 0) {

	    const pendingTrips = this.props.trips.map((trip, index) => {
	    	if (!trip.completed) {
	    		return <CompletedOrPendingTrip date={trip.date} time={trip.time} userId={this.props.currentUserId} key={trip.id} id={trip.id} destination={trip.destination} origin={trip.origin} driver={trip.driver} passengers={trip.passengers} completed={trip.completed}/>
	    	}
	    })
			
			return (
				<div className="one-of-three-column-container">
       	  <Card.Group>
						{pendingTrips}
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

export default connect(mapStateToProps)(PendingTripsContainer)