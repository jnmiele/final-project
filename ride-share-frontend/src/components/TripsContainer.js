import React from 'react';

import { setUser } from '../actions/users'
import {fetchAllTrips } from '../actions/trips'
import { connect } from 'react-redux'
import TripForm from './TripForm'
import TripsList from './TripsList'


class TripsContainer extends React.Component {

	componentDidMount(){
		console.log('mounting trips container')
		const token = localStorage.getItem("jwtToken")
		this.props.fetchAllTrips(token)
	}

	renderComponents = (props) => {
		if (props.location.pathname === "/trips"){
			return (<TripsList />)
		} else if (props.location.pathname === "/trips/new") {
			return (<TripForm {...props}/>)
		}
	}

	render() {
		return(
			<div>
				{this.renderComponents(this.props)}
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
