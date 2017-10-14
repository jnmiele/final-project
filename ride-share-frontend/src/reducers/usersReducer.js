function usersReducer(state = {currentUser: {id: "", name: "", loggedIn: localStorage.getItem("jwtToken") ? true : false}}, action) {
	switch (action.type) {

		case "LOGIN_USER":
			if (!action.payload.message) {
				localStorage.setItem("jwtToken", action.payload.jwt)
			}
			const currentUser = {id: action.payload.user_id, name: action.payload.user_name, loggedIn: localStorage.getItem("jwtToken") ? true : false}
			return state = {...state, currentUser}
			
		case "SHOW_USER":
			const showUser = action.payload
			return state = {...state, showUser}

		default:
			return state
	}
}

export default usersReducer
