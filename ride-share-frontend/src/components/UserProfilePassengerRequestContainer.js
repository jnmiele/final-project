import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { Grid, Card } from 'semantic-ui-react'

import { fetchAllUserTrips } from '../actions/userTrips'
import UserProfilePassengerRequest from './UserProfilePassengerRequest'

class UserProfilePassengerRequestContainer extends React.Component {

	componentDidMount() {
		console.log("request container mounted")
		this.props.fetchAllUserTrips()
	}


	render() {
		if (this.props.userTrips && this.props.userTrips.length > 0) {
			let passengers = this.props.userTrips.filter(trip => trip.role === "Passenger")
			
			passengers = passengers.map((req, index) => <UserProfilePassengerRequest key={index} id={req.id} user={req.user} trip={req.trip} role={req.role} confirmed={req.confirmed}/>)
			return (
				<Grid.Column>
		      <Card.Group>
		      {passengers}
		      </Card.Group>
		    </Grid.Column>
			)	
		}
		return(
			<div> loader </div>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
		fetchAllUserTrips: () => {
			dispatch(fetchAllUserTrips())
		}
	}
}

function mapStateToProps(state) {
	return {
		userTrips: state.userTrips.all
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePassengerRequestContainer)