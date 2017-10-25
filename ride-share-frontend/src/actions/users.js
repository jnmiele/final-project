const token = localStorage.getItem('jwtToken')

export function createUser(userParams) {
  const body = JSON.stringify(userParams)
  return function(dispatch) {
  	fetch('http://localhost:3000/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: body
  })
  .then(res => res.json())
  .then(res => dispatch(doLogin(res)))
	}
}

export function loginUser(params) {
  const body = JSON.stringify(params)
  return function(dispatch) {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: body
    })
    .then(res => res.json())
    .then(res => {
      const token = localStorage.setItem('jwtToken', res.jwt)
      dispatch(doLogin(res))
    })
  }
}

function doLogin(params) {
  return {
    type: 'LOGIN_USER',
    payload: params
  }
}


export function show(user) {
  return function(dispatch) {
    fetch(`http://localhost:3000${user}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(userInfo => userInfo.json())
    .then(userInfo => dispatch(showUser(userInfo)))
  }
}

function showUser(user) {
  return {
    type: 'SHOW_USER',
    payload: user
  }
}


export function setCurrentUser() {
  return function(dispatch) {
   fetch(`http://localhost:3000/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${token}`
    }
   })
   .then(user => user.json())
   .then(user => dispatch(set(user))
  )}
}

function set(user) {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  }
}


export function logoutUser() {
  return {
    type: 'LOGOUT_USER',
    payload: 'loogout'
  }
}


export function markTripCompleted(id) {
  return function(dispatch) {
    fetch(`http://localhost:3000/trips/${id}/edit`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(trip => trip.json())
    .then((user) => {
      dispatch(set(user))
    })
  }
}


export function markTripPending(id) {
  return function(dispatch) {
    fetch(`http://localhost:3000/trips/${id}/edit`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${token}`
      }
    })
    .then(user => user.json())
    .then((user) => {
      dispatch(set(user))
    })
  }
}