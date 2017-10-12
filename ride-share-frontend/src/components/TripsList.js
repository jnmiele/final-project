import React from 'react'
import Trip from './Trip'


const TripsList = (props) => {

	const trips = props.trips.map((trip, index) => <Trip key={trip.id} id={trip.id} destination={trip.destination} origin={trip.origin} userId={trip.user_id} />)
	return(
		<div>{trips}</div>
	)
}

export default TripsList