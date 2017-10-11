function usersReducer(state = {user: {email: "", name: [], password: ""}}, action) {
	switch (action.type) {
		case "CREATE_USER":
			return Object.assign({}, state, {user: {...state.user, user: action.payload}})
		case "LOGIN_USER":
			return Object.assign({}, state, {user: {...state.user, user: action.payload}})
		default:
		return state
	}
}

export default usersReducer