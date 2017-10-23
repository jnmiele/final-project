function tripsReducer(state = {list: []}, action) {
	switch (action.type) {

		case "CREATE_TRIP":
		console.log("creating trip", action.payload)
			const newTrip = action.payload
			return state = {list: [...state.list, newTrip]}

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