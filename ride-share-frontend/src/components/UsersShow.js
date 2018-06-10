import React from 'react'

import { connect } from 'react-redux'
import { show } from '../actions/users'
import TripsContainer from './UserProfile/TripsContainer'
import UserProfileBio from './UserProfileBio'

import { Grid } from 'semantic-ui-react'


class UsersShow extends React.Component {

	componentDidMount(){
		const { location: { pathname }, show } = this.props;
		const user = (pathname)
		show(user)
	}

	render() {
		const { user, user: { showUser }} = this.props
		if (user !== undefined && showUser !== undefined) {
			return(
				<div>
					<UserProfileBio user={showUser} />
					<div>
						<Grid columns={2} divided>

	          	<Grid.Column>
	            	<TripsContainer {...showUser}/>
	         	  </Grid.Column>

	          	<Grid.Column>
	            	<TripsContainer {...showUser}/>
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
	const { users, trips: { list }, userTrips } = state
	return {
		user: users,
		trips: list,
		userTrips: userTrips
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow)