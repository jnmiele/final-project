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
	}

	render() {
		if (this.props.thisTrip) {
			return(
		 
				<div className="trip">
					<div className="trip-origin">
						Origin:  {this.props.thisTrip.origin}
					</div>
					<div className="trip-destination">
						Destination: {this.props.thisTrip.destination}
					</div>
					<div className="trip-user">
						Driver: <Link to={`users/${this.props.thisTrip.driver.id}`}> {this.props.thisTrip.driver.name} </Link>
					</div>
					<button id={this.props.thisTrip.id} onClick={this.onClick}> Join Trip </button>
				</div>
				
			)
		}
		return <div> loader page </div>
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
		trips: state.trips.list,
		thisTrip: state.trips.thisTrip,
		userTrips: state.userTrips.list,
		users: state.users
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TripShow)