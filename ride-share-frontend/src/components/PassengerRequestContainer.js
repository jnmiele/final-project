import React from 'react';
import { connect } from 'react-redux'

import { Card } from 'semantic-ui-react'

import { fetchAllUserTrips } from '../actions/userTrips'
import PassengerRequest from './PassengerRequest'

class PassengerRequestContainer extends React.Component {

	componentDidMount() {
		this.props.fetchAllUserTrips()
	}


	render() {
		if (this.props.userTrips && this.props.userTrips.length > 0 && this.props.currentUser) {

			let passTrip = this.props.userTrips.filter(trip => trip.role === "Passenger" && !trip.confirmed)
			passTrip = passTrip.filter(pt => pt.driver.id === this.props.currentUser.id)
			passTrip = passTrip.map((req) => <PassengerRequest key={req.id} id={req.id} user={req.user} trip={req.trip} role={req.role} confirmed={req.confirmed}/>)
			
			return (
				<div className="one-of-three-column-container">
		      <Card.Group>
			      {passTrip}
		      </Card.Group>
	      </div>
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
		user: state.users.currentUser,
		userTrips: state.userTrips.all,
		currentUser: state.users.currentUser
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerRequestContainer)