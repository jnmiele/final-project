import React from 'react';
import { connect } from 'react-redux'

import { Grid, Card } from 'semantic-ui-react'

import { setCurrentUser } from '../actions/users'
import { fetchAllUserTrips } from '../actions/userTrips'
import PassengerRequest from './PassengerRequest'

class PassengerRequestContainer extends React.Component {

	componentDidMount() {
		const token = localStorage.getItem('jwtToken')
		this.props.fetchAllUserTrips()
		if (this.props.currentUser.id === "" && token) {
			this.props.setCurrentUser(token)
		}
	}


	render() {
		if (this.props.userTrips && this.props.userTrips.length > 0 && this.props.currentUser) {

			let passTrip = this.props.userTrips.filter(trip => trip.role === "Passenger" && !trip.confirmed)
			passTrip = passTrip.filter(pt => pt.driver.id === this.props.currentUser.id)
			passTrip = passTrip.map((req) => <PassengerRequest key={req.id} id={req.id} user={req.user} trip={req.trip} role={req.role} confirmed={req.confirmed}/>)
			
			return (
				<div className="one-of-three-column-container">
           <h1> Pending Passenger Requests </h1>
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
		},
		setCurrentUser: (token) => {
			dispatch(setCurrentUser(token))
		}
	}
}

function mapStateToProps(state) {
	return {
		userTrips: state.userTrips.all,
		currentUser: state.users.currentUser
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PassengerRequestContainer)