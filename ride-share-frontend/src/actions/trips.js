export function createTrip(tripParams, history) {
  const token = localStorage.getItem("jwtToken")
  const body = JSON.stringify(tripParams)
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
	}
}

function newTrip(params) {
  return {
    type: "CREATE_TRIP",
    payload: params
  }
}


export function fetchAllTrips(token) {
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


export function requestJoin(trip) {
  const jwtDecode = require('jwt-decode')
  const token = localStorage.getItem("jwtToken")
  const userId = jwtDecode(token)
  const body = JSON.stringify({trip, ...userId})
  return function(dispatch) {
    fetch(`http://localhost:3000/usertrips/create`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      },
      body: body
    })
    .then(res => res.json())
    .then(res => dispatch(sendReq(res)))
  }
}

function sendReq(trip) {
  return {
    type: "JOIN_TRIP",
    payload: trip
  }
}



