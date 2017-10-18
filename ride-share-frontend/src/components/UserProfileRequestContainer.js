import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import 'UserProfileTripRequest' from './UserProfileTripRequest'

class UserProfileRequestContainer extends React.Component {

	render() {
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
		trips: state.trips.list
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileRequestContainer)