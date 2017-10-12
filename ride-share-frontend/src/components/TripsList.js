import React from 'react'
import Trip from './Trip'

import { Card, Loader } from 'semantic-ui-react'
import { connect } from 'react-redux'



const TripsList = (props) => {

	if (!props.trips.list) {
		return(
			<Loader active inline='centered' />
		)
	}
	const trips = props.trips.list.map((trip, index) => <Trip key={trip.id} id={trip.id} destination={trip.destination} origin={trip.origin} userId={trip.user_id} />)	
	return(
		<Card.Group>{trips}</Card.Group>
	)
}


function mapStateToProps(state){
	return {
		trips: state.trips
	}
}

export default connect(mapStateToProps)(TripsList)