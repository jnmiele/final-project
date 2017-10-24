import React from 'react'

import { connect } from 'react-redux'
import { show } from '../actions/users'
import CompletedTripsContainer from './CompletedTripsContainer'
import PendingTripsContainer from './PendingTripsContainer'
import UserProfileBio from './UserProfileBio'

import { Grid } from 'semantic-ui-react'


class UsersShow extends React.Component {

	componentDidMount(){
		const user = (this.props.location.pathname)
		this.props.show(user)
	}

	render() {
		if (this.props.user !== undefined && this.props.user.showUser !== undefined) {
			return(
				<div>
					<UserProfileBio user={this.props.user.currentUser} />
					<div>
						<Grid columns={2} divided>

	          	<Grid.Column>
	            	<h1 className="container-header"> Completed Trips </h1>
	            	<CompletedTripsContainer/>
	         	  </Grid.Column>

	          	<Grid.Column>
	            	<h1 className="container-header"> Pending Trips </h1>
	            	<PendingTripsContainer/>
	          	</Grid.Column>

	        	</Grid>
	        </div>
	      </div>
			)
		}
		return(
			<div> loader page for user </div>
		)
	}		
}

function mapDispatchToProps(dispatch) {
	return {
    show: (user) => {
      dispatch(show(user))
    }
	}
}

function mapStateToProps(state) {
	return {
		user: state.users,
		trips: state.trips.list,
		userTrips: state.userTrips
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow)