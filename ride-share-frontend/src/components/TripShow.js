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
    this.props.history.push('/me')
	}

	cancelTrip = (event) => {
		const tripId = event.target.id
		this.props.cancelTrip(tripId)
    this.props.history.push('/me')
	}

	checkIfJoined() {
		const { 
			currentUser: { id }, 
			thisTrip: { passengers } 
		} = this.props

  	if (id !== 0) {
	    passengers.find(p => p.id === id) ? true : false 
	  }
	}

	handleRate() {
		alert("feature coming soon!")
	}

  displayButton = () => {
  	const {
  		currentUser,
  		thisTrip,
  		thisTrip: { driver, completed }
  	} = this.props

    if (currentUser.id === driver.id) {
    	if (completed) {
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
    } else if (currentUser.id !== driver.id) {
    	const joined = this.checkIfJoined()

    	if (joined === true && !completed) {
    		return (
    			<div>
    				Hey {currentUser.email}! Looks like you already requested to join this trip.<br/>
    				<Link to='/me'>View My Trips</Link>
    			</div>
    		)

    	} else if (!joined && !completed) {
    		return <Button id={thisTrip.id} onClick={this.handleJoin}> Join Trip </Button>

    	} else if (!joined && completed) {
    		return <div> Sorry, this trip is no longer available. </div>

    	} else if (joined && completed) {
    		return (
    			<div>
    				This trip was already completed!<br/><br/>
    				<p><Button onClick={this.handleRate} id={thisTrip.id}> Rate the Riders </Button></p>
    			</div>
    		)		 				
    	}
    }
  }

	render() {
		const { thisTrip } = this.props

		if (thisTrip) {

			// Hide API key
			const key = ''

			/**
			 * Helper method to replace whitespace in the origin (string) with a '+' 
			 */
			const origin = () => {
				if (thisTrip.origin.includes(' ')) {
					const address = thisTrip.origin.replace(' ', '+')
					return address
				}
				return thisTrip.origin
			}

			/**
			 * Helper method to replace whitespace in the destination (string) with a '+' 
			 */
			const destination = () => {
				if (thisTrip.destination.includes(' ')) {
					const address = thisTrip.destination.replace(' ', '+')
					return address
				}
				return thisTrip.destination
			}

			const route = `https://www.google.com/maps/embed/v1/directions?key=${key}&origin=${origin()}&destination=${destination()}`

			return(
				<div className='trip-container'>
					<iframe className='map' title='map' src={route}></iframe>
					<div className='trip'>
						<h2>Origin:  {thisTrip.origin}</h2>
						<h2>Destination: {thisTrip.destination}</h2>
						<p>Driver: <Link to={`/users/${thisTrip.driver.id}`}> {thisTrip.driver.name} </Link></p>
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
	const { 
		trips: { thisTrip }, 
		users: { currentUser } 
	} = state
	return {
		thisTrip: thisTrip,
		currentUser: currentUser
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TripShow)
