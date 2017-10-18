import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Card, Button } from 'semantic-ui-react'

import { requestDetails, acceptPassenger, declinePassenger } from '../actions/userTrips'

class UserProfileTripRequest extends React.Component {

	componentDidMount() {
		const tripId = this.props.id
		this.props.requestDetails(tripId)
	}

	handleAccept = (event) => {
		event.preventDefault()
		this.props.acceptPassenger(event.target.id)
	}

	handleDecline = (event) => {
		event.preventDefault()
		console.log(event.target.id)
	}

	render() {
		const thisTrip = this.props.thisTrip
		console.log(thisTrip)
		if (thisTrip !== undefined && !thisTrip.confirmed) {
			const userShow = `/users/${thisTrip.user.id}`
			return(
				<Card>
					<Card.Content>
						<Card.Header>
							{thisTrip.trip.origin} to {thisTrip.trip.destination}
						</Card.Header>
						<Card.Meta>
							Date: {thisTrip.trip.date}
						</Card.Meta>
						<Card.Description>
							Passenger Name: <Link to={userShow}>{thisTrip.user.name}</Link>
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<Button size='mini' onClick={this.handleAccept} id={thisTrip.id}> Accept </Button>
						<Button size='mini' onClick={this.handleDecline} id={thisTrip.id}> Decline </Button>
					</Card.Content>
				</Card>
			)
		}
		return(
			<div> You've got no pending passenger requests. </div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		requestDetails: (tripInfo) => {
			dispatch(requestDetails(tripInfo))
		},
		acceptPassenger: (id) => {
			dispatch(acceptPassenger(id))
		}
	}
}

function mapStateToProps(state) {
	return {
		thisTrip: state.userTrips.tripInfo
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileTripRequest)
