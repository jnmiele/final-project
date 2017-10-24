import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {fetchAllTrips } from '../actions/trips'

import { Button } from 'semantic-ui-react'


class Home extends React.Component {

	componentDidMount(){
		this.props.fetchAllTrips()
	}

	render() {
		return(
			<div className="form-container">
				<h1> Going somewhere? Bring somebody!</h1>
				<Link to="/trips/new"><Button>Start a Trip</Button></Link>
				<Link to="/trips"><Button>Find a Trip</Button></Link>
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllTrips: (token) => {
    	dispatch(fetchAllTrips(token))
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
