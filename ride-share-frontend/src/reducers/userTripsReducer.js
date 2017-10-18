function tripsReducer(state = {list: []}, action) {
	switch (action.type) {

		case "JOIN_REQ":
			const joinReq = action.payload
			return state = {list: [...state.list, joinReq]}

		case "FETCH_ALL_USER_TRIPS":
			const trips = action.payload
			return Object.assign({}, state, {list: trips })

		case "REQ_TRIP_INFO":
			const tripInfo = action.payload
			return state = {...state, tripInfo}

		case "ACCEPT_PASSENGER":
			const userTrip = action.payload
			return state

		default:
			return state
	}
}

export default tripsReducer