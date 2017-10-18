import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

const UserProfileTripRequest = (props) => {

	console.log(props)
	return(
		<Card>
			<Card.Content>
				<Card.Header>
					{props.origin} to {props.destination}
				</Card.Header>
				<Card.Meta>
					Date: No Date Bro
				</Card.Meta>
				<Card.Description>
					Passenger Name: 
				</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Link to=''> Accept Passenger </Link>
				<Link to=''> Decline Passenger </Link>
			</Card.Content>
		</Card>
	)
}


export default UserProfileTripRequest
