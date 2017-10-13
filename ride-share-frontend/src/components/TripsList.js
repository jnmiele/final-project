import React from 'react'
import Trip from './Trip'

import { Card } from 'semantic-ui-react'
import { connect } from 'react-redux'



const TripsList = (props) => {

	// SOMETIMES THIS DOESNT GRAB THE MOST RECENTLY UPDATED ARRAY
	// SOMETIMES THIS GETS STUCK ON "LOADER PAGE"
	// SOMETIMES IT WORKS WITH NO ISSUES 

	// RENDERS CURRENT NUMBER
	// RENDERS UNDEFINED
	// RENDERS UPDATED
	console.log("Props from <TripList>:", props)

	if (props.trips) {
		const trips = props.trips.map((trip, index) => <Trip key={trip.id} id={trip.id} destination={trip.destination} origin={trip.origin} userId={trip.user_id} />)	
		return(
			<Card.Group>{trips}</Card.Group>
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