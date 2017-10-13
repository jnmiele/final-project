import React from 'react'

import { connect } from 'react-redux'
import { show } from '../actions/users'


class UsersShow extends React.Component {

	componentDidMount(){
		const showURL = (this.props.location.pathname)
		this.props.show(showURL)
	}

	render() {
		const thisUser = (this.props.users.showUser)
		if (thisUser) {
			return(
				<div className="user">
					email: {thisUser.email}<br/>
					id: {thisUser.id}
				</div>
			)
		} else {
			return(
				<div> loader page for user </div>
			)
		}		
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
		users: state.users
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersShow)