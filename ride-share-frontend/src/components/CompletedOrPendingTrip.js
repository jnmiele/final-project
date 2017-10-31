import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Card, Image, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { markTripCompleted, markTripPending } from '../actions/users'

/*

	this component is only used on the User Profile.
	it is used for both trips that have been completed and trips that are pending.

*/ 

const CompletedOrPendingTrip = (props) => {
	const tripShowURL = `trips/${props.id}`
	const driverShowURL = `users/${props.driver.id}`

	 function confirmedPassengers() {
		if (props.passengers) {
			return props.passengers.length
		}
		return 0
	}

	this.handleMarkCompleted = (event) => {
		event.preventDefault()
		props.markTripCompleted(event.target.id)
	}

	this.handleMarkPending = (event) => {
		event.preventDefault()
		props.markTripPending(event.target.id)
	}

	this.renderButton = () => {
		console.log(props)
		if (props.userId === props.driver.id && props.location && props.location.pathname === '/me') {
			if (props.completed) {
				return <Button size='mini' onClick={this.handleMarkPending} id={props.id}>Mark Pending</Button>
			}		
			return <Button size='mini' onClick={this.handleMarkCompleted} id={props.id}>Mark Completed</Button>		
		}
		return null
	}
	return(
		<Card>
			<Image src="placeholder" />
			<Card.Content>
				<Card.Header>
					{props.origin} to {props.destination}
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
				<Link to={tripShowURL}><Button size='mini'> View Details </Button></Link> {this.renderButton()}
			</Card.Content>
		</Card>
	)
}

function mapDispatchToProps(dispatch){
	return {
		markTripCompleted: (tripId) => {
			dispatch(markTripCompleted(tripId))
		},
		markTripPending: (tripId) => {
			dispatch(markTripPending(tripId))
		}
	}
}

export default withRouter(connect(null, mapDispatchToProps)(CompletedOrPendingTrip))