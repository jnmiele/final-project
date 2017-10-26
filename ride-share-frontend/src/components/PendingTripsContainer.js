import React from 'react';

import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CompletedOrPendingTrip from './CompletedOrPendingTrip'


class PendingTripsContainer extends React.Component {

	render() {
		if (this.props.trips && this.props.trips.length > 0) {

	    const pendingTrips = this.props.trips.map((trip, index) => {
	    	if (!trip.completed) {
	    		return <CompletedOrPendingTrip date={trip.date} time={trip.time} userId={this.props.id} key={trip.id} id={trip.id} destination={trip.destination} origin={trip.origin} driver={trip.driver} passengers={trip.passengers} completed={trip.completed}/>
	    	}
	    	return null
	    })
			
			return (
				<div className="one-of-three-column-container">
					<h1 className="container-header"> Pending Trips </h1>
       	  <Card.Group>
						{pendingTrips}
       	  </Card.Group>
       	</div>
			)	
		}
		return(	
			<p> Looks like you have no trips yet... You can <Link to='/trips/new'>start a trip</Link> or <Link to='/trips'>join a trip</Link>! </p>
		)
	}
}

export default PendingTripsContainer