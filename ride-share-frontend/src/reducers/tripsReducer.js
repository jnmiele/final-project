function tripsReducer(state = {list: []}, action) {
	switch (action.type) {

		case "CREATE_TRIP":
			if (action.payload.message) {
				alert(action.payload.message)
				return state
			}
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