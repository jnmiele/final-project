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
    .then(res => {
      dispatch(fetchAllUserTrips())
    })
  }
}

export function fetchAllUserTrips() {
  return function(dispatch) {
    fetch(`http://localhost:3000/usertrips`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(alltrips => alltrips.json())
    .then(alltrips => dispatch(fetchAllUT(alltrips)))
  }
}

function fetchAllUT(allTrips) {
  return {
    type: "FETCH_ALL_USER_TRIPS",
    payload: allTrips
  }
}


export function declinePassenger(id) {
  return function(dispatch) {
    fetch(`http://localhost:3000/usertrips/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(res => res.json())
    .then(res => {
      dispatch(fetchAllUserTrips())
    })
  }
}
