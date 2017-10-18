import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showTrip } from '../actions/trips'
import { setCurrentUser } from '../actions/users'
import { requestJoin } from '../actions/userTrips'

/* ADD A TERNARY OPERATOR FOR THE BUTTON THAT CHECKS CURRENTUSER.ID VS TRIP.DRIVER.ID VS TRIP.PASSENGERS.ID */
/* IF USER.userTrips.find(thisUserTrip) { abandon trip : display join trip}  */
/* abandon trip : { can add another ternary here that offers abandon ONLY IF ACCEPTED }  */



class TripShow extends React.Component {

	componentDidMount(){
		const showURL = (this.props.location.pathname)
		this.props.showTrip(showURL)
		setTimeout(() => {
			if (localStorage.getItem('jwtToken')){
	      const token = localStorage.getItem('jwtToken')
	      this.props.setCurrentUser(token)
	    }
		}, 300)
	}

	onClick = (event) => {
		const tripId = parseInt(event.target.id)
		this.props.requestJoin(tripId)
	}

	listPassengers = () => {
		let passengers = this.props.thisTrip.passengers.forEach(passenger => {
			return passenger.name
		})
	}

	checkIfJoined = () => {
		if (this.props.currentUser.id !== 0) {
			const passengers = this.props.thisTrip.passengers
			const userId = this.props.currentUser.id
			{passengers.find(p => p.id === userId)? true:false}
		}
	}

  displayButton = () => {
    if (this.props.currentUser.id === this.props.thisTrip.driver.id) {
    	return (
    		<div> 
    			Looks like you're driving!<br/>
    			<div>
    				Passenger Requests:<br/>
    				{this.props.thisTrip.passengers > 0 ? this.listPassengers() : "Looks like there's no requests to join your trip right now..."}
    			</div>
    		</div>
    	)
    } else if (this.props.currentUser.id !== this.props.thisTrip.driver.id) {
    	if (this.checkIfJoined() === true) {
    		return <div> looks like you already joined this trip </div>
    	}
    	return <button id={this.props.thisTrip.id} onClick={this.onClick}> Join Trip </button>
    }
  }

	render() {
		console.log(this.props.thisTrip)
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
					<br/>
					{this.displayButton()}
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
    },
    setCurrentUser: (token) => {
    	dispatch(setCurrentUser(token))
    }
  }
}

function mapStateToProps(state) {
	return {
		thisTrip: state.trips.thisTrip,
		currentUser: state.users.currentUser
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TripShow)