import React from 'react';
import { connect } from 'react-redux'

import {fetchAllTrips } from '../actions/trips'

import TripForm from './TripForm'
import TripsList from './TripsList'


class TripsContainer extends React.Component {

	componentDidMount(){
		this.props.fetchAllTrips()
	}

	renderComponents = (props) => {
		if (this.props.trips) {
			if (this.props.history.location.pathname === "/trips"){
				return (<TripsList />)
			} else if (this.props.location.pathname === "/trips/new") {
				return (<TripForm {...this.props}/>)
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
