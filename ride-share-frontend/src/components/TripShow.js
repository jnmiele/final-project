import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showTrip, requestJoin } from '../actions/trips'

/* ADD A TERNARY OPERATOR FOR THE BUTTON THAT CHECKS CURRENTUSER.ID VS TRIP.DRIVER.ID VS TRIP.PASSENGERS.ID */



class TripShow extends React.Component {

	componentDidMount(){
		const showURL = (this.props.location.pathname)
		this.props.showTrip(showURL)
	}

	onClick = (event) => {
		const tripId = event.target.id
		this.props.requestJoin(tripId)
		// on click send request to driver
	}

	render() {
		const thisTrip = (this.props.trips.trips.thisTrip)

		if (thisTrip) {
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
		}
		return(
			<div> loader page </div>
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