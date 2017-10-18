import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'


const Trip = (props) => {
	const tripShowURL = `trips/${props.id}`
	const driverShowURL = `users/${props.driver.id}`

	 function confirmedPassengers() {
		if (props.passengers) {
			props.passengers.filter(passenger => {
				return passenger.confirmed === true
			})
		}
		return 0
	}

	return(
		<Card>
			<Image src="placeholder" />
			<Card.Content>
				<Card.Header>
					{props.origin} to {props.destination}
				</Card.Header>
				<Card.Meta>
					Date: {props.date} No Date Bro
				</Card.Meta>
				<Card.Description>
					Driver:<Link to={driverShowURL}> {props.driver.name} </Link><br/>
				</Card.Description>
				<Card.Description>
					Passengers: {confirmedPassengers()}
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Link to={tripShowURL}> View Details </Link>
			</Card.Content>
		</Card>
	)
}

export default Trip


// driverShowURL

//tripShowURL