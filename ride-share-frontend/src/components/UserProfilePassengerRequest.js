import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'

import { requestDetails, acceptPassenger, declinePassenger } from '../actions/userTrips'

class UserProfilePassengerRequest extends React.Component {

	handleAccept = (event) => {
		event.preventDefault()
		this.props.acceptPassenger(event.target.id)
	}

	handleDecline = (event) => {
		event.preventDefault()
		console.log(event.target.id)
	}

	render() {
		if (this.props && !this.props.confirmed) {
			const userShow = `/users/${this.props.user.id}`
			return(
				<Card>
					<Card.Content>
						<Card.Header>
							{this.props.trip.origin} to {this.props.trip.destination}
						</Card.Header>
						<Card.Meta>
							Date: {this.props.trip.date}
						</Card.Meta>
						<Card.Description>
							Passenger Name: <Link to={userShow}>{this.props.user.name}</Link>
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<Button size='mini' onClick={this.handleAccept} id={this.props.id}> Accept </Button>
						<Button size='mini' onClick={this.handleDecline} id={this.props.id}> Decline </Button>
					</Card.Content>
				</Card>
			)
		} else if (this.props && this.props.confirmed) {
			return null
		}
		return(	
			<div> loader.</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		acceptPassenger: (id) => {
			dispatch(acceptPassenger(id))
		}
	}
}

export default connect(null, mapDispatchToProps)(UserProfilePassengerRequest)
