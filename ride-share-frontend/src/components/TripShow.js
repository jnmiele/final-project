import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showTrip } from '../actions/trips'


class TripShow extends React.Component {

	componentDidMount(){
		const showURL = (this.props.location.pathname)
		this.props.showTrip(showURL)
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
						User: {thisTrip.user_id}
					</div>
					
				</div>
			)
		} else {
			return(
				<div> loader page </div>
			)
		}		
	}
}

function mapDispatchToProps(dispatch) {
	return {
    showTrip: (trip) => {
      dispatch(showTrip(trip))
    }
  }
}

function mapStateToProps(state) {
	return {
		trips: state
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TripShow)