import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import {fetchAllTrips } from '../actions/trips'
import { setUser } from '../actions/users'
import LoginForm from './LoginForm'
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
    } else {
      return (
        <div className="container">
        	{this.renderComponents(this.props)}  
        </div>
      )
    }
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
