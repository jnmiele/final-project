import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'

import { acceptPassenger, declinePassenger } from '../actions/userTrips'

class PassengerRequest extends React.Component {

	handleAccept = (event) => {
		event.preventDefault()
		this.props.acceptPassenger(event.target.id)
	}

	handleDecline = (event) => {
		event.preventDefault()
		this.props.declinePassenger(event.target.id)
	}

	checkIfJoined() {
  if (this.props.currentUser.id !== 0) {
    const passengers = this.props.thisTrip.passengers
    const userId = this.props.currentUser.id
	    if (passengers.find(p => p.id === userId)) {
	      return true
	    }
	  }
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
		},
		declinePassenger: (id) => {
			dispatch(declinePassenger(id))
		}
	}
}

export default connect(null, mapDispatchToProps)(PassengerRequest)
