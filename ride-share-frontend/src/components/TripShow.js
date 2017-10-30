import React from 'react'

import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showTrip, cancelTrip } from '../actions/trips'
import { requestJoin } from '../actions/userTrips'

import { Button } from 'semantic-ui-react'


class TripShow extends React.Component {

	componentDidMount(){
		const showURL = (this.props.location.pathname)
		this.props.showTrip(showURL)
	}

	handleJoin = (event) => {
		const tripId = event.target.id
		this.props.requestJoin(tripId)
    this.props.history.push('/')
	}

	cancelTrip = (event) => {
		const tripId = event.target.id
		this.props.cancelTrip(tripId)
    this.props.history.push('/')
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

	handleRate() {
		alert("feature coming soon!")
	}

  displayButton = () => {
    if (this.props.currentUser.id === this.props.thisTrip.driver.id) {
    	if (this.props.thisTrip.completed) {
    		return (
    			<div> 
    				This trip was already completed!<br/><br/>
    				<p><Button onClick={this.handleRate} id={this.props.thisTrip.id}> Rate the Riders </Button></p>
    			</div>
    		)
    	}
    	return (
    		<div> 
    			Looks like you're driving!<br/><br/>
    			<p><Button onClick={this.cancelTrip} id={this.props.thisTrip.id}> Cancel Trip </Button></p>
    		</div>
    	)
    } else if (this.props.currentUser.id !== this.props.thisTrip.driver.id) {
    	const joined = this.checkIfJoined()
    	const completed = this.props.thisTrip.completed
    	if (joined === true && !this.props.thisTrip.completed) {
    		return (
    			<div>
    				Hey {this.props.currentUser.email}! Looks like you already requested to join this trip.<br/>
    				<Link to='/me'>View My Trips</Link>
    			</div>
    		)
    	} else if (!joined && !completed) {
    		return <Button id={this.props.thisTrip.id} onClick={this.handleJoin}> Join Trip </Button>
    	} else if (!joined && completed) {
    		return <div> Sorry, this trip is no longer available. </div>
    	} else if (joined && completed) {
    		return (
    			<div>
    				This trip was already completed!<br/><br/>
    				<p><Button onClick={this.handleRate} id={this.props.thisTrip.id}> Rate the Riders </Button></p>
    			</div>
    		)		 				
    	}
    }
  }

	render() {
		if (this.props.thisTrip) {
			const key = 'AIzaSyDkLcl-yTJinR7cqhbcqldTXX8x5LSw6sg'
			const origin = () => {
				if (this.props.thisTrip.origin.includes(' ')) {
					const address = this.props.thisTrip.origin.replace(' ', '+')
					return address
				}
				return this.props.thisTrip.origin
			}
			const destination = () => {
				if (this.props.thisTrip.destination.includes(' ')) {
					const address = this.props.thisTrip.destination.replace(' ', '+')
					return address
				}
				return this.props.thisTrip.destination
			}
			const route = `https://www.google.com/maps/embed/v1/directions?key=${key}&origin=${origin()}&destination=${destination()}`
			return(
				<div className='trip-container'>
					<iframe className='map' title='map' src={route}></iframe>
					<div className='trip'>
						<h2>Origin:  {this.props.thisTrip.origin}</h2>
						<h2>Destination: {this.props.thisTrip.destination}</h2>
						<p>Driver: <Link to={`/users/${this.props.thisTrip.driver.id}`}> {this.props.thisTrip.driver.name} </Link></p>
						{this.displayButton()}
					</div>
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
		currentUser: state.users.currentUser,
		trips: state.users.trips
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TripShow)


// <div>
//     				<Button onClick={this.cancelTrip} id={this.props.thisTrip.id}> Cancel Trip </Button><br/>
//     				<br/>
//     				<Grid columns={1}> 
//           		<Grid.Column>
//     						{this.props.thisTrip.passengers.length > 0 ? <PassengerRequestContainer {...this.props.thisTrip.userTrips}/> : "Looks like there's no requests to join your trip right now..."}
//     					</Grid.Column>
//     				</Grid> 
//     			</div>