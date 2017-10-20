import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {fetchAllTrips } from '../actions/trips'
import {setCurrentUser } from '../actions/users'
import LoginForm from './LoginForm'
import TripsContainer from './TripsContainer'

import { Button } from 'semantic-ui-react'


class Home extends React.Component {

	componentDidMount(){
		const token = localStorage.getItem("jwtToken")
		this.props.setCurrentUser(token)
		this.props.fetchAllTrips()
	}

	render() {
		if (localStorage.getItem("jwtToken")) {
			return(
				<div className="form-container">
					<h1> Going somewhere? Bring somebody!</h1>
					<Link to="/trips/new"><Button>Start a Trip</Button></Link>
					<Link to="/trips"><Button>Find a Trip</Button></Link>
				</div>
		)
		}
		return(
			<div>
				<div>
					<LoginForm />
				</div>
				<div>
					<TripsContainer />
				</div>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllTrips: (token) => {
    	dispatch(fetchAllTrips(token))
    },
    setCurrentUser: (token) => {
    	dispatch(setCurrentUser(token))
    }
  }
}

function mapStateToProps(state) {
	return {
		currentUser: state.currentUser,
		trips: state.trips.list
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
