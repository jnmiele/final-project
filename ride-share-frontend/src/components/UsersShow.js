import React from 'react'

import { connect } from 'react-redux'
import { show } from '../actions/users'


class UsersShow extends React.Component {

	componentDidMount(){
		const user = (this.props.props.location.pathname)
		this.props.show(user)
	}

	render() {
		console.log("UserShow this.props", this.props)
		if (this.props.user !== undefined && this.props.user.showUser !== undefined) {
			const thisUser = (this.props.user.showUser)
			return(
				<div className="user">
					email: {thisUser.email}<br/>
					id: {thisUser.id}
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