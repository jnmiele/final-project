import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import {fetchAllTrips } from '../actions/trips'
import {fetchAllUserTrips } from '../actions/userTrips'
import TripForm from './TripForm'
import TripsList from './TripsList'


class TripsContainer extends React.Component {

	componentDidMount(){
		const token = localStorage.getItem("jwtToken")
		this.props.fetchAllTrips(token)
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
		if (!localStorage.getItem('jwtToken')) {
      return <Redirect to="/login" />
    }
    return (
      <div className="container">
      	{this.renderComponents(this.props)}  
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllTrips: (token) => {
    	dispatch(fetchAllTrips(token))
    },
    fetchAllUserTrips: (token) => {
    	dispatch(fetchAllUserTrips(token))
    }
  }
}

function mapStateToProps(state) {
	return {
		trips: state.trips.list
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsContainer)
