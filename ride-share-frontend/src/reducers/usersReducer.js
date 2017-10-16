function usersReducer(state = {currentUser: {id: "", name: "", loggedIn: localStorage.getItem("jwtToken") ? true : false}}, action) {
	switch (action.type) {

		case "LOGIN_USER":
			const currentUser = {id: action.payload.user.id, name: action.payload.user.name, loggedIn: localStorage.getItem("jwtToken") ? true : false}
			return state = {...state, currentUser}
			
		case "SHOW_USER":
			const showUser = action.payload
			return state = {...state, showUser: showUser}

		default:
			return state
	}
}

export default usersReducer
