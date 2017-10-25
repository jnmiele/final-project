const initialState = {currentUser: {id: '', name: '', loggedIn: localStorage.getItem('jwtToken') ? true : false, errors: null}}

function usersReducer(state = initialState, action) {
	switch (action.type) {

		case 'LOGIN_USER':
			if (action.payload.message) {
				alert(action.payload.message)
				return state = {errors: action.payload.message}
			}
			// localStorage.setItem('jwtToken', action.payload.jwt)
			const currentUser = {id: action.payload.user.id, name: action.payload.user.name, loggedIn: localStorage.getItem('jwtToken') ? true : false}
			return state = {...state, currentUser, errors: null}
			
		case 'SHOW_USER':
			const showUser = action.payload
			return state = {...state, showUser: showUser}

		case 'SET_CURRENT_USER':
			const setCurrentUser = action.payload
			return state = {...state, currentUser: setCurrentUser}

		case 'LOGOUT_USER':
			if (action.payload === 'logout') {
				localStorage.removeItem('jwtToken')
				return state = {...state, currentUser: initialState}
			}
		break
		
		default:
			return state
	}
}

export default usersReducer
