import React from 'react';
import { connect } from 'react-redux';
import {fetchAllTrips } from '../actions/trips'
import LoginForm from './LoginForm'
import TripsList from './TripsList'
import TripForm from './TripForm'

class Home extends React.Component {

	componentDidMount(){
		const token = localStorage.getItem("jwtToken")
		this.props.fetchAllTrips(token)
	}

	render() {
		if (localStorage.getItem("jwtToken")) {
			return(
			<div>
				<div>
					<TripForm />
				</div>
				<TripsList trips={this.props.trips} />
			</div>
		)
		} else {
			return(
			<div>
				<div>
					<LoginForm />
				</div>
				<div>
					<TripsList trips={this.props.trips} />
				</div>
			</div>
		)
		}
		
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