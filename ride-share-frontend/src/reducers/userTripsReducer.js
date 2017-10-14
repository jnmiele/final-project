function tripsReducer(state = {list: []}, action) {
	switch (action.type) {

		case "JOIN_REQ":
			const joinReq = action.payload
			return state = {list: [...state.list, joinReq]}

		case "FETCH_ALL_USER_TRIPS":
			const trips = action.payload
			return Object.assign({}, state, {list: trips })

		default:
			return state
	}
}

export default tripsReducer