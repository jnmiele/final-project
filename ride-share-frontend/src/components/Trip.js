import React from 'react'

import { Link } from 'react-router-dom'

const Trip = (props) => {
	const showURL = `trips/${props.id}`
	return(
		<div className="trip">
			<div className="trip-origin">
				Origin:  {props.origin}
			</div>
			<div className="trip-destination">
				Destination: {props.destination}
			</div>
			<div className="trip-user">
				User: {props.userId}
			</div>
			<Link to={showURL}> View Details </Link>
		</div>
	)
}

export default Trip