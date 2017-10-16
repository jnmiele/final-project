import React from 'react'

import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { showTrip } from '../actions/trips'
import { requestJoin } from '../actions/userTrips'

/* ADD A TERNARY OPERATOR FOR THE BUTTON THAT CHECKS CURRENTUSER.ID VS TRIP.DRIVER.ID VS TRIP.PASSENGERS.ID */
/* IF USER.userTrips.find(thisUserTrip) { abandon trip : display join trip}  */
/* abandon trip : { can add another ternary here that offers abandon ONLY IF ACCEPTED }  */



class TripShow extends React.Component {

	componentDidMount(){
		const showURL = (this.props.location.pathname)
		this.props.showTrip(showURL)
	}

	onClick = (event) => {
		const tripId = parseInt(event.target.id)
		this.props.requestJoin(tripId)
		// redirect back to user show page
	}

	render() {
		console.log("TripShow this.props", this.props)

		const thisTrip = (this.props.trips.trips.thisTrip)

		if (thisTrip && localStorage.getItem('jwtToken')) {
			return(
				<div className="trip">
					<div className="trip-origin">
						Origin:  {thisTrip.origin}
					</div>
					<div className="trip-destination">
						Destination: {thisTrip.destination}
					</div>
					<div className="trip-user">
						Driver: <Link to={`users/${thisTrip.driver.id}`}> {thisTrip.driver.name} </Link>
					</div>
					<button id={thisTrip.id} onClick={this.onClick}> Join Trip </button>
				</div>
			)
		} else if (thisTrip) {
			<div> loader page </div>
		}
		return(
			<Redirect to='/login' />
		)
	}
}

function mapDispatchToProps(dispatch) {
	return {
    showTrip: (trip) => {
      dispatch(showTrip(trip))
    },
    requestJoin: (trip) => {
    	dispatch(requestJoin(trip))
    }
  }
}

function mapStateToProps(state) {
	return {
		trips: state
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TripShow)