export function createTrip(tripParams, history) {
  const body = JSON.stringify(tripParams)
  const token = localStorage.getItem('jwtToken')
  return function(dispatch, history) {
  	fetch("http://localhost:3000/trips/new", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    },
    body: body
  })
  .then(res => res.json())
  .then(res => dispatch(newTrip(res)))
  .then(() => fetchAllTrips())
	}
}

function newTrip(params) {
  return {
    type: "CREATE_TRIP",
    payload: params
  }
}


export function fetchAllTrips() {
  const token = localStorage.getItem('jwtToken')
  return function(dispatch) {
    fetch("http://localhost:3000/trips/", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(res => res.json())
    .then(res => dispatch(allTrips(res)))
  }
}

function allTrips(params) {
  return {
    type: "FETCH_ALL_TRIPS",
    payload: params
  }
}


export function showTrip(trip) {
  return function(dispatch) {
    fetch(`http://localhost:3000${trip}`, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => dispatch(showPage(res)))
  }
}

function showPage(trip) {
  return {
    type: "SHOW_TRIP",
    payload: trip
  }
}


export function cancelTrip(id) {
  const token = localStorage.getItem('jwtToken')
  return function(dispatch) {
    fetch(`http://localhost:3000/trips/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(res => res.json())
    .then(res => fetchAllTrips())
  }
}