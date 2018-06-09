import React from 'react'

import { Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CompletedOrPendingTrip from '../../CompletedOrPendingTrip'

class TripsContainer extends React.Component {

	renderEmptyState = () => {
		const { containerType } = this.props;
		return containerType === 'completed'
			? <p> No completed trips at this time.</p> 
			: <p> Looks like you have no trips yet... You can <Link to='/trips/new'>start a trip</Link> or <Link to='/trips'>join a trip</Link>! </p>
	}

	renderContainerHeader = () => {
		const { containerType } = this.props;
		return containerType === 'completed'
			? 'Completed Trips'
			: 'Pending Trips'
	}

	render() {

		const { containerType, trips, id } = this.props;

		if (trips && trips.length > 0) {
	    const formattedTrips = trips.map((trip, index) => {
	    	const tripProps = {
    			date: trip.date,
    			time: trip.time,
    			userId: id,
					key: trip.id,
					id: trip.id,
					destination: trip.destination,
					origin: trip.origin,
					driver: trip.driver,
					passengers: trip.passengers,
					completed: trip.completed,
    		}

    		containerType === 'completed'
    			? trips.filter(t => t.completed)
    			: trips.filter(t => !t.completed)

    		return <CompletedOrPendingTrip {...tripProps} />
	    })
			
			return (
				<div className="one-of-three-column-container">
					<h1 className="container-header"> {this.renderContainerHeader()} </h1>
       	  <Card.Group>
						{formattedTrips}
       	  </Card.Group>
       	</div>
			)
		}

		return this.renderEmptyState()
	}
}

export default TripsContainer