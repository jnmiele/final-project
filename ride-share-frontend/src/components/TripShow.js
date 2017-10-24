import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showTrip, cancelTrip } from '../actions/trips'
import { requestJoin } from '../actions/userTrips'
import PassengerRequestContainer from './PassengerRequestContainer'

import { Grid } from 'semantic-ui-react'


class TripShow extends React.Component {

	componentDidMount(){
		const showURL = (this.props.location.pathname)
		const token = localStorage.getItem('jwtToken')
		this.props.showTrip(showURL)
		if (this.props.currentUser.id === "" && token) {
			this.props.setCurrentUser(token)
		}
	}

	handleJoin = (event) => {
		const tripId = event.target.id
		this.props.requestJoin(tripId)
		this.props.history.push('/me')
	}

	cancelTrip = (event) => {
		const tripId = event.target.id
		this.props.cancelTrip(tripId)
		this.props.history.push('/me')
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

  displayButton = () => {
    if (this.props.currentUser.id === this.props.thisTrip.driver.id) {
    	return (
    		<div> 
    			Looks like you're driving!<br/>
    			<div>
    				<button onClick={this.cancelTrip} id={this.props.thisTrip.id}> Cancel Trip </button><br/>
    				<br/>
    				<Grid columns={1}> 
    					<h1> Passenger Requests: </h1>
          		<Grid.Column>
    						{this.props.thisTrip.passengers.length > 0 ? <PassengerRequestContainer/> : "Looks like there's no requests to join your trip right now..."}
    					</Grid.Column>
    				</Grid> 
    			</div>
    		</div>
    	)
    } else if (this.props.currentUser.id !== this.props.thisTrip.driver.id) {
    	const joined = this.checkIfJoined()
    	if (joined === true) {
    		return <div> looks like you already joined this trip </div>
    	}
    	return <button id={this.props.thisTrip.id} onClick={this.handleJoin}> Join Trip </button>
    }
  }

	render() {
		if (this.props.thisTrip) {
			console.log(`users/${this.props.thisTrip.driver.id}`)
			return(
				<div className="trip">
					<div className="trip-origin">
						Origin:  {this.props.thisTrip.origin}
					</div>
					<div className="trip-destination">
						Destination: {this.props.thisTrip.destination}
					</div>
					<div className="trip-user">
						Driver: <Link to={`/users/${this.props.thisTrip.driver.id}`}> {this.props.thisTrip.driver.name} </Link>
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
    cancelTrip: (id) => {
    	dispatch(cancelTrip(id))
    }
  }
}

function mapStateToProps(state) {
	return {
		user: state.users.currentUser,
		thisTrip: state.trips.thisTrip,
		currentUser: state.users.currentUser
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TripShow)