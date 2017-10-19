function tripsReducer(state = {list: []}, action) {
	switch (action.type) {

		case "JOIN_REQ":
			const joinReq = action.payload
			return state = {list: [...state.list, joinReq]}

		case "FETCH_ALL_USER_TRIPS":
			const trips = action.payload
			return state = {...state, all: trips}

		case "REQ_TRIP_INFO":
			const tripInfo = action.payload
			return state = {...state, tripInfo}

		case "ACCEPT_PASSENGER":
			let userTrip = state.all.find(n => n.id === action.payload.id)
			userTrip.confirmed = true
			return state

		default:
			return state
	}
}

export default tripsReducer