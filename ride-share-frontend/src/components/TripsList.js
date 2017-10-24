import React from 'react'
import Trip from './Trip'

import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'



const TripsList = (props) => {
	if (props.trips) {
		const trips = props.trips.map((trip) => {
			if (!trip.completed) {
				return <Trip key={trip.id} id={trip.id} destination={trip.destination} origin={trip.origin} driver={trip.driver} passengers={trip.passengers} date={trip.date}/>	
			}
		})
		return(
			<Card.Group>
				{trips}
			</Card.Group>
		)
	}
	return(
		<div> loader page </div>
	)
}


function mapStateToProps(state){
	return {
		trips: state.trips.list
	}
}

export default connect(mapStateToProps)(TripsList)