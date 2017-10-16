export function requestJoin(trip) {
  const token = localStorage.getItem("jwtToken")
  const body = JSON.stringify({trip, jwt: token})
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

export function fetchAllUserTrips(token) {
  return function(dispatch) {
    fetch("http://localhost:3000/usertrips/", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(res => res.json())
    .then(res => dispatch(allUserTrips(res)))
  }
}

function allUserTrips(params) {
  return {
    type: "FETCH_ALL_USER_TRIPS",
    payload: params
  }
}