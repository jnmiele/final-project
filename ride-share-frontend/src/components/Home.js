import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
					<br/><br/><br/><br/>
					<h3> Going somewhere? Bring somebody!</h3>
					<Link to="/new_trip"><button>Start a Trip</button></Link>
					<Link to="/trips"><button>Find a Trip</button></Link>
					<br/><br/><br/><br/>
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
