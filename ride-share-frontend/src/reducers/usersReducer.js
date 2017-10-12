function usersReducer(state = {currentUser: {id: "", name: "", loggedIn: localStorage.getItem("jwtToken") ? true : false}}, action) {
	switch (action.type) {

		case "LOGIN_USER":
			localStorage.setItem("jwtToken", action.payload.jwt)
			const newCurrentUser = {id: action.payload.user_id, name: action.payload.user_name, loggedIn: true}
			return Object.assign({}, state, {currentUser: newCurrentUser })

		case "SHOW_USER":
			const showUser = action.payload
			return state = {...state, showUser}

		default:
			return state
	}
}

export default usersReducer
