import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'


const Trip = (props) => {
	const tripShowURL = `trips/${props.id}`
	const userShowURL = `users/${props.id}`
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
					Driver:<Link to={userShowURL}> {props.driver.name} </Link><br/>
					Passengers: {props.passengers.length}
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Link to={tripShowURL}> View Details </Link>
			</Card.Content>
		</Card>
	)
}

export default Trip