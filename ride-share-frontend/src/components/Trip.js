import React from 'react'

import { Link } from 'react-router-dom'

const Trip = (props) => {
	const tripShowURL = `trips/${props.id}`
	const userShowURL = `users/${props.id}`
	return(
		<div className="trip">
			<div className="trip-origin">
				Origin:  {props.origin}
			</div>
			<div className="trip-destination">
				Destination: {props.destination}
			</div>
			<div className="trip-user">
				<Link to={userShowURL}> User: {props.userId} </Link>
			</div>
			<Link to={tripShowURL}> View Details </Link>
		</div>
	)
}

export default Trip