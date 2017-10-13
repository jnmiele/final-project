function tripsReducer(state = {list: []}, action) {
	switch (action.type) {

		case "CREATE_TRIP":
			const newTrip = action.payload
			return state = {list: [...state.list, newTrip: newTrip]}

		case "DELETE_TRIP":
			const trip = action.payload
			debugger // check to see what the payload is here to ensure we filter out the right trip.
			return state = {...state.list, list: state.list.filter(t => t.destination === trip.destination && t.origin === trip.origin && t.user === trip.user)}

		case "FETCH_ALL_TRIPS":
			const trips = action.payload
			return Object.assign({}, state, {list: trips })

		case "SHOW_TRIP":
			const showTrip = action.payload
			return state = {...state, thisTrip: showTrip}

		default:
			return state
	}
}

export default tripsReducer