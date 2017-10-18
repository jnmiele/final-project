const token = localStorage.getItem("jwtToken")

export function requestJoin(trip) {
  const body = JSON.stringify({trip, jwt: token})
  console.log(body)
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
    type: "JOIN_REQ",
    payload: trip
  }
}

export function requestDetails(id) {
  return function(dispatch) {
    fetch(`http://localhost:3000/usertrips/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(tripInfo => tripInfo.json())
    .then(tripInfo => dispatch(requested(tripInfo)))
  }
}

function requested(tripInfo) {
  return {
    type: "REQ_TRIP_INFO",
    payload: tripInfo
  }
}

export function acceptPassenger(id) {
  return function(dispatch) {
    fetch(`http://localhost:3000/usertrips/${id}/edit`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(userTrip => userTrip.json())
    .then(userTrip => dispatch(acceptPass(userTrip)))
  }
}

function acceptPass(userTrip) {
  return {
    type: "ACCEPT_PASSENGER",
    payload: userTrip
  }
}