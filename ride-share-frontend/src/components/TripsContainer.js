import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import {fetchAllTrips } from '../actions/trips'

import TripForm from './TripForm'
import TripsList from './TripsList'


class TripsContainer extends React.Component {

	componentDidMount(){
		this.props.fetchAllTrips()
	}

	renderComponents = (props) => {
		if (this.props.props) {
			if (this.props.props.location.pathname === "/trips"){
				return (<TripsList />)
			} else if (this.props.props.location.pathname === "/trips/new") {
				return (<TripForm {...props}/>)
			}
		}
	}

	render() {
    return (
      <div id="trip-container">
      	{this.renderComponents()}  
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllTrips: () => {
    	dispatch(fetchAllTrips())
    }
  }
}

function mapStateToProps(state) {
	return {
		trips: state.trips.list
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsContainer)
