import React from 'react';

import { Card } from 'semantic-ui-react'

import PassengerRequest from './PassengerRequest'

class PassengerRequestContainer extends React.Component {
	render() {
		if (this.props.userTrips && this.props.userTrips.length > 0 && this.props.currentUser) {

			let passTrip = this.props.userTrips.filter(trip => trip.role === "Passenger" && !trip.confirmed)
			passTrip = passTrip.filter(pt => pt.driver.id === this.props.currentUser.id)
			passTrip = passTrip.map((req) => <PassengerRequest key={req.id} id={req.id} user={req.user} trip={req.trip} role={req.role} confirmed={req.confirmed}/>)
			
			return (
				<div className="one-of-three-column-container">
          <h1 className="container-header"> Pending Passenger Requests </h1>
		      <Card.Group>
			      {passTrip}
		      </Card.Group>
	      </div>
			)	
		}
		return(
			<p> No pending passenger requests at this time.</p>
		)
	}
}

export default PassengerRequestContainer