import React from 'react';

import { setUser } from '../actions/users'
import {fetchAllTrips } from '../actions/trips'
import { connect } from 'react-redux'

import TripsList from './TripsList'


class TripsContainer extends React.Component {

	componentDidMount(){
		const token = localStorage.getItem("jwtToken")
		this.props.fetchAllTrips(token)
	}

	render() {
		
		return(
			<div>
				<h1> Yo hello from TripsContainer </h1>
				<input type="text" placeholder="where ya headed?"/>
				<TripsList trips={this.props.trips} />
			</div>
		)
	}
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (token) => {
      dispatch(setUser(token))
    },
    fetchAllTrips: (token) => {
    	dispatch(fetchAllTrips(token))
    }
  }
}

function mapStateToProps(state) {
	return {
		trips: state.trips.list
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsContainer)
