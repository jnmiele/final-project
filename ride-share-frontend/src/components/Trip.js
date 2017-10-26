import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'


const Trip = (props) => {
	const tripShowURL = `trips/${props.id}`
	const driverShowURL = `users/${props.driver.id}`

	 function confirmedPassengers() {
		if (props.passengers) {
			return props.passengers.length
		}
		return 0
	}
	return(
		<Card>
			<Image src="placeholder" />
			<Card.Content>
				<Card.Header>
					{props.origin} <br/>to <br/>{props.destination}
				</Card.Header>
				<Card.Meta>
					Date: {props.date}
				</Card.Meta>
				<Card.Description>
					Driver:<Link to={driverShowURL}> {props.driver.name} </Link><br/>
				</Card.Description>
				<Card.Description>
					Passenger Requests: {confirmedPassengers()}
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Link to={tripShowURL}> View Details </Link>
			</Card.Content>
		</Card>
	)
}

export default Trip